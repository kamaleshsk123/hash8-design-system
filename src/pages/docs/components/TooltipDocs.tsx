import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Button,
} from "@/components/hash8-ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";

const TooltipDocs = () => {
  return (
    <div className="docs-prose">
      <h1>Tooltip</h1>
      <p className="text-xl text-muted-foreground">
        A popup that displays information related to an element when the element
        receives keyboard focus or the mouse hovers over it.
      </p>

      <h2>Preview</h2>
      <ComponentPreview>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ComponentPreview>

      <h2>Usage</h2>
      <CodeBlock
        code={`import {
  H8Tooltip,
  H8TooltipTrigger,
  H8TooltipContent,
  H8TooltipProvider,
} from '@/components/hash8-ui'

export function Example() {
  return (
    <H8TooltipProvider>
      <H8Tooltip>
        <H8TooltipTrigger>Hover</H8TooltipTrigger>
        <H8TooltipContent>
          <p>Tooltip content</p>
        </H8TooltipContent>
      </H8Tooltip>
    </H8TooltipProvider>
  )
}`}
      />

      <h2>Examples</h2>

      <h3>Different Positions</h3>
      <ComponentPreview>
        <TooltipProvider>
          <div className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Top tooltip</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Right tooltip</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Bottom tooltip</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Left tooltip</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </ComponentPreview>
      <CodeBlock
        code={`<H8TooltipProvider>
  <H8Tooltip>
    <H8TooltipTrigger asChild>
      <H8Button variant="outline" size="sm">Top</H8Button>
    </H8TooltipTrigger>
    <H8TooltipContent side="top">
      <p>Top tooltip</p>
    </H8TooltipContent>
  </H8Tooltip>
  {/* ... other positions */}
</H8TooltipProvider>`}
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
              <td className="py-2"><code>H8TooltipProvider</code></td>
              <td className="py-2 text-muted-foreground">Wraps your app to provide tooltip context</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8Tooltip</code></td>
              <td className="py-2 text-muted-foreground">The root component</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8TooltipTrigger</code></td>
              <td className="py-2 text-muted-foreground">The element that triggers the tooltip</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8TooltipContent</code></td>
              <td className="py-2 text-muted-foreground">The tooltip content</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Props</h2>
      <h3>H8TooltipContent</h3>
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
              <td className="py-2"><code>side</code></td>
              <td className="py-2 text-muted-foreground">"top" | "right" | "bottom" | "left"</td>
              <td className="py-2">"top"</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>sideOffset</code></td>
              <td className="py-2 text-muted-foreground">number</td>
              <td className="py-2">4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TooltipDocs;
