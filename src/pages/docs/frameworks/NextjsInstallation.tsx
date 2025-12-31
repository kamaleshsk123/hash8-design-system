import { CodeBlock } from "@/components/docs/CodeBlock";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const NextjsInstallation = () => {
    return (
        <div className="docs-prose">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                <Link to="/docs/installation" className="hover:text-foreground">Installation</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">Next.js</span>
            </div>

            <h1>Install Hash8 with Next.js</h1>
            <p className="text-xl text-muted-foreground">
                Setting up Hash8 Design System in a Next.js project.
            </p>

            <div className="mt-8 space-y-10">
                <div className="flex gap-4 md:gap-6">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-muted text-sm font-bold font-mono">
                        01
                    </div>
                    <div className="flex-1 space-y-4">
                        <h3 className="mt-0">Create your project</h3>
                        <p>Start by creating a new Next.js project using <code>create-next-app</code>.</p>
                        <CodeBlock code={`npx create-next-app@latest my-app --typescript --tailwind --eslint
cd my-app`} />
                    </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-muted text-sm font-bold font-mono">
                        02
                    </div>
                    <div className="flex-1 space-y-4">
                        <h3 className="mt-0">Install Dependencies</h3>
                        <p>Install the required dependencies for Hash8 components.</p>
                        <CodeBlock code={`npm install @radix-ui/react-dialog @radix-ui/react-tooltip @radix-ui/react-avatar
npm install class-variance-authority clsx tailwind-merge lucide-react`} />
                    </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-muted text-sm font-bold font-mono">
                        03
                    </div>
                    <div className="flex-1 space-y-4">
                        <h3 className="mt-0">Configure Tailwind</h3>
                        <p>Your <code>tailwind.config.ts</code> should look like this. Make sure to add the Hash8 colors and border radius variables.</p>
                        <CodeBlock code={`import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    extend: {
        colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
        },
        card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
        },
        },
        borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        },
    },
    },
    plugins: [],
};
export default config;`} />
                    </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-muted text-sm font-bold font-mono">
                        04
                    </div>
                    <div className="flex-1 space-y-4">
                        <h3 className="mt-0">Add Styles</h3>
                        <p>Add the CSS variables to your <code>app/globals.css</code> file.</p>
                        <CodeBlock code={`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}`} />
                    </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-muted text-sm font-bold font-mono">
                        05
                    </div>
                    <div className="flex-1 space-y-4">
                        <h3 className="mt-0">Copy Components</h3>
                        <p>Copy the components you need into your <code>components/ui</code> folder.</p>
                        <p>For example, create <code>components/ui/button.tsx</code> and paste the button code.</p>
                    </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-muted text-sm font-bold font-mono">
                        06
                    </div>
                    <div className="flex-1 space-y-4">
                        <h3 className="mt-0">Usage</h3>
                        <p>Import and use components in your pages.</p>
                        <CodeBlock code={`import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="p-10">
      <Button>Click me</Button>
    </div>
  )
}`} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NextjsInstallation;
