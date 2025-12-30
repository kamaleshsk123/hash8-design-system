const DocsIntroduction = () => {
  return (
    <div className="docs-prose">
      <h1>Introduction</h1>
      <p className="text-xl text-muted-foreground">
        hash8/ui is a collection of re-usable components built using Radix UI and
        Tailwind CSS.
      </p>

      <h2>Philosophy</h2>
      <p>
        This is NOT a component library. It's a collection of re-usable components
        that you can copy and paste into your apps.
      </p>
      <p>
        The idea is that you own the components. You can customize them to fit your
        needs. The components are unstyled by default and use Tailwind CSS for
        styling.
      </p>

      <h2>Design Tokens</h2>
      <p>
        All components use design tokens defined in CSS variables. This makes it
        easy to customize colors, spacing, and other design properties across your
        entire application.
      </p>
      <ul>
        <li>
          <code>--background</code> - Page background color
        </li>
        <li>
          <code>--foreground</code> - Primary text color
        </li>
        <li>
          <code>--border</code> - Border color
        </li>
        <li>
          <code>--muted</code> - Muted background
        </li>
        <li>
          <code>--primary</code> - Primary brand color
        </li>
      </ul>

      <h2>Getting Started</h2>
      <p>
        To use hash8/ui components in your project, simply copy the component code
        into your codebase and customize as needed.
      </p>

      <h3>Usage</h3>
      <p>Import components from the hash8-ui directory:</p>
      <div className="code-block mt-4">
        <pre className="overflow-x-auto p-4">
          <code>{`import { Button, Card, Input } from '@/components/hash8-ui'`}</code>
        </pre>
      </div>

      <h2>Tech Stack</h2>
      <ul>
        <li>
          <strong>React</strong> - UI library
        </li>
        <li>
          <strong>TypeScript</strong> - Type safety
        </li>
        <li>
          <strong>Tailwind CSS</strong> - Styling
        </li>
        <li>
          <strong>Radix UI</strong> - Headless primitives
        </li>
      </ul>
    </div>
  );
};

export default DocsIntroduction;
