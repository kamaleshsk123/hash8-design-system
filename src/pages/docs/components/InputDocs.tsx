import { Input } from "@/components/hash8-ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";

const InputDocs = () => {
  return (
    <div className="docs-prose">
      <h1>Input</h1>
      <p className="text-xl text-muted-foreground">
        Displays a form input field.
      </p>

      <h2>Preview</h2>
      <ComponentPreview>
        <Input placeholder="Type something..." className="max-w-sm" />
      </ComponentPreview>

      <h2>Usage</h2>
      <CodeBlock
        code={`import { H8Input } from '@/components/hash8-ui'

export function Example() {
  return <H8Input placeholder="Email" />
}`}
      />

      <h2>Examples</h2>

      <h3>Default</h3>
      <ComponentPreview>
        <Input placeholder="Default input" className="max-w-sm" />
      </ComponentPreview>
      <CodeBlock code={`<H8Input placeholder="Default input" />`} />

      <h3>With Label</h3>
      <ComponentPreview>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <label htmlFor="email" className="text-sm font-medium">
    Email
  </label>
  <H8Input type="email" id="email" placeholder="Email" />
</div>`}
      />

      <h3>Disabled</h3>
      <ComponentPreview>
        <Input disabled placeholder="Disabled input" className="max-w-sm" />
      </ComponentPreview>
      <CodeBlock code={`<H8Input disabled placeholder="Disabled input" />`} />

      <h3>With Type</h3>
      <ComponentPreview>
        <div className="flex flex-col gap-4 max-w-sm">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="number" placeholder="Number" />
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`<H8Input type="email" placeholder="Email" />
<H8Input type="password" placeholder="Password" />
<H8Input type="number" placeholder="Number" />`}
      />

      <h2>Props</h2>
      <p>
        The Input component accepts all standard HTML input attributes.
      </p>
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
              <td className="py-2"><code>type</code></td>
              <td className="py-2 text-muted-foreground">string</td>
              <td className="py-2">"text"</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>placeholder</code></td>
              <td className="py-2 text-muted-foreground">string</td>
              <td className="py-2">-</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>disabled</code></td>
              <td className="py-2 text-muted-foreground">boolean</td>
              <td className="py-2">false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InputDocs;
