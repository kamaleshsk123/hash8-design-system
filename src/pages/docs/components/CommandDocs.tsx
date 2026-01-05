
import * as React from "react"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react"

import {
    H8Command,
    H8CommandDialog,
    H8CommandEmpty,
    H8CommandGroup,
    H8CommandInput,
    H8CommandItem,
    H8CommandList,
    H8CommandSeparator,
    H8CommandShortcut,
} from "@/components/hash8-ui"

import { ComponentPreview } from "@/components/docs/ComponentPreview"
import { CodeBlock } from "@/components/docs/CodeBlock"

const CommandDocs = () => {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <div className="docs-prose">
            <h1>Command</h1>
            <p className="text-xl text-muted-foreground">
                Fast, composable, unstyled command menu for React.
            </p>

            {/* Example 1: Basic Command */}
            <h2>Command Menu</h2>
            <ComponentPreview>
                <H8Command className="rounded-lg border shadow-md md:min-w-[450px]">
                    <H8CommandInput placeholder="Type a command or search..." />
                    <H8CommandList>
                        <H8CommandEmpty>No results found.</H8CommandEmpty>
                        <H8CommandGroup heading="Suggestions">
                            <H8CommandItem>
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>Calendar</span>
                            </H8CommandItem>
                            <H8CommandItem>
                                <Smile className="mr-2 h-4 w-4" />
                                <span>Search Emoji</span>
                            </H8CommandItem>
                            <H8CommandItem disabled>
                                <Calculator className="mr-2 h-4 w-4" />
                                <span>Calculator</span>
                            </H8CommandItem>
                        </H8CommandGroup>
                        <H8CommandSeparator />
                        <H8CommandGroup heading="Settings">
                            <H8CommandItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                                <H8CommandShortcut>⌘P</H8CommandShortcut>
                            </H8CommandItem>
                            <H8CommandItem>
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>Billing</span>
                                <H8CommandShortcut>⌘B</H8CommandShortcut>
                            </H8CommandItem>
                            <H8CommandItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                                <H8CommandShortcut>⌘S</H8CommandShortcut>
                            </H8CommandItem>
                        </H8CommandGroup>
                    </H8CommandList>
                </H8Command>
            </ComponentPreview>
            <CodeBlock code={`<H8Command className="rounded-lg border shadow-md md:min-w-[450px]">
  <H8CommandInput placeholder="Type a command or search..." />
  <H8CommandList>
    <H8CommandEmpty>No results found.</H8CommandEmpty>
    <H8CommandGroup heading="Suggestions">
      <H8CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </H8CommandItem>
      <H8CommandItem>
        <Smile className="mr-2 h-4 w-4" />
        <span>Search Emoji</span>
      </H8CommandItem>
      <H8CommandItem disabled>
        <Calculator className="mr-2 h-4 w-4" />
        <span>Calculator</span>
      </H8CommandItem>
    </H8CommandGroup>
    <H8CommandSeparator />
    <H8CommandGroup heading="Settings">
      <H8CommandItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <H8CommandShortcut>⌘P</H8CommandShortcut>
      </H8CommandItem>
      <H8CommandItem>
        <CreditCard className="mr-2 h-4 w-4" />
        <span>Billing</span>
        <H8CommandShortcut>⌘B</H8CommandShortcut>
      </H8CommandItem>
      <H8CommandItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
        <H8CommandShortcut>⌘S</H8CommandShortcut>
      </H8CommandItem>
    </H8CommandGroup>
  </H8CommandList>
</H8Command>`} />

            {/* Example 2: Command Dialog */}
            <h2>Command Dialog</h2>
            <ComponentPreview>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-muted-foreground text-sm">
                        Press{" "}
                        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
                            <span className="text-xs">⌘</span>J
                        </kbd>{" "}
                        to open
                    </p>
                    <H8CommandDialog open={open} onOpenChange={setOpen}>
                        <H8CommandInput placeholder="Type a command or search..." />
                        <H8CommandList>
                            <H8CommandEmpty>No results found.</H8CommandEmpty>
                            <H8CommandGroup heading="Suggestions">
                                <H8CommandItem>
                                    <Calendar className="mr-2 h-4 w-4" />
                                    <span>Calendar</span>
                                </H8CommandItem>
                                <H8CommandItem>
                                    <Smile className="mr-2 h-4 w-4" />
                                    <span>Search Emoji</span>
                                </H8CommandItem>
                                <H8CommandItem>
                                    <Calculator className="mr-2 h-4 w-4" />
                                    <span>Calculator</span>
                                </H8CommandItem>
                            </H8CommandGroup>
                            <H8CommandSeparator />
                            <H8CommandGroup heading="Settings">
                                <H8CommandItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                    <H8CommandShortcut>⌘P</H8CommandShortcut>
                                </H8CommandItem>
                                <H8CommandItem>
                                    <CreditCard className="mr-2 h-4 w-4" />
                                    <span>Billing</span>
                                    <H8CommandShortcut>⌘B</H8CommandShortcut>
                                </H8CommandItem>
                                <H8CommandItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                    <H8CommandShortcut>⌘S</H8CommandShortcut>
                                </H8CommandItem>
                            </H8CommandGroup>
                        </H8CommandList>
                    </H8CommandDialog>
                </div>
            </ComponentPreview>
            <CodeBlock code={`const [open, setOpen] = React.useState(false)

React.useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }

  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])

return (
  <>
    <p className="text-muted-foreground text-sm">
      Press{" "}
      <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
        <span className="text-xs">⌘</span>J
      </kbd>
    </p>
    <H8CommandDialog open={open} onOpenChange={setOpen}>
      <H8CommandInput placeholder="Type a command or search..." />
      <H8CommandList>
        <H8CommandEmpty>No results found.</H8CommandEmpty>
        <H8CommandGroup heading="Suggestions">
          <H8CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </H8CommandItem>
          <H8CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </H8CommandItem>
          <H8CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </H8CommandItem>
        </H8CommandGroup>
        <H8CommandSeparator />
        <H8CommandGroup heading="Settings">
          <H8CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <H8CommandShortcut>⌘P</H8CommandShortcut>
          </H8CommandItem>
          <H8CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <H8CommandShortcut>⌘B</H8CommandShortcut>
          </H8CommandItem>
          <H8CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <H8CommandShortcut>⌘S</H8CommandShortcut>
          </H8CommandItem>
        </H8CommandGroup>
      </H8CommandList>
    </H8CommandDialog>
  </>
)`} />

        </div>
    )
}

export default CommandDocs
