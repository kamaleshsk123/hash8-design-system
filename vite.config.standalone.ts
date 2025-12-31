import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
    plugins: [
        react(),
        cssInjectedByJsPlugin(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    define: {
        "process.env.NODE_ENV": '"production"',
    },
    build: {
        outDir: "dist-standalone",
        lib: {
            entry: path.resolve(__dirname, "src/components/ui/index.ts"),
            name: "Hash8UI",
            fileName: () => `hash8-ui.standalone.js`,
            formats: ["umd"],
        },
        rollupOptions: {
            // Intentionally NOT externalizing react/react-dom so they get bundled
            external: [],
            output: {
                globals: {},
            },
        },
        // Ensure CSS is injected
        cssCodeSplit: false,
    },
});
