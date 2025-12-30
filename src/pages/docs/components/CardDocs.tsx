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
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/hash8-ui'

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
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
              <td className="py-2"><code>Card</code></td>
              <td className="py-2 text-muted-foreground">The card container</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>CardHeader</code></td>
              <td className="py-2 text-muted-foreground">Contains the title and description</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>CardTitle</code></td>
              <td className="py-2 text-muted-foreground">The card title</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>CardDescription</code></td>
              <td className="py-2 text-muted-foreground">A description below the title</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>CardContent</code></td>
              <td className="py-2 text-muted-foreground">The main content area</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>CardFooter</code></td>
              <td className="py-2 text-muted-foreground">Footer for actions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardDocs;
