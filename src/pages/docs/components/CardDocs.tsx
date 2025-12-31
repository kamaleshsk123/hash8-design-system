import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "@/components/hash8-ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";

const CardDocs = () => {
  return (
    <div className="docs-prose">
      <h1>Card</h1>
      <p className="text-xl text-muted-foreground">
        Displays a card with header, content, and footer.
      </p>

      <h2>Preview</h2>
      <ComponentPreview>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>

      <h2>Usage</h2>
      <CodeBlock
        code={`import {
  H8Card,
  H8CardHeader,
  H8CardTitle,
  H8CardDescription,
  H8CardContent,
  H8CardFooter,
} from '@/components/hash8-ui'

export function Example() {
  return (
    <H8Card>
      <H8CardHeader>
        <H8CardTitle>Card Title</H8CardTitle>
        <H8CardDescription>Card Description</H8CardDescription>
      </H8CardHeader>
      <H8CardContent>
        <p>Card Content</p>
      </H8CardContent>
      <H8CardFooter>
        <p>Card Footer</p>
      </H8CardFooter>
    </H8Card>
  )
}`}
      />

      <h2>Examples</h2>

      <h3>Simple Card</h3>
      <ComponentPreview>
        <Card className="w-[350px]">
          <CardContent className="pt-6">
            <p>A simple card with just content.</p>
          </CardContent>
        </Card>
      </ComponentPreview>
      <CodeBlock code={`<H8Card className="w-[350px]">
  <H8CardContent className="pt-6">
    <p>A simple card with just content.</p>
  </H8CardContent>
</H8Card>`} />

      <h3>Card with Form</h3>
      <ComponentPreview>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>Enter your details below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create Account</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>
      <CodeBlock code={` <H8Card className="w-[350px]">
  <H8CardHeader>
    <H8CardTitle>Create Account</H8CardTitle>
    <H8CardDescription>Enter your details below.</H8CardDescription>
  </H8CardHeader>
  <H8CardContent className="space-y-4">
    {/* Form fields */}
  </H8CardContent>
  <H8CardFooter>
    <H8Button className="w-full">Create Account</H8Button>
  </H8CardFooter>
</H8Card>`} />

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
              <td className="py-2"><code>H8Card</code></td>
              <td className="py-2 text-muted-foreground">The card container</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8CardHeader</code></td>
              <td className="py-2 text-muted-foreground">Contains the title and description</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8CardTitle</code></td>
              <td className="py-2 text-muted-foreground">The card title</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8CardDescription</code></td>
              <td className="py-2 text-muted-foreground">A description below the title</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8CardContent</code></td>
              <td className="py-2 text-muted-foreground">The main content area</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8CardFooter</code></td>
              <td className="py-2 text-muted-foreground">Footer for actions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardDocs;
