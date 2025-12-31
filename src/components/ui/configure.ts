
// --- Theming API ---

type H8Config = {
    mode?: 'light' | 'dark' | 'system';
    theme?: {
        primary?: string; // HSL value e.g. "222.2 47.4% 11.2%"
        primaryForeground?: string;
        radius?: string; // e.g. "0.5rem"
    }
};

export const configure = (config: H8Config) => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // 1. Handle Mode
    if (config.mode) {
        const root = document.documentElement;
        if (config.mode === 'dark') {
            root.classList.add('dark');
        } else if (config.mode === 'light') {
            root.classList.remove('dark');
        } else if (config.mode === 'system') {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
            }
        }
    }

    // 2. Handle Theme Variables
    if (config.theme) {
        const root = document.documentElement;
        if (config.theme.primary) {
            root.style.setProperty('--primary', config.theme.primary);
        }
        if (config.theme.primaryForeground) {
            root.style.setProperty('--primary-foreground', config.theme.primaryForeground);
        }
        if (config.theme.radius) {
            const radius = config.theme.radius;
            root.style.setProperty('--radius', radius);
            root.style.setProperty('--radius-md', radius);
            root.style.setProperty('--radius-sm', `calc(${radius} - 0.125rem)`);
            root.style.setProperty('--radius-lg', `calc(${radius} + 0.125rem)`);
        }
    }
};
