import { Avatar, AvatarImage, AvatarFallback } from "@/components/hash8-ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";

const AvatarDocs = () => {
  return (
    <div className="docs-prose">
      <h1>Avatar</h1>
      <p className="text-xl text-muted-foreground">
        An image element with a fallback for representing the user.
      </p>

      <h2>Preview</h2>
      <ComponentPreview>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>

      <h2>Usage</h2>
      <CodeBlock
        code={`import { H8Avatar, H8AvatarImage, H8AvatarFallback } from '@/components/hash8-ui'

export function Example() {
  return (
    <H8Avatar>
      <H8AvatarImage src="https://example.com/avatar.png" alt="User" />
      <H8AvatarFallback>JD</H8AvatarFallback>
    </H8Avatar>
  )
}`}
      />

      <h2>Examples</h2>

      <h3>With Image</h3>
      <ComponentPreview>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ComponentPreview>
      <CodeBlock
        code={`<H8Avatar>
  <H8AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <H8AvatarFallback>CN</H8AvatarFallback>
</H8Avatar>`}
      />

      <h3>Fallback Only</h3>
      <ComponentPreview>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </ComponentPreview>
      <CodeBlock
        code={`<H8Avatar>
  <H8AvatarFallback>JD</H8AvatarFallback>
</H8Avatar>`}
      />

      <h3>Different Sizes</h3>
      <ComponentPreview>
        <div className="flex items-center gap-4">
          <Avatar className="h-6 w-6">
            <AvatarFallback className="text-xs">XS</AvatarFallback>
          </Avatar>
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">SM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-14 w-14">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`<H8Avatar className="h-6 w-6">
  <H8AvatarFallback className="text-xs">XS</H8AvatarFallback>
</H8Avatar>
<H8Avatar className="h-8 w-8">
  <H8AvatarFallback className="text-xs">SM</H8AvatarFallback>
</H8Avatar>
<H8Avatar>
  <H8AvatarFallback>MD</H8AvatarFallback>
</H8Avatar>
<H8Avatar className="h-14 w-14">
  <H8AvatarFallback>LG</H8AvatarFallback>
</H8Avatar>`}
      />

      <h2>Components</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left font-medium">Component</th>
              <th className="py-2 text-left font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2"><code>H8Avatar</code></td>
              <td className="py-2 text-muted-foreground">The avatar container</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8AvatarImage</code></td>
              <td className="py-2 text-muted-foreground">The image element</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8AvatarFallback</code></td>
              <td className="py-2 text-muted-foreground">Fallback when image fails</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvatarDocs;
