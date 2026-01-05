import {
  H8Breadcrumb,
  H8BreadcrumbItem,
  H8BreadcrumbLink,
  H8BreadcrumbList,
  H8BreadcrumbPage,
  H8BreadcrumbSeparator,
  H8BreadcrumbEllipsis,
} from "@/components/hash8-ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Slash, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const BreadcrumbDocs = () => {
  return (
    <div className="docs-prose">
      <h1>Breadcrumb</h1>
      <p className="text-xl text-muted-foreground">
        Displays the path to the current resource using a hierarchy of links.
      </p>

      <h2>Basic Example</h2>
      <ComponentPreview>
        <H8Breadcrumb>
          <H8BreadcrumbList>
            <H8BreadcrumbItem>
              <H8BreadcrumbLink href="/">Home</H8BreadcrumbLink>
            </H8BreadcrumbItem>
            <H8BreadcrumbSeparator />
            <H8BreadcrumbItem>
              <H8BreadcrumbLink href="/components">Components</H8BreadcrumbLink>
            </H8BreadcrumbItem>
            <H8BreadcrumbSeparator />
            <H8BreadcrumbItem>
              <H8BreadcrumbPage>Breadcrumb</H8BreadcrumbPage>
            </H8BreadcrumbItem>
          </H8BreadcrumbList>
        </H8Breadcrumb>
      </ComponentPreview>

      <h3>Custom Separator</h3>
      <p>Use a custom separator icon.</p>
      <ComponentPreview>
        <H8Breadcrumb>
          <H8BreadcrumbList>
            <H8BreadcrumbItem>
              <H8BreadcrumbLink href="/">Home</H8BreadcrumbLink>
            </H8BreadcrumbItem>
            <H8BreadcrumbSeparator>
              <Slash className="size-4" />
            </H8BreadcrumbSeparator>
            <H8BreadcrumbItem>
              <H8BreadcrumbLink href="/components">Components</H8BreadcrumbLink>
            </H8BreadcrumbItem>
            <H8BreadcrumbSeparator>
              <Slash className="size-4" />
            </H8BreadcrumbSeparator>
            <H8BreadcrumbItem>
              <H8BreadcrumbPage>Breadcrumb</H8BreadcrumbPage>
            </H8BreadcrumbItem>
          </H8BreadcrumbList>
        </H8Breadcrumb>
      </ComponentPreview>
      <CodeBlock code={`<H8Breadcrumb>
  <H8BreadcrumbList>
    <H8BreadcrumbItem>
      <H8BreadcrumbLink href="/">Home</H8BreadcrumbLink>
    </H8BreadcrumbItem>
    <H8BreadcrumbSeparator>
      <Slash />
    </H8BreadcrumbSeparator>
    <H8BreadcrumbItem>
      <H8BreadcrumbLink href="/components">Components</H8BreadcrumbLink>
    </H8BreadcrumbItem>
    <H8BreadcrumbSeparator>
      <Slash />
    </H8BreadcrumbSeparator>
    <H8BreadcrumbItem>
      <H8BreadcrumbPage>Breadcrumb</H8BreadcrumbPage>
    </H8BreadcrumbItem>
  </H8BreadcrumbList>
</H8Breadcrumb>`} />

      <h3>Dropdown</h3>
      <p>Use a dropdown menu to group related links.</p>
      <ComponentPreview>
        <H8Breadcrumb>
          <H8BreadcrumbList>
            <H8BreadcrumbItem>
              <H8BreadcrumbLink href="/">Home</H8BreadcrumbLink>
            </H8BreadcrumbItem>
            <H8BreadcrumbSeparator>
              <Slash className="size-4" />
            </H8BreadcrumbSeparator>
            <H8BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  Components
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Themes</DropdownMenuItem>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </H8BreadcrumbItem>
            <H8BreadcrumbSeparator>
              <Slash className="size-4" />
            </H8BreadcrumbSeparator>
            <H8BreadcrumbItem>
              <H8BreadcrumbPage>Breadcrumb</H8BreadcrumbPage>
            </H8BreadcrumbItem>
          </H8BreadcrumbList>
        </H8Breadcrumb>
      </ComponentPreview>
      <CodeBlock code={`<H8Breadcrumb>
  <H8BreadcrumbList>
    <H8BreadcrumbItem>
      <H8BreadcrumbLink asChild>
        <Link to="/">Home</Link>
      </H8BreadcrumbLink>
    </H8BreadcrumbItem>
    <H8BreadcrumbSeparator>
      <Slash />
    </H8BreadcrumbSeparator>
    <H8BreadcrumbItem>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1">
          Components
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Documentation</DropdownMenuItem>
          <DropdownMenuItem>Themes</DropdownMenuItem>
          <DropdownMenuItem>GitHub</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </H8BreadcrumbItem>
    <H8BreadcrumbSeparator>
      <Slash />
    </H8BreadcrumbSeparator>
    <H8BreadcrumbItem>
      <H8BreadcrumbPage>Breadcrumb</H8BreadcrumbPage>
    </H8BreadcrumbItem>
  </H8BreadcrumbList>
</H8Breadcrumb>`} />

      <h3>Collapsed</h3>
      <p>Use <code>BreadcrumbEllipsis</code> to show a collapsed state.</p>
      <ComponentPreview>
        <H8Breadcrumb>
          <H8BreadcrumbList>
            <H8BreadcrumbItem>
              <H8BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </H8BreadcrumbLink>
            </H8BreadcrumbItem>
            <H8BreadcrumbSeparator />
            <H8BreadcrumbItem>
              <H8BreadcrumbEllipsis />
            </H8BreadcrumbItem>
            <H8BreadcrumbSeparator />
            <H8BreadcrumbItem>
              <H8BreadcrumbLink asChild>
                <Link to="/docs/components">Components</Link>
              </H8BreadcrumbLink>
            </H8BreadcrumbItem>
            <H8BreadcrumbSeparator />
            <H8BreadcrumbItem>
              <H8BreadcrumbPage>Breadcrumb</H8BreadcrumbPage>
            </H8BreadcrumbItem>
          </H8BreadcrumbList>
        </H8Breadcrumb>
      </ComponentPreview>
      <CodeBlock code={`<H8Breadcrumb>
  <H8BreadcrumbList>
    <H8BreadcrumbItem>
      <Link to="/">Home</Link>
    </H8BreadcrumbItem>
    <H8BreadcrumbSeparator />
    <H8BreadcrumbItem>
      <H8BreadcrumbEllipsis />
    </H8BreadcrumbItem>
    <H8BreadcrumbSeparator />
    <H8BreadcrumbItem>
      <Link to="/components">Components</Link>
    </H8BreadcrumbItem>
    <H8BreadcrumbSeparator />
    <H8BreadcrumbItem>
      <H8BreadcrumbPage>Breadcrumb</H8BreadcrumbPage>
    </H8BreadcrumbItem>
  </H8BreadcrumbList>
</H8Breadcrumb>`} />

      <h3>Link Component</h3>
      <p>Use the <code>asChild</code> prop to composition with a custom link component (like React Router's Link).</p>
      <ComponentPreview>
        <H8Breadcrumb>
          <H8BreadcrumbList>
            <H8BreadcrumbItem>
              <H8BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </H8BreadcrumbLink>
            </H8BreadcrumbItem>
            <H8BreadcrumbSeparator />
            <H8BreadcrumbItem>
              <H8BreadcrumbLink asChild>
                <Link to="/components">Components</Link>
              </H8BreadcrumbLink>
            </H8BreadcrumbItem>
            <H8BreadcrumbSeparator />
            <H8BreadcrumbItem>
              <H8BreadcrumbPage>Breadcrumb</H8BreadcrumbPage>
            </H8BreadcrumbItem>
          </H8BreadcrumbList>
        </H8Breadcrumb>
      </ComponentPreview>

      <h3>Responsive</h3>
      <p>No default responsive behavior, but you can hide items with utility classes.</p>
      <ComponentPreview>
        <H8Breadcrumb>
          <H8BreadcrumbList>
            <H8BreadcrumbItem>
              <H8BreadcrumbLink href="/">Home</H8BreadcrumbLink>
            </H8BreadcrumbItem>
            <H8BreadcrumbSeparator />
            <H8BreadcrumbItem className="hidden md:block">
              <H8BreadcrumbLink href="/docs">Docs</H8BreadcrumbLink>
            </H8BreadcrumbItem>
            <H8BreadcrumbSeparator className="hidden md:block" />
            <H8BreadcrumbItem>
              <H8BreadcrumbPage>Breadcrumb</H8BreadcrumbPage>
            </H8BreadcrumbItem>
          </H8BreadcrumbList>
        </H8Breadcrumb>
      </ComponentPreview>

      {/* <h2>Installation</h2>
            <CodeBlock code={`npm install @radix-ui/react-slot lucide-react`} /> */}

      <h2>Usage</h2>
      <CodeBlock code={`import {
  H8Breadcrumb,
  H8BreadcrumbItem,
  H8BreadcrumbLink,
  H8BreadcrumbList,
  H8BreadcrumbPage,
  H8BreadcrumbSeparator,
} from "@/components/hash8-ui/breadcrumb"

export function BreadcrumbDemo() {
  return (
    <H8Breadcrumb>
      <H8BreadcrumbList>
        <H8BreadcrumbItem>
          <H8BreadcrumbLink href="/">Home</H8BreadcrumbLink>
        </H8BreadcrumbItem>
        <H8BreadcrumbSeparator />
        <H8BreadcrumbItem>
          <H8BreadcrumbLink href="/components">Components</H8BreadcrumbLink>
        </H8BreadcrumbItem>
        <H8BreadcrumbSeparator />
        <H8BreadcrumbItem>
          <H8BreadcrumbPage>Breadcrumb</H8BreadcrumbPage>
        </H8BreadcrumbItem>
      </H8BreadcrumbList>
    </H8Breadcrumb>
  )
}`} />
    </div>
  );
};

export default BreadcrumbDocs;
