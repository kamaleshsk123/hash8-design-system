import { CodeBlock } from "@/components/docs/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DocsInstallation = () => {
  return (
    <div className="docs-prose">
      <h1>Installation</h1>
      <p className="text-xl text-muted-foreground">
        Get up and running with Hash8 Design System.
      </p>

      <Tabs defaultValue="vite" className="mt-6">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="vite"
            className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Using Vite
          </TabsTrigger>
          <TabsTrigger
            value="postcss"
            className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Using PostCSS
          </TabsTrigger>
          <TabsTrigger
            value="cdn"
            className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Play CDN
          </TabsTrigger>
        </TabsList>

        <TabsContent value="vite" className="mt-6 space-y-8">
          <div>
            <h3>1. Create your project</h3>
            <p>Start by creating a new Vite project if you don't have one set up already. The most common approach is to use pure React with TypeScript.</p>
            <CodeBlock code={`npm create vite@latest my-project -- --template react-ts
cd my-project`} />
          </div>

          <div>
            <h3>2. Install Tailwind CSS</h3>
            <p>Install tailwindcss and its peer dependencies, then generate your tailwind.config.ts and postcss.config.js files.</p>
            <CodeBlock code={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`} />
          </div>

          <div>
            <h3>3. Install Dependencies</h3>
            <p>Install the required dependencies for Hash8 components.</p>
            <CodeBlock code={`npm install @radix-ui/react-dialog @radix-ui/react-tooltip @radix-ui/react-avatar
npm install class-variance-authority clsx tailwind-merge lucide-react`} />
          </div>

          <div>
            <h3>4. Configure Tailwind</h3>
            <p>Add the paths to all of your template files in your <code>tailwind.config.ts</code> file, and add the Hash8 design tokens.</p>
            <CodeBlock code={`import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
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
  plugins: [],
} satisfies Config;`} />
          </div>

          <div>
            <h3>5. Add CSS Variables</h3>
            <p>Add the following directives to your global CSS file (<code>src/index.css</code>).</p>
            <CodeBlock code={`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
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
}`} />
          </div>

          <div>
            <h3>6. Add Utility helper</h3>
            <p>Create a <code>lib/utils.ts</code> file and add the <code>cn</code> helper.</p>
            <CodeBlock code={`import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`} />
          </div>
        </TabsContent>

        <TabsContent value="postcss" className="mt-6 space-y-8">
          <div>
            <h3>1. Install Tailwind CSS</h3>
            <p>Install tailwindcss and its peer dependencies via npm, and then create your tailwind.config.ts file.</p>
            <CodeBlock code={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`} />
          </div>

          <div>
            <h3>2. Install Dependencies</h3>
            <p>Install the required dependencies for Hash8 components.</p>
            <CodeBlock code={`npm install @radix-ui/react-dialog @radix-ui/react-tooltip @radix-ui/react-avatar
npm install class-variance-authority clsx tailwind-merge lucide-react`} />
          </div>

          <div>
            <h3>3. Configure Tailwind</h3>
            <p>Add the paths to all of your template files in your <code>tailwind.config.ts</code> file.</p>
            <CodeBlock code={`import type { Config } from "tailwindcss";

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
  plugins: [],
} satisfies Config;`} />
          </div>

          <div>
            <h3>4. Update CSS</h3>
            <p>Add the Tailwind directives and Hash8 variables to your main CSS file.</p>
            <CodeBlock code={`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --border: 0 0% 89.8%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    /* ... other variables */
  }
}`} />
          </div>
        </TabsContent>

        <TabsContent value="cdn" className="mt-6 space-y-8">
          <div className="rounded-lg border bg-yellow-50 p-4 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-200">
            <strong>Protoyping:</strong> The Play CDN mode is designed for rapid prototyping using the Standalone Bundle.
          </div>

          <div>
            <h3>1. Add Babel (Optional)</h3>
            <p>If you want to write JSX directly in the browser (prototyping), add Babel.</p>
            <CodeBlock code={`<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>`} />
          </div>

          <div>
            <h3>2. Add Hash8 UI Standalone</h3>
            <p>Include the bundled Hash8 UI script which includes React, ReactDOM, and styles.</p>
            <CodeBlock code={`<!-- Using local path -->
<script src="./dist-standalone/hash8-ui.standalone.js"></script>`} />
          </div>

          <div>
            <h3>3. Use Components</h3>
            <p>You can now use Hash8 components via the global <code>Hash8UI</code> object. Standard React hooks and ReactDOM are also available under <code>Hash8UI</code>.</p>
            <CodeBlock code={`<div id="root"></div>

<script type="text/babel">
  // 1. Destructure React, ReactDOM, and H8 Components
  const { React, ReactDOM, H8Button, H8Card, H8CardContent } = Hash8UI;
  
  // 2. Expose React globally for Babel
  window.React = React;

  const App = () => (
    <div className="p-10 font-sans">
      <H8Card>
        <H8CardContent className="p-6">
           <h1 className="mb-4 text-xl font-bold">Hello World</h1>
           <H8Button onClick={() => alert('Clicked!')}>Click me</H8Button>
        </H8CardContent>
      </H8Card>
    </div>
  );

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocsInstallation;
