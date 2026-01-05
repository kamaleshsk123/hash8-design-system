
import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import {
  H8Button,
  H8Collapsible,
  H8CollapsibleContent,
  H8CollapsibleTrigger,
} from "@/components/hash8-ui"

import { ComponentPreview } from "@/components/docs/ComponentPreview"
import { CodeBlock } from "@/components/docs/CodeBlock"

const CollapsibleDocs = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="docs-prose">
      <h1>Collapsible</h1>
      <p className="text-xl text-muted-foreground">
        An interactive component which expands/collapses a panel.
      </p>

      <h2>Example</h2>
      <ComponentPreview>
        <div className="flex justify-center w-full">
          <H8Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex w-[350px] flex-col gap-2"
          >
            <div className="flex items-center justify-between gap-4 px-4">
              <h4 className="text-sm font-semibold">
                @hash8 starred 3 repositories
              </h4>
              <H8CollapsibleTrigger asChild>
                <H8Button variant="ghost" size="icon" className="size-8">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </H8Button>
              </H8CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm">
              @hash8-ui/accordion
            </div>
            <H8CollapsibleContent className="flex flex-col gap-2">
              <div className="rounded-md border px-4 py-2 font-mono text-sm">
                @hash8-ui/button
              </div>
              <div className="rounded-md border px-4 py-2 font-mono text-sm">
                @hash8-ui/checkbox
              </div>
            </H8CollapsibleContent>
          </H8Collapsible>
        </div>
      </ComponentPreview>
      <CodeBlock code={`import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import {
  H8Button,
  H8Collapsible,
  H8CollapsibleContent,
  H8CollapsibleTrigger,
} from "@/components/hash8-ui"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <H8Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-[350px] flex-col gap-2"
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">
          @hash8 starred 3 repositories
        </h4>
        <H8CollapsibleTrigger asChild>
          <H8Button variant="ghost" size="icon" className="size-8">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </H8Button>
        </H8CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm">
        @hash8-ui/accordion
      </div>
      <H8CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @hash8-ui/button
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @hash8-ui/checkbox
        </div>
      </H8CollapsibleContent>
    </H8Collapsible>
  )
}`} />

      {/* <h2>Installation</h2>
            <CodeBlock code={`npm install @radix-ui/react-collapsible`} /> */}

    </div>
  );
};

export default CollapsibleDocs;
