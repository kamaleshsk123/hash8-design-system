
import * as React from "react"
import { Check, ChevronsUpDown, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query" // Assuming this hook exists or I will mock it if needed. The user said it's in the example.
// I'll check hooks folder content again or just assume it is there based on user prompt.
// Actually I checked hooks earlier and didn't see use-media-query.ts in the file list!
// The list_dir of src/hooks only showed 2 files: use-mobile.tsx and use-toast.ts.
// So I need to create use-media-query.ts or implement it inline or skip the responsive demo if it's too complex.
// The user explicitly asked for "Responsive" example which uses useMediaQuery.
// I will create a simple use-media-query hook inside the docs file or separately if I can.
// For now, I will implement a simple version inside the file or just use window.matchMedia directly or add the hook file.
// Let's add the hook file first? No, I'll stick to the docs file implementation.
// Wait, better to create the hook file as per shadcn pattern if it's reused.
// Usage: const isDesktop = useMediaQuery("(min-width: 768px)")

import {
    H8Button,
    H8Command,
    H8CommandEmpty,
    H8CommandGroup,
    H8CommandInput,
    H8CommandItem,
    H8CommandList,
    H8Popover,
    H8PopoverContent,
    H8PopoverTrigger,
    H8DropdownMenu,
    H8DropdownMenuContent,
    H8DropdownMenuGroup,
    H8DropdownMenuItem,
    H8DropdownMenuLabel,
    H8DropdownMenuSeparator,
    H8DropdownMenuShortcut,
    H8DropdownMenuSub,
    H8DropdownMenuSubContent,
    H8DropdownMenuSubTrigger,
    H8DropdownMenuTrigger,
    H8Drawer,
    H8DrawerContent,
    H8DrawerTrigger,
} from "@/components/hash8-ui"

import { ComponentPreview } from "@/components/docs/ComponentPreview"
import { CodeBlock } from "@/components/docs/CodeBlock"

// Hook for Responsive Demo
function useMediaQuery(query: string) {
    const [value, setValue] = React.useState(false)

    React.useEffect(() => {
        function onChange(event: MediaQueryListEvent) {
            setValue(event.matches)
        }

        const result = matchMedia(query)
        result.addEventListener("change", onChange)
        setValue(result.matches)

        return () => result.removeEventListener("change", onChange)
    }, [query])

    return value
}

const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
]

const statuses = [
    { value: "backlog", label: "Backlog" },
    { value: "todo", label: "Todo" },
    { value: "in progress", label: "In Progress" },
    { value: "done", label: "Done" },
    { value: "canceled", label: "Canceled" },
]

const labels = [
    "feature",
    "bug",
    "enhancement",
    "documentation",
    "design",
    "question",
    "maintenance",
]

const ComboboxDocs = () => {

    // Demo 1 State
    const [open1, setOpen1] = React.useState(false)
    const [value1, setValue1] = React.useState("")

    // Demo 2 State
    const [open2, setOpen2] = React.useState(false)
    const [selectedStatus, setSelectedStatus] = React.useState<typeof statuses[number] | null>(null)

    // Demo 3 State
    const [label, setLabel] = React.useState("feature")
    const [open3, setOpen3] = React.useState(false)

    // Demo 4 State
    const [open4, setOpen4] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const [selectedStatus4, setSelectedStatus4] = React.useState<typeof statuses[number] | null>(null)

    const StatusList = ({
        setOpen,
        setSelectedStatus,
    }: {
        setOpen: (open: boolean) => void
        setSelectedStatus: (status: typeof statuses[number] | null) => void
    }) => {
        return (
            <H8Command>
                <H8CommandInput placeholder="Filter status..." />
                <H8CommandList>
                    <H8CommandEmpty>No results found.</H8CommandEmpty>
                    <H8CommandGroup>
                        {statuses.map((status) => (
                            <H8CommandItem
                                key={status.value}
                                value={status.value}
                                onSelect={(value) => {
                                    setSelectedStatus(
                                        statuses.find((priority) => priority.value === value) || null
                                    )
                                    setOpen(false)
                                }}
                            >
                                {status.label}
                            </H8CommandItem>
                        ))}
                    </H8CommandGroup>
                </H8CommandList>
            </H8Command>
        )
    }

    return (
        <div className="docs-prose">
            <h1>Combobox</h1>
            <p className="text-xl text-muted-foreground">
                Autocomplete input and command palette with a list of suggestions.
            </p>

            <h2>Basic Example</h2>
            <ComponentPreview>
                <div className="flex justify-center w-full">
                    <H8Popover open={open1} onOpenChange={setOpen1}>
                        <H8PopoverTrigger asChild>
                            <H8Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open1}
                                className="w-[200px] justify-between"
                            >
                                {value1
                                    ? frameworks.find((framework) => framework.value === value1)?.label
                                    : "Select framework..."}
                                <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                            </H8Button>
                        </H8PopoverTrigger>
                        <H8PopoverContent className="w-[200px] p-0">
                            <H8Command>
                                <H8CommandInput placeholder="Search framework..." className="h-9" />
                                <H8CommandList>
                                    <H8CommandEmpty>No framework found.</H8CommandEmpty>
                                    <H8CommandGroup>
                                        {frameworks.map((framework) => (
                                            <H8CommandItem
                                                key={framework.value}
                                                value={framework.value}
                                                onSelect={(currentValue) => {
                                                    setValue1(currentValue === value1 ? "" : currentValue)
                                                    setOpen1(false)
                                                }}
                                            >
                                                {framework.label}
                                                <Check
                                                    className={cn(
                                                        "ml-auto h-4 w-4",
                                                        value1 === framework.value ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                            </H8CommandItem>
                                        ))}
                                    </H8CommandGroup>
                                </H8CommandList>
                            </H8Command>
                        </H8PopoverContent>
                    </H8Popover>
                </div>
            </ComponentPreview>
            <CodeBlock code={`<H8Popover open={open} onOpenChange={setOpen}>
  <H8PopoverTrigger asChild>
    <H8Button
      variant="outline"
      role="combobox"
      aria-expanded={open}
      className="w-[200px] justify-between"
    >
      {value
        ? frameworks.find((framework) => framework.value === value)?.label
        : "Select framework..."}
      <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
    </H8Button>
  </H8PopoverTrigger>
  <H8PopoverContent className="w-[200px] p-0">
    <H8Command>
      <H8CommandInput placeholder="Search framework..." className="h-9" />
      <H8CommandList>
        <H8CommandEmpty>No framework found.</H8CommandEmpty>
        <H8CommandGroup>
          {frameworks.map((framework) => (
            <H8CommandItem
              key={framework.value}
              value={framework.value}
              onSelect={(currentValue) => {
                setValue(currentValue === value ? "" : currentValue)
                setOpen(false)
              }}
            >
              {framework.label}
              <Check
                className={cn(
                  "ml-auto h-4 w-4",
                  value === framework.value ? "opacity-100" : "opacity-0"
                )}
              />
            </H8CommandItem>
          ))}
        </H8CommandGroup>
      </H8CommandList>
    </H8Command>
  </H8PopoverContent>
</H8Popover>`} />

            <h2>Popover</h2>
            <ComponentPreview>
                <div className="flex items-center space-x-4 justify-center w-full">
                    <p className="text-muted-foreground text-sm">Status</p>
                    <H8Popover open={open2} onOpenChange={setOpen2}>
                        <H8PopoverTrigger asChild>
                            <H8Button variant="outline" className="w-[150px] justify-start">
                                {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
                            </H8Button>
                        </H8PopoverTrigger>
                        <H8PopoverContent className="p-0" side="right" align="start">
                            <H8Command>
                                <H8CommandInput placeholder="Change status..." />
                                <H8CommandList>
                                    <H8CommandEmpty>No results found.</H8CommandEmpty>
                                    <H8CommandGroup>
                                        {statuses.map((status) => (
                                            <H8CommandItem
                                                key={status.value}
                                                value={status.value}
                                                onSelect={(value) => {
                                                    setSelectedStatus(
                                                        statuses.find((priority) => priority.value === value) ||
                                                        null
                                                    )
                                                    setOpen2(false)
                                                }}
                                            >
                                                {status.label}
                                            </H8CommandItem>
                                        ))}
                                    </H8CommandGroup>
                                </H8CommandList>
                            </H8Command>
                        </H8PopoverContent>
                    </H8Popover>
                </div>
            </ComponentPreview>
            <CodeBlock code={`<div className="flex items-center space-x-4">
  <p className="text-muted-foreground text-sm">Status</p>
  <H8Popover open={open} onOpenChange={setOpen}>
    <H8PopoverTrigger asChild>
      <H8Button variant="outline" className="w-[150px] justify-start">
        {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
      </H8Button>
    </H8PopoverTrigger>
    <H8PopoverContent className="p-0" side="right" align="start">
      <H8Command>
        <H8CommandInput placeholder="Change status..." />
        <H8CommandList>
          <H8CommandEmpty>No results found.</H8CommandEmpty>
          <H8CommandGroup>
            {statuses.map((status) => (
              <H8CommandItem
                key={status.value}
                value={status.value}
                onSelect={(value) => {
                  setSelectedStatus(
                    statuses.find((priority) => priority.value === value) ||
                      null
                  )
                  setOpen(false)
                }}
              >
                {status.label}
              </H8CommandItem>
            ))}
          </H8CommandGroup>
        </H8CommandList>
      </H8Command>
    </H8PopoverContent>
  </H8Popover>
</div>`} />

            <h2>Dropdown Menu</h2>
            <ComponentPreview>
                <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
                    <p className="text-sm leading-none font-medium">
                        <span className="bg-primary text-primary-foreground mr-2 rounded-lg px-2 py-1 text-xs">
                            {label}
                        </span>
                        <span className="text-muted-foreground">Create a new project</span>
                    </p>
                    <H8DropdownMenu open={open3} onOpenChange={setOpen3}>
                        <H8DropdownMenuTrigger asChild>
                            <H8Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                            </H8Button>
                        </H8DropdownMenuTrigger>
                        <H8DropdownMenuContent align="end" className="w-[200px]">
                            <H8DropdownMenuLabel>Actions</H8DropdownMenuLabel>
                            <H8DropdownMenuGroup>
                                <H8DropdownMenuItem>Assign to...</H8DropdownMenuItem>
                                <H8DropdownMenuItem>Set due date...</H8DropdownMenuItem>
                                <H8DropdownMenuSeparator />
                                <H8DropdownMenuSub>
                                    <H8DropdownMenuSubTrigger>Apply label</H8DropdownMenuSubTrigger>
                                    <H8DropdownMenuSubContent className="p-0">
                                        <H8Command>
                                            <H8CommandInput
                                                placeholder="Filter label..."
                                                autoFocus={true}
                                                className="h-9"
                                            />
                                            <H8CommandList>
                                                <H8CommandEmpty>No label found.</H8CommandEmpty>
                                                <H8CommandGroup>
                                                    {labels.map((label) => (
                                                        <H8CommandItem
                                                            key={label}
                                                            value={label}
                                                            onSelect={(value) => {
                                                                setLabel(value)
                                                                setOpen3(false)
                                                            }}
                                                        >
                                                            {label}
                                                        </H8CommandItem>
                                                    ))}
                                                </H8CommandGroup>
                                            </H8CommandList>
                                        </H8Command>
                                    </H8DropdownMenuSubContent>
                                </H8DropdownMenuSub>
                                <H8DropdownMenuSeparator />
                                <H8DropdownMenuItem className="text-red-600">
                                    Delete
                                    <H8DropdownMenuShortcut>⌘⌫</H8DropdownMenuShortcut>
                                </H8DropdownMenuItem>
                            </H8DropdownMenuGroup>
                        </H8DropdownMenuContent>
                    </H8DropdownMenu>
                </div>
            </ComponentPreview>
            <CodeBlock code={`<H8DropdownMenu open={open} onOpenChange={setOpen}>
  <H8DropdownMenuTrigger asChild>
    <H8Button variant="ghost" size="sm">
      <MoreHorizontal className="h-4 w-4" />
    </H8Button>
  </H8DropdownMenuTrigger>
  <H8DropdownMenuContent align="end" className="w-[200px]">
    <H8DropdownMenuLabel>Actions</H8DropdownMenuLabel>
    <H8DropdownMenuGroup>
      <H8DropdownMenuItem>Assign to...</H8DropdownMenuItem>
      <H8DropdownMenuItem>Set due date...</H8DropdownMenuItem>
      <H8DropdownMenuSeparator />
      <H8DropdownMenuSub>
        <H8DropdownMenuSubTrigger>Apply label</H8DropdownMenuSubTrigger>
        <H8DropdownMenuSubContent className="p-0">
          <H8Command>
            <H8CommandInput
              placeholder="Filter label..."
              autoFocus={true}
              className="h-9"
            />
            <H8CommandList>
              <H8CommandEmpty>No label found.</H8CommandEmpty>
              <H8CommandGroup>
                {labels.map((label) => (
                  <H8CommandItem
                    key={label}
                    value={label}
                    onSelect={(value) => {
                      setLabel(value)
                      setOpen(false)
                    }}
                  >
                    {label}
                  </H8CommandItem>
                ))}
              </H8CommandGroup>
            </H8CommandList>
          </H8Command>
        </H8DropdownMenuSubContent>
      </H8DropdownMenuSub>
      <H8DropdownMenuSeparator />
      <H8DropdownMenuItem className="text-red-600">
        Delete
        <H8DropdownMenuShortcut>⌘⌫</H8DropdownMenuShortcut>
      </H8DropdownMenuItem>
    </H8DropdownMenuGroup>
  </H8DropdownMenuContent>
</H8DropdownMenu>`} />

            <h2>Responsive</h2>
            <ComponentPreview>
                <div className="flex justify-center w-full">
                    {isDesktop ? (
                        <H8Popover open={open4} onOpenChange={setOpen4}>
                            <H8PopoverTrigger asChild>
                                <H8Button variant="outline" className="w-[150px] justify-start">
                                    {selectedStatus4 ? <>{selectedStatus4.label}</> : <>+ Set status</>}
                                </H8Button>
                            </H8PopoverTrigger>
                            <H8PopoverContent className="w-[200px] p-0" align="start">
                                <StatusList setOpen={setOpen4} setSelectedStatus={setSelectedStatus4} />
                            </H8PopoverContent>
                        </H8Popover>
                    ) : (
                        <H8Drawer open={open4} onOpenChange={setOpen4}>
                            <H8DrawerTrigger asChild>
                                <H8Button variant="outline" className="w-[150px] justify-start">
                                    {selectedStatus4 ? <>{selectedStatus4.label}</> : <>+ Set status</>}
                                </H8Button>
                            </H8DrawerTrigger>
                            <H8DrawerContent>
                                <div className="mt-4 border-t">
                                    <StatusList setOpen={setOpen4} setSelectedStatus={setSelectedStatus4} />
                                </div>
                            </H8DrawerContent>
                        </H8Drawer>
                    )}
                </div>
            </ComponentPreview>
            <CodeBlock code={`if (isDesktop) {
  return (
    <H8Popover open={open} onOpenChange={setOpen}>
      <H8PopoverTrigger asChild>
        <H8Button variant="outline" className="w-[150px] justify-start">
          {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
        </H8Button>
      </H8PopoverTrigger>
      <H8PopoverContent className="w-[200px] p-0" align="start">
        <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
      </H8PopoverContent>
    </H8Popover>
  )
}

return (
  <H8Drawer open={open} onOpenChange={setOpen}>
    <H8DrawerTrigger asChild>
      <H8Button variant="outline" className="w-[150px] justify-start">
        {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
      </H8Button>
    </H8DrawerTrigger>
    <H8DrawerContent>
      <div className="mt-4 border-t">
        <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
      </div>
    </H8DrawerContent>
  </H8Drawer>
)`} />

        </div>
    );
};

export default ComboboxDocs;
