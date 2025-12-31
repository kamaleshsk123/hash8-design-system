import { CodeBlock } from "@/components/docs/CodeBlock";

const RemixInstallation = () => {
    return (
        <div className="docs-prose">
            <h1>Remix Installation</h1>
            <p className="text-xl text-muted-foreground">
                Integrate Hash8 UI into your Remix project using standard React practices.
            </p>

            <div className="mt-8">
                <h3>1. Create Project</h3>
                <CodeBlock code={`npx create-remix@latest my-app
cd my-app`} />
            </div>

            <div className="mt-8">
                <h3>2. Install Tailwind & Shadcn Dependencies</h3>
                <CodeBlock code={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react`} />
            </div>

            <div className="mt-8">
                <h3>3. Configure Tailwind</h3>
                <p>Update your <code>tailwind.config.ts</code>.</p>
                <CodeBlock code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        // ... standard Hash8 tokens
      }
    }
  }
}`} />
            </div>

            <div className="mt-8">
                <h3>4. Add CSS Variables</h3>
                <p>Add the Hash8 design tokens to your <code>app/tailwind.css</code> or root layout.</p>
            </div>

            <div className="mt-8">
                <h3>5. Use Components</h3>
                <p>Copy the components to <code>app/components/ui</code> and import them as usual.</p>
                <CodeBlock code={`import { Button } from "~/components/ui/button";

export default function Index() {
  return (
    <div className="font-sans p-4">
      <Button variant="default">Hello Remix</Button>
    </div>
  );
}`} />
            </div>

        </div>
    );
};

export default RemixInstallation;
