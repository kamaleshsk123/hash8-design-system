import { Button } from "@/components/hash8-ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";

const ButtonDocs = () => {
  return (
    <div className="docs-prose">
      <h1>Button</h1>
      <p className="text-xl text-muted-foreground">
        Displays a button or a component that looks like a button.
      </p>

      <h2>Preview</h2>
      <ComponentPreview>
        <div className="flex flex-wrap items-center gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </ComponentPreview>

      <h2>Usage</h2>
      <CodeBlock
        code={`import { Button } from '@/components/hash8-ui'

export function Example() {
  return <Button>Click me</Button>
}`}
      />

      <h2>Variants</h2>
      <p>The Button component supports the following variants:</p>

      <h3>Default</h3>
      <ComponentPreview>
        <Button>Default Button</Button>
      </ComponentPreview>
      <CodeBlock code={`<Button>Default Button</Button>`} />

      <h3>Secondary</h3>
      <ComponentPreview>
        <Button variant="secondary">Secondary Button</Button>
      </ComponentPreview>
      <CodeBlock code={`<Button variant="secondary">Secondary Button</Button>`} />

      <h3>Outline</h3>
      <ComponentPreview>
        <Button variant="outline">Outline Button</Button>
      </ComponentPreview>
      <CodeBlock code={`<Button variant="outline">Outline Button</Button>`} />

      <h3>Ghost</h3>
      <ComponentPreview>
        <Button variant="ghost">Ghost Button</Button>
      </ComponentPreview>
      <CodeBlock code={`<Button variant="ghost">Ghost Button</Button>`} />

      <h3>Link</h3>
      <ComponentPreview>
        <Button variant="link">Link Button</Button>
      </ComponentPreview>
      <CodeBlock code={`<Button variant="link">Link Button</Button>`} />

      <h3>Destructive</h3>
      <ComponentPreview>
        <Button variant="destructive">Destructive Button</Button>
      </ComponentPreview>
      <CodeBlock code={`<Button variant="destructive">Destructive Button</Button>`} />

      <h2>Sizes</h2>
      <ComponentPreview>
        <div className="flex items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
      />

      <h2>Disabled</h2>
      <ComponentPreview>
        <Button disabled>Disabled</Button>
      </ComponentPreview>
      <CodeBlock code={`<Button disabled>Disabled</Button>`} />

      <h2>Props</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left font-medium">Prop</th>
              <th className="py-2 text-left font-medium">Type</th>
              <th className="py-2 text-left font-medium">Default</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2"><code>variant</code></td>
              <td className="py-2 text-muted-foreground">
                "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
              </td>
              <td className="py-2">"default"</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>size</code></td>
              <td className="py-2 text-muted-foreground">"default" | "sm" | "lg" | "icon"</td>
              <td className="py-2">"default"</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>asChild</code></td>
              <td className="py-2 text-muted-foreground">boolean</td>
              <td className="py-2">false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ButtonDocs;
