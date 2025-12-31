import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  Input,
} from "@/components/hash8-ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";

const DialogDocs = () => {
  return (
    <div className="docs-prose">
      <h1>Dialog</h1>
      <p className="text-xl text-muted-foreground">
        A window overlaid on either the primary window or another dialog window.
      </p>

      <h2>Preview</h2>
      <ComponentPreview>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <Input id="username" defaultValue="@johndoe" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentPreview>

      <h2>Usage</h2>
      <CodeBlock
        code={`import {
  H8Dialog,
  H8DialogTrigger,
  H8DialogContent,
  H8DialogHeader,
  H8DialogTitle,
  H8DialogDescription,
  H8DialogFooter,
} from '@/components/hash8-ui'

export function Example() {
  return (
    <H8Dialog>
      <H8DialogTrigger>Open</H8DialogTrigger>
      <H8DialogContent>
        <H8DialogHeader>
          <H8DialogTitle>Title</H8DialogTitle>
          <H8DialogDescription>Description</H8DialogDescription>
        </H8DialogHeader>
        <p>Content</p>
        <H8DialogFooter>
          <H8Button>Save</H8Button>
        </H8DialogFooter>
      </H8DialogContent>
    </H8Dialog>
  )
}`}
      />

      <h2>Examples</h2>

      <h3>Simple Dialog</h3>
      <ComponentPreview>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Simple Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Continue</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentPreview>
      <CodeBlock
        code={`<H8Dialog>
  <H8DialogTrigger asChild>
    <H8Button>Open Simple Dialog</H8Button>
  </H8DialogTrigger>
  <H8DialogContent>
    <H8DialogHeader>
      <H8DialogTitle>Are you sure?</H8DialogTitle>
      <H8DialogDescription>
        This action cannot be undone.
      </H8DialogDescription>
    </H8DialogHeader>
    <H8DialogFooter>
      <H8Button variant="outline">Cancel</H8Button>
      <H8Button>Continue</H8Button>
    </H8DialogFooter>
  </H8DialogContent>
</H8Dialog>`}
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
              <td className="py-2"><code>H8Dialog</code></td>
              <td className="py-2 text-muted-foreground">The root component</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8DialogTrigger</code></td>
              <td className="py-2 text-muted-foreground">Opens the dialog</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8DialogContent</code></td>
              <td className="py-2 text-muted-foreground">Contains the dialog content</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8DialogHeader</code></td>
              <td className="py-2 text-muted-foreground">Container for title and description</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8DialogTitle</code></td>
              <td className="py-2 text-muted-foreground">The dialog title</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8DialogDescription</code></td>
              <td className="py-2 text-muted-foreground">Optional description</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8DialogFooter</code></td>
              <td className="py-2 text-muted-foreground">Container for actions</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>H8DialogClose</code></td>
              <td className="py-2 text-muted-foreground">Closes the dialog</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DialogDocs;
