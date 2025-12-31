# Hash8 Design System

Hash8 UI is a high-performance, accessible, and customizable design system built on top of Radix UI and Tailwind CSS. It is designed to be framework-agnostic, supporting React, Vue, Angular, Svelte, and vanilla HTML projects.

## Features

- **💎 Beautifully Designed**: Minimalist, clean, and developer-focused aesthetics.
- **♿️ Accessible**: Built on Radix UI primitives for WAI-ARIA compliance.
- **🎨 Theming Engine**: Powerful JavaScript API for runtime theming (no CSS required).
- **🌍 Universal Compatibility**: Works with React, Next.js, Angular, Vue, Svelte, Laravel, and more.
- **⚡️ Plug & Play CDN**: Use directly in HTML files via our standalone bundle.

---

## Installation

### Option 1: NPM (Recommended for React)

Install the core dependencies:

```bash
npm install hash8-ui class-variance-authority clsx tailwind-merge lucide-react
```

### Option 2: CDN Standalone Bundle (Any Framework)

For non-React frameworks (Angular, Vue, Laravel) or simple HTML pages, use our **Standalone Bundle**. It includes React, ReactDOM, and all Hash8 components pre-bundled.

```html
<script src="https://unpkg.com/hash8-ui/dist-standalone/hash8-ui.standalone.js"></script>
```

*(Note: Replace the URL with your local path `dist-standalone/hash8-ui.standalone.js` if hosting locally)*

---

## Usage (CDN / Standalone)

The standalone bundle exposes a global `Hash8UI` object.

### 1. Auto-Mounting HTML Tags
You can use Hash8 components directly as custom HTML tags. Our robust **Auto-Mount** system automatically detects them (including dynamically added content) and renders them as React components.

```html
<H8Card>
  <H8CardHeader>
    <H8CardTitle>Hello World</H8CardTitle>
  </H8CardHeader>
  <H8CardContent>
    <H8Button variant="default">Click Me</H8Button>
  </H8CardContent>
</H8Card>
```

### 2. JavaScript Theming API
Customize the look and feel at runtime without writing CSS.

```javascript
// Switch to Dark Mode
Hash8UI.H8Configure({ mode: 'dark' });

// Set Brand Colors & Radius
Hash8UI.H8Configure({
  theme: {
    primary: '221.2 83.2% 53.3%', // HSL for Blue
    radius: '0.5rem' // Automatically calculates sm/md/lg radii
  }
});
```

### 3. Using React API
Access React primitives directly for complex logic:

```javascript
const { React, ReactDOM, H8Button } = Hash8UI;
```

---

## Supported Frameworks

We provide first-class installation guides for:

- **Next.js** (Native Support)
- **Remix** (Native Support)
- **Angular** (via CDN/Web Components)
- **Nuxt / Vue** (via CDN)
- **SvelteKit** (via CDN)
- **Laravel** (via CDN/Blade)

See the **Installation > Framework Guides** section in the documentation app for detailed instructions.

---

## Development

To contribute or modify the library:

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start development server**:
    ```bash
    npm run dev
    ```

3.  **Build Documentation & Library**:
    ```bash
    npm run build
    ```

4.  **Build Standalone CDN Bundle**:
    ```bash
    npm run build:standalone
    ```
    This generates `dist-standalone/hash8-ui.standalone.js`.

---

## License

MIT © Hash8 Design System
