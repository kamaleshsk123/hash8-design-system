import * as React from "react"
import {
    ArrowUpDown,
    ChevronDown,
    MoreHorizontal,
} from "lucide-react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    H8Button,
    H8Input,
    H8Table,
    H8TableBody,
    H8TableCell,
    H8TableHead,
    H8TableHeader,
    H8TableRow,
} from "@/components/hash8-ui"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ComponentPreview } from "@/components/docs/ComponentPreview"
import { CodeBlock } from "@/components/docs/CodeBlock"

// --- Data Table Example Data & Definition ---

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

const data: Payment[] = [
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1reoj4",
        amount: 242,
        status: "success",
        email: "Abe45@gmail.com",
    },
    {
        id: "derv1ws0",
        amount: 837,
        status: "processing",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kma53ae",
        amount: 874,
        status: "success",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqecj4p",
        amount: 721,
        status: "failed",
        email: "carmella@hotmail.com",
    },
]

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("status")}</div>
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <H8Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </H8Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)
            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            // row.original access if needed
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <H8Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </H8Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.original.id)}>
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

export function DataTableDemo() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <H8Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <H8Button variant="outline" className="ml-auto">
                            Columns <ChevronDown className="ml-2 h-4 w-4" />
                        </H8Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <H8Table>
                    <H8TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <H8TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <H8TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </H8TableHead>
                                    )
                                })}
                            </H8TableRow>
                        ))}
                    </H8TableHeader>
                    <H8TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <H8TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <H8TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </H8TableCell>
                                    ))}
                                </H8TableRow>
                            ))
                        ) : (
                            <H8TableRow>
                                <H8TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </H8TableCell>
                            </H8TableRow>
                        )}
                    </H8TableBody>
                </H8Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="space-x-2">
                    <H8Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </H8Button>
                    <H8Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </H8Button>
                </div>
            </div>
        </div>
    )
}

const TableDocs = () => {
    return (
        <div className="docs-prose">
            <h1>Table</h1>
            <p className="text-xl text-muted-foreground">
                A powerful table and data grid built using TanStack Table.
            </p>

            <h2>Basic Table</h2>
            <p>A simple static table example.</p>
            <ComponentPreview>
                <H8Table>
                    <H8TableHeader>
                        <H8TableRow>
                            <H8TableHead className="w-[100px]">Invoice</H8TableHead>
                            <H8TableHead>Status</H8TableHead>
                            <H8TableHead>Method</H8TableHead>
                            <H8TableHead className="text-right">Amount</H8TableHead>
                        </H8TableRow>
                    </H8TableHeader>
                    <H8TableBody>
                        <H8TableRow>
                            <H8TableCell className="font-medium">INV001</H8TableCell>
                            <H8TableCell>Paid</H8TableCell>
                            <H8TableCell>Credit Card</H8TableCell>
                            <H8TableCell className="text-right">$250.00</H8TableCell>
                        </H8TableRow>
                    </H8TableBody>
                </H8Table>
            </ComponentPreview>
            <CodeBlock code={`<H8Table>
  <H8TableHeader>
    <H8TableRow>
      <H8TableHead>Invoice</H8TableHead>
      <H8TableHead>Status</H8TableHead>
      <H8TableHead>Method</H8TableHead>
      <H8TableHead className="text-right">Amount</H8TableHead>
    </H8TableRow>
  </H8TableHeader>
  <H8TableBody>
    <H8TableRow>
      <H8TableCell className="font-medium">INV001</H8TableCell>
      <H8TableCell>Paid</H8TableCell>
      <H8TableCell>Credit Card</H8TableCell>
      <H8TableCell className="text-right">$250.00</H8TableCell>
    </H8TableRow>
  </H8TableBody>
</H8Table>`} />

            <h2>Data Table</h2>
            <p>
                This example demonstrates sorting, filtering, and pagination.
            </p>
            <ComponentPreview>
                <DataTableDemo />
            </ComponentPreview>
            <CodeBlock code={`// See TanStack Table documentation for full implementation details.
// This example uses useReactTable hook with H8Table components for rendering.

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  H8Table,
  H8TableBody,
  H8TableCell,
  H8TableHead,
  H8TableHeader,
  H8TableRow,
} from "@/components/hash8-ui"

// ... Define columns and data ...

export function DataTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <H8Table>
        <H8TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <H8TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <H8TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </H8TableHead>
                )
              })}
            </H8TableRow>
          ))}
        </H8TableHeader>
        <H8TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <H8TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <H8TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </H8TableCell>
                ))}
              </H8TableRow>
            ))
          ) : (
            <H8TableRow>
              <H8TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </H8TableCell>
            </H8TableRow>
          )}
        </H8TableBody>
      </H8Table>
    </div>
  )
}`} />

            {/* <h2>Installation</h2>
            <CodeBlock code={`npm install @tanstack/react-table`} /> */}

        </div>
    )
}

export default TableDocs
