import { CodeBlock } from "@/components/docs/CodeBlock";

const DocsInstallation = () => {
  return (
    <div className="docs-prose">
      <h1>Installation</h1>
      <p className="text-xl text-muted-foreground">
        How to install dependencies and structure your app.
      </p>

      <h2>Dependencies</h2>
      <p>
        hash8/ui components are built with the following dependencies:
      </p>

      <CodeBlock
        code={`npm install @radix-ui/react-dialog @radix-ui/react-tooltip @radix-ui/react-avatar
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react`}
      />

      <h2>Tailwind Configuration</h2>
      <p>
        Configure Tailwind CSS to use design tokens. Add the following to your{" "}
        <code>tailwind.config.ts</code>:
      </p>

      <CodeBlock
        code={`import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
    },
  },
} satisfies Config;`}
      />

      <h2>CSS Variables</h2>
      <p>
        Add the following CSS variables to your global stylesheet:
      </p>

      <CodeBlock
        code={`@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --border: 0 0% 89.8%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
  }
}`}
      />

      <h2>Utils</h2>
      <p>
        Add the <code>cn</code> utility function for merging class names:
      </p>

      <CodeBlock
        code={`import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
      />

      <h2>Project Structure</h2>
      <p>
        Recommended project structure for hash8/ui:
      </p>

      <CodeBlock
        code={`src/
├── components/
│   └── hash8-ui/
│       ├── index.ts       # Component exports
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
├── tokens/
│   └── index.ts           # Token definitions
├── lib/
│   └── utils.ts           # Utility functions
└── index.css              # CSS variables`}
      />
    </div>
  );
};

export default DocsInstallation;
