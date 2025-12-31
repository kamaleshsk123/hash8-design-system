import { Badge } from "@/components/hash8-ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";

const BadgeDocs = () => {
  return (
    <div className="docs-prose">
      <h1>Badge</h1>
      <p className="text-xl text-muted-foreground">
        Displays a badge or a component that looks like a badge.
      </p>

      <h2>Preview</h2>
      <ComponentPreview>
        <div className="flex flex-wrap items-center gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </ComponentPreview>

      <h2>Usage</h2>
      <CodeBlock
        code={`import { H8Badge } from '@/components/hash8-ui'

export function Example() {
  return <H8Badge>Badge</H8Badge>
}`}
      />

      <h2>Variants</h2>

      <h3>Default</h3>
      <ComponentPreview>
        <Badge>Default</Badge>
      </ComponentPreview>
      <CodeBlock code={`<H8Badge>Default</H8Badge>`} />

      <h3>Secondary</h3>
      <ComponentPreview>
        <Badge variant="secondary">Secondary</Badge>
      </ComponentPreview>
      <CodeBlock code={`<H8Badge variant="secondary">Secondary</H8Badge>`} />

      <h3>Outline</h3>
      <ComponentPreview>
        <Badge variant="outline">Outline</Badge>
      </ComponentPreview>
      <CodeBlock code={`<H8Badge variant="outline">Outline</H8Badge>`} />

      <h3>Destructive</h3>
      <ComponentPreview>
        <Badge variant="destructive">Destructive</Badge>
      </ComponentPreview>
      <CodeBlock code={`<H8Badge variant="destructive">Destructive</H8Badge>`} />

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
                "default" | "secondary" | "outline" | "destructive"
              </td>
              <td className="py-2">"default"</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BadgeDocs;
