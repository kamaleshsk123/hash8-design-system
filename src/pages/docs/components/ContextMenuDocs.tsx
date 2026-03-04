
import {
    H8ContextMenu,
    H8ContextMenuCheckboxItem,
    H8ContextMenuContent,
    H8ContextMenuItem,
    H8ContextMenuLabel,
    H8ContextMenuRadioGroup,
    H8ContextMenuRadioItem,
    H8ContextMenuSeparator,
    H8ContextMenuShortcut,
    H8ContextMenuSub,
    H8ContextMenuSubContent,
    H8ContextMenuSubTrigger,
    H8ContextMenuTrigger,
} from "@/components/hash8-ui"

import { ComponentPreview } from "@/components/docs/ComponentPreview"
import { CodeBlock } from "@/components/docs/CodeBlock"

const ContextMenuDocs = () => {
    return (
        <div className="docs-prose">
            <h1>Context Menu</h1>
            <p className="text-xl text-muted-foreground">
                Displays a menu to the user — such as a set of actions or functions — triggered by a right-click.
            </p>

            {/* Example 1: Basic Usage */}
            <h2>Usage</h2>
            <ComponentPreview>
                <H8ContextMenu>
                    <H8ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                        Right click here
                    </H8ContextMenuTrigger>
                    <H8ContextMenuContent className="w-52">
                        <H8ContextMenuItem inset>
                            Back
                            <H8ContextMenuShortcut>⌘[</H8ContextMenuShortcut>
                        </H8ContextMenuItem>
                        <H8ContextMenuItem inset disabled>
                            Forward
                            <H8ContextMenuShortcut>⌘]</H8ContextMenuShortcut>
                        </H8ContextMenuItem>
                        <H8ContextMenuItem inset>
                            Reload
                            <H8ContextMenuShortcut>⌘R</H8ContextMenuShortcut>
                        </H8ContextMenuItem>
                        <H8ContextMenuSub>
                            <H8ContextMenuSubTrigger inset>More Tools</H8ContextMenuSubTrigger>
                            <H8ContextMenuSubContent className="w-44">
                                <H8ContextMenuItem>Save Page...</H8ContextMenuItem>
                                <H8ContextMenuItem>Create Shortcut...</H8ContextMenuItem>
                                <H8ContextMenuItem>Name Window...</H8ContextMenuItem>
                                <H8ContextMenuSeparator />
                                <H8ContextMenuItem>Developer Tools</H8ContextMenuItem>
                                <H8ContextMenuSeparator />
                                <H8ContextMenuItem>Delete</H8ContextMenuItem>
                            </H8ContextMenuSubContent>
                        </H8ContextMenuSub>
                        <H8ContextMenuSeparator />
                        <H8ContextMenuCheckboxItem checked>
                            Show Bookmarks
                        </H8ContextMenuCheckboxItem>
                        <H8ContextMenuCheckboxItem>Show Full URLs</H8ContextMenuCheckboxItem>
                        <H8ContextMenuSeparator />
                        <H8ContextMenuRadioGroup value="pedro">
                            <H8ContextMenuLabel inset>People</H8ContextMenuLabel>
                            <H8ContextMenuRadioItem value="pedro">
                                Pedro Duarte
                            </H8ContextMenuRadioItem>
                            <H8ContextMenuRadioItem value="colm">Colm Tuite</H8ContextMenuRadioItem>
                        </H8ContextMenuRadioGroup>
                    </H8ContextMenuContent>
                </H8ContextMenu>
            </ComponentPreview>
            <CodeBlock code={`import {
  H8ContextMenu,
  H8ContextMenuCheckboxItem,
  H8ContextMenuContent,
  H8ContextMenuItem,
  H8ContextMenuLabel,
  H8ContextMenuRadioGroup,
  H8ContextMenuRadioItem,
  H8ContextMenuSeparator,
  H8ContextMenuShortcut,
  H8ContextMenuSub,
  H8ContextMenuSubContent,
  H8ContextMenuSubTrigger,
  H8ContextMenuTrigger,
} from "@/components/hash8-ui"

export function ContextMenuDemo() {
  return (
    <H8ContextMenu>
      <H8ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </H8ContextMenuTrigger>
      <H8ContextMenuContent className="w-52">
        <H8ContextMenuItem inset>
          Back
          <H8ContextMenuShortcut>⌘[</H8ContextMenuShortcut>
        </H8ContextMenuItem>
        <H8ContextMenuItem inset disabled>
          Forward
          <H8ContextMenuShortcut>⌘]</H8ContextMenuShortcut>
        </H8ContextMenuItem>
        <H8ContextMenuItem inset>
          Reload
          <H8ContextMenuShortcut>⌘R</H8ContextMenuShortcut>
        </H8ContextMenuItem>
        <H8ContextMenuSub>
          <H8ContextMenuSubTrigger inset>More Tools</H8ContextMenuSubTrigger>
          <H8ContextMenuSubContent className="w-44">
            <H8ContextMenuItem>Save Page...</H8ContextMenuItem>
            <H8ContextMenuItem>Create Shortcut...</H8ContextMenuItem>
            <H8ContextMenuItem>Name Window...</H8ContextMenuItem>
            <H8ContextMenuSeparator />
            <H8ContextMenuItem>Developer Tools</H8ContextMenuItem>
            <H8ContextMenuSeparator />
            <H8ContextMenuItem variant="destructive">Delete</H8ContextMenuItem>
          </H8ContextMenuSubContent>
        </H8ContextMenuSub>
        <H8ContextMenuSeparator />
        <H8ContextMenuCheckboxItem checked>
          Show Bookmarks
        </H8ContextMenuCheckboxItem>
        <H8ContextMenuCheckboxItem>Show Full URLs</H8ContextMenuCheckboxItem>
        <H8ContextMenuSeparator />
        <H8ContextMenuRadioGroup value="pedro">
          <H8ContextMenuLabel inset>People</H8ContextMenuLabel>
          <H8ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </H8ContextMenuRadioItem>
          <H8ContextMenuRadioItem value="colm">Colm Tuite</H8ContextMenuRadioItem>
        </H8ContextMenuRadioGroup>
      </H8ContextMenuContent>
    </H8ContextMenu>
  )
}
`} />
            <h2>Usage</h2>
            <CodeBlock code={`import {
  H8ContextMenu,
  H8ContextMenuContent,
  H8ContextMenuItem,
  H8ContextMenuTrigger,
} from "@/components/hash8-ui"`} />
            <CodeBlock className="mt-4" code={`<H8ContextMenu>
  <H8ContextMenuTrigger>Right click</H8ContextMenuTrigger>
  <H8ContextMenuContent>
    <H8ContextMenuItem>Profile</H8ContextMenuItem>
    <H8ContextMenuItem>Billing</H8ContextMenuItem>
    <H8ContextMenuItem>Team</H8ContextMenuItem>
    <H8ContextMenuItem>Subscription</H8ContextMenuItem>
  </H8ContextMenuContent>
</H8ContextMenu>`} />
        </div>
    )
}

export default ContextMenuDocs
