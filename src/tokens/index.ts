/**
 * Hash8 Design Tokens
 * Single source of truth for all design values
 * 
 * These tokens are implemented via CSS variables in index.css
 * and extended in tailwind.config.ts
 * 
 * Usage: Components should use Tailwind classes that reference these tokens
 * e.g., bg-background, text-foreground, rounded-md, p-4
 */

export const tokens = {
  colors: {
    background: 'var(--background)',
    foreground: 'var(--foreground)',
    border: 'var(--border)',
    muted: 'var(--muted)',
    mutedForeground: 'var(--muted-foreground)',
    primary: 'var(--primary)',
    primaryForeground: 'var(--primary-foreground)',
  },
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
    '3xl': '4rem',  // 64px
  },
  radius: {
    none: '0',
    sm: '0.25rem',  // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem',   // 8px
    full: '9999px',
  },
  typography: {
    fontFamily: {
      sans: 'var(--font-sans)',
      mono: 'var(--font-mono)',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
  },
} as const;

export type Tokens = typeof tokens;
