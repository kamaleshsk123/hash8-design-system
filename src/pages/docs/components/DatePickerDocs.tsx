import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
    H8Button,
    H8Calendar,
    H8Popover,
    H8PopoverContent,
    H8PopoverTrigger,
    H8Input,
    H8Label,
} from "@/components/hash8-ui";
import { parseDate } from "chrono-node";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";

function formatDate(date: Date | undefined) {
    if (!date) {
        return ""
    }

    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    })
}

function NaturalLanguageDatePicker() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("In 2 days")
    const [date, setDate] = React.useState<Date | undefined>(
        parseDate(value) || undefined
    )
    const [month, setMonth] = React.useState<Date | undefined>(date)

    return (
        <div className="flex flex-col gap-3 w-full max-w-[300px]">
            <H8Label htmlFor="date" className="px-1">
                Schedule Date
            </H8Label>
            <div className="relative flex gap-2">
                <H8Input
                    id="date"
                    value={value}
                    placeholder="Tomorrow or next week"
                    className="bg-background pr-10"
                    onChange={(e) => {
                        setValue(e.target.value)
                        const parsed = parseDate(e.target.value)
                        if (parsed) {
                            setDate(parsed)
                            setMonth(parsed)
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                            e.preventDefault()
                            setOpen(true)
                        }
                    }}
                />
                <H8Popover open={open} onOpenChange={setOpen}>
                    <H8PopoverTrigger asChild>
                        <H8Button
                            id="date-picker"
                            variant="ghost"
                            className="absolute top-1/2 right-2 h-7 w-7 p-0 -translate-y-1/2"
                        >
                            <CalendarIcon className="h-4 w-4" />
                            <span className="sr-only">Select date</span>
                        </H8Button>
                    </H8PopoverTrigger>
                    <H8PopoverContent className="w-auto overflow-hidden p-0" align="end">
                        <H8Calendar
                            mode="single"
                            selected={date}
                            month={month}
                            onMonthChange={setMonth}
                            onSelect={(date) => {
                                setDate(date)
                                setValue(formatDate(date))
                                setOpen(false)
                            }}
                            initialFocus
                        />
                    </H8PopoverContent>
                </H8Popover>
            </div>
            <div className="text-muted-foreground px-1 text-sm">
                Your post will be published on{" "}
                <span className="font-medium">{formatDate(date)}</span>.
            </div>
        </div>
    )
}

const DatePickerDocs = () => {
    // Basic Picker State
    const [date, setDate] = React.useState<Date>();

    // Date of Birth State
    const [dobDate, setDobDate] = React.useState<Date>();
    const [isDobOpen, setIsDobOpen] = React.useState(false);

    // Date and Time State
    const [dateTimeDate, setDateTimeDate] = React.useState<Date>();

    // Natural Language State
    const [naturalInput, setNaturalInput] = React.useState("");

    return (
        <div className="docs-prose">
            <h1>Date Picker</h1>
            <p className="text-xl text-muted-foreground">
                A date picker component with range and presets.
            </p>

            <h2>Picker with Input</h2>
            <ComponentPreview>
                <H8Popover>
                    <H8PopoverTrigger asChild>
                        <H8Button
                            variant={"outline"}
                            className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </H8Button>
                    </H8PopoverTrigger>
                    <H8PopoverContent className="w-auto p-0">
                        <H8Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </H8PopoverContent>
                </H8Popover>
            </ComponentPreview>
            <CodeBlock code={`const [date, setDate] = React.useState<Date>()

<H8Popover>
  <H8PopoverTrigger asChild>
    <H8Button
      variant={"outline"}
      className={cn(
        "w-[280px] justify-start text-left font-normal",
        !date && "text-muted-foreground"
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {date ? format(date, "PPP") : <span>Pick a date</span>}
    </H8Button>
  </H8PopoverTrigger>
  <H8PopoverContent className="w-auto p-0">
    <H8Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      initialFocus
    />
  </H8PopoverContent>
</H8Popover>`} />

            <h2>Date of Birth Picker</h2>
            <p>A date picker optimized for selecting a date of birth (validation, year navigation).</p>
            <ComponentPreview>
                <H8Popover open={isDobOpen} onOpenChange={setIsDobOpen}>
                    <H8PopoverTrigger asChild>
                        <H8Button
                            variant={"outline"}
                            className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !dobDate && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dobDate ? format(dobDate, "dd/MM/yyyy") : <span>Pick a date</span>}
                        </H8Button>
                    </H8PopoverTrigger>
                    <H8PopoverContent className="w-auto p-0">
                        <H8Calendar
                            mode="single"
                            selected={dobDate}
                            onSelect={(date) => {
                                setDobDate(date);
                                setIsDobOpen(false);
                            }}
                            disabled={(date) =>
                                date > new Date("2100-01-01") || date < new Date("1900-01-01")
                            }
                            initialFocus
                        />
                    </H8PopoverContent>
                </H8Popover>
            </ComponentPreview>
            <CodeBlock code={`<H8Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={(date) =>
    date > new Date() || date < new Date("1900-01-01")
  }
  initialFocus
  captionLayout="dropdown-buttons"
  fromYear={1900}
  toYear={new Date().getFullYear()}
/>`} />

            <h2>Date and Time Picker</h2>
            <p>A composition for selecting date and time.</p>
            <ComponentPreview>
                <div className="flex gap-2 items-start">
                    <H8Popover>
                        <H8PopoverTrigger asChild>
                            <H8Button
                                variant={"outline"}
                                className={cn(
                                    "w-[280px] justify-start text-left font-normal",
                                    !dateTimeDate && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {dateTimeDate ? format(dateTimeDate, "PPP") : <span>Pick a date</span>}
                            </H8Button>
                        </H8PopoverTrigger>
                        <H8PopoverContent className="w-auto p-0">
                            <H8Calendar
                                mode="single"
                                selected={dateTimeDate}
                                onSelect={setDateTimeDate}
                                initialFocus
                            />
                        </H8PopoverContent>
                    </H8Popover>
                    <div className="w-[120px]">
                        <H8Input
                            type="time"
                            onChange={(e) => {
                                // Simple logic to merge time
                                console.log(e.target.value)
                            }}
                        />
                    </div>
                </div>
            </ComponentPreview>
            <CodeBlock code={`<div className="flex gap-2">
  <H8Popover>
    {/* ... Date Picker ... */}
    <H8Calendar mode="single" selected={date} onSelect={setDate} />
  </H8Popover>
  <H8Input type="time" />
</div>`} />

            <h2>Natural Language Picker</h2>
            <p>Type a date like "tomorrow" or "next friday".</p>
            <ComponentPreview>
                <NaturalLanguageDatePicker />
            </ComponentPreview>
            <CodeBlock code={`import { parseDate } from "chrono-node"

function NaturalLanguageDatePicker() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("In 2 days")
  const [date, setDate] = React.useState<Date | undefined>(
    parseDate(value) || undefined
  )
  const [month, setMonth] = React.useState<Date | undefined>(date)

  return (
    <div className="flex flex-col gap-3 w-full max-w-[300px]">
      <H8Label htmlFor="date" className="px-1">
        Schedule Date
      </H8Label>
      <div className="relative flex gap-2">
        <H8Input
          id="date"
          value={value}
          placeholder="Tomorrow or next week"
          className="bg-background pr-10"
          onChange={(e) => {
            setValue(e.target.value)
            const parsed = parseDate(e.target.value)
            if (parsed) {
              setDate(parsed)
              setMonth(parsed)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <H8Popover open={open} onOpenChange={setOpen}>
          <H8PopoverTrigger asChild>
            <H8Button
              id="date-picker"
              variant="ghost"
              className="absolute top-1/2 right-2 h-7 w-7 p-0 -translate-y-1/2"
            >
              <CalendarIcon className="h-4 w-4" />
              <span className="sr-only">Select date</span>
            </H8Button>
          </H8PopoverTrigger>
          <H8PopoverContent className="w-auto overflow-hidden p-0" align="end">
            <H8Calendar
              mode="single"
              selected={date}
              month={month}
              onMonthChange={setMonth}
              onSelect={(date) => {
                setDate(date)
                setValue(formatDate(date))
                setOpen(false)
              }}
              initialFocus
            />
          </H8PopoverContent>
        </H8Popover>
      </div>
      <div className="text-muted-foreground px-1 text-sm">
        Your post will be published on{" "}
        <span className="font-medium">{formatDate(date)}</span>.
      </div>
    </div>
  )
}`} />

            <h2>Installation</h2>
            <CodeBlock code={`npm install date-fns react-day-picker chrono-node`} />

        </div>
    );
};

export default DatePickerDocs;
