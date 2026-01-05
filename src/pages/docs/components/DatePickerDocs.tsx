
import * as React from "react"
import { CalendarIcon, ChevronDownIcon } from "lucide-react"
import { parseDate } from "chrono-node"

import { cn } from "@/lib/utils"
// Import H8 components
import {
  H8Button,
  H8Calendar,
  H8Input,
  H8Label,
  H8Popover,
  H8PopoverContent,
  H8PopoverTrigger,
} from "@/components/hash8-ui"

import { ComponentPreview } from "@/components/docs/ComponentPreview"
import { CodeBlock } from "@/components/docs/CodeBlock"

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

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false
  }
  return !isNaN(date.getTime())
}

const DatePickerDocs = () => {

  // --- Example 1: Date of Birth ---
  const [dobOpen, setDobOpen] = React.useState(false)
  const [dobDate, setDobDate] = React.useState<Date | undefined>(undefined)

  // --- Example 2: Picker with Input ---
  const [inputOpen, setInputOpen] = React.useState(false)
  const [inputDate, setInputDate] = React.useState<Date | undefined>(
    new Date("2025-06-01")
  )
  const [inputMonth, setInputMonth] = React.useState<Date | undefined>(inputDate)
  const [inputValue, setInputValue] = React.useState(formatDate(inputDate))

  // --- Example 3: Date and Time Picker ---
  const [dateTimeOpen, setDateTimeOpen] = React.useState(false)
  const [dateTimeDate, setDateTimeDate] = React.useState<Date | undefined>(undefined)

  // --- Example 4: Natural Language Picker ---
  const [nlOpen, setNlOpen] = React.useState(false)
  const [nlValue, setNlValue] = React.useState("In 2 days")
  const [nlDate, setNlDate] = React.useState<Date | undefined>(
    parseDate(nlValue) || undefined
  )
  const [nlMonth, setNlMonth] = React.useState<Date | undefined>(nlDate)


  return (
    <div className="docs-prose">
      <h1>Date Picker</h1>
      <p className="text-xl text-muted-foreground">
        A date picker component with range and presets.
      </p>

      {/* Example 1 */}
      <h2>Date of Birth Picker</h2>
      <ComponentPreview>
        <div className="flex flex-col gap-3">
          <H8Label htmlFor="date-dob" className="px-1">
            Date of birth
          </H8Label>
          <H8Popover open={dobOpen} onOpenChange={setDobOpen}>
            <H8PopoverTrigger asChild>
              <H8Button
                variant="outline"
                id="date-dob"
                className="w-48 justify-between font-normal"
              >
                {dobDate ? dobDate.toLocaleDateString() : "Select date"}
                <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
              </H8Button>
            </H8PopoverTrigger>
            <H8PopoverContent className="w-auto overflow-hidden p-0" align="start">
              <H8Calendar
                mode="single"
                selected={dobDate}
                captionLayout="dropdown-buttons"
                onSelect={(date) => {
                  setDobDate(date)
                  setDobOpen(false)
                }}
                fromYear={1900}
                toYear={new Date().getFullYear()}
              />
            </H8PopoverContent>
          </H8Popover>
        </div>
      </ComponentPreview>
      <CodeBlock code={`<div className="flex flex-col gap-3">
  <H8Label htmlFor="date" className="px-1">
    Date of birth
  </H8Label>
  <H8Popover open={open} onOpenChange={setOpen}>
    <H8PopoverTrigger asChild>
      <H8Button
        variant="outline"
        id="date"
        className="w-48 justify-between font-normal"
      >
        {date ? date.toLocaleDateString() : "Select date"}
        <ChevronDownIcon />
      </H8Button>
    </H8PopoverTrigger>
    <H8PopoverContent className="w-auto overflow-hidden p-0" align="start">
      <H8Calendar
        mode="single"
        selected={date}
        captionLayout="dropdown-buttons"
        onSelect={(date) => {
          setDate(date)
          setOpen(false)
        }}
        fromYear={1900}
        toYear={new Date().getFullYear()}
      />
    </H8PopoverContent>
  </H8Popover>
</div>`} />

      {/* Example 2 */}
      <h2>Picker with Input</h2>
      <ComponentPreview>
        <div className="flex flex-col gap-3">
          <H8Label htmlFor="date-input" className="px-1">
            Subscription Date
          </H8Label>
          <div className="relative flex gap-2">
            <H8Input
              id="date-input"
              value={inputValue}
              placeholder="June 01, 2025"
              className="bg-background pr-10"
              onChange={(e) => {
                const date = new Date(e.target.value)
                setInputValue(e.target.value)
                if (isValidDate(date)) {
                  setInputDate(date)
                  setInputMonth(date)
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault()
                  setInputOpen(true)
                }
              }}
            />
            <H8Popover open={inputOpen} onOpenChange={setInputOpen}>
              <H8PopoverTrigger asChild>
                <H8Button
                  id="date-picker-btn"
                  variant="ghost"
                  className="absolute top-1/2 right-2 size-6 -translate-y-1/2 p-0 h-6 w-6"
                >
                  <CalendarIcon className="size-3.5" />
                  <span className="sr-only">Select date</span>
                </H8Button>
              </H8PopoverTrigger>
              <H8PopoverContent
                className="w-auto overflow-hidden p-0"
                align="end"
                alignOffset={-8}
                sideOffset={10}
              >
                <H8Calendar
                  mode="single"
                  selected={inputDate}
                  captionLayout="dropdown-buttons"
                  month={inputMonth}
                  onMonthChange={setInputMonth}
                  onSelect={(date) => {
                    setInputDate(date)
                    setInputValue(formatDate(date))
                    setInputOpen(false)
                  }}
                  fromYear={1900}
                  toYear={new Date().getFullYear()}
                />
              </H8PopoverContent>
            </H8Popover>
          </div>
        </div>
      </ComponentPreview>
      <CodeBlock code={`<div className="flex flex-col gap-3">
  <H8Label htmlFor="date" className="px-1">
    Subscription Date
  </H8Label>
  <div className="relative flex gap-2">
    <H8Input
      id="date"
      value={value}
      placeholder="June 01, 2025"
      className="bg-background pr-10"
      onChange={(e) => {
        const date = new Date(e.target.value)
        setValue(e.target.value)
        if (isValidDate(date)) {
          setDate(date)
          setMonth(date)
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
          className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
        >
          <CalendarIcon className="size-3.5" />
          <span className="sr-only">Select date</span>
        </H8Button>
      </H8PopoverTrigger>
      <H8PopoverContent
        className="w-auto overflow-hidden p-0"
        align="end"
        alignOffset={-8}
        sideOffset={10}
      >
        <H8Calendar
          mode="single"
          selected={date}
          captionLayout="dropdown"
          month={month}
          onMonthChange={setMonth}
          onSelect={(date) => {
            setDate(date)
            setValue(formatDate(date))
            setOpen(false)
          }}
        />
      </H8PopoverContent>
    </H8Popover>
  </div>
</div>`} />

      {/* Example 3 */}
      <h2>Date and Time Picker</h2>
      <ComponentPreview>
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            <H8Label htmlFor="date-picker-3" className="px-1">
              Date
            </H8Label>
            <H8Popover open={dateTimeOpen} onOpenChange={setDateTimeOpen}>
              <H8PopoverTrigger asChild>
                <H8Button
                  variant="outline"
                  id="date-picker-3"
                  className="w-32 justify-between font-normal"
                >
                  {dateTimeDate ? dateTimeDate.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
                </H8Button>
              </H8PopoverTrigger>
              <H8PopoverContent className="w-auto overflow-hidden p-0" align="start">
                <H8Calendar
                  mode="single"
                  selected={dateTimeDate}
                  captionLayout="dropdown-buttons"
                  onSelect={(date) => {
                    setDateTimeDate(date)
                    setDateTimeOpen(false)
                  }}
                  fromYear={1900}
                  toYear={new Date().getFullYear()}
                />
              </H8PopoverContent>
            </H8Popover>
          </div>
          <div className="flex flex-col gap-3">
            <H8Label htmlFor="time-picker" className="px-1">
              Time
            </H8Label>
            <H8Input
              type="time"
              id="time-picker"
              step="1"
              defaultValue="10:30:00"
              className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
          </div>
        </div>
      </ComponentPreview>
      <CodeBlock code={`<div className="flex gap-4">
  <div className="flex flex-col gap-3">
    <H8Label htmlFor="date-picker" className="px-1">
      Date
    </H8Label>
    <H8Popover open={open} onOpenChange={setOpen}>
      <H8PopoverTrigger asChild>
        <H8Button
          variant="outline"
          id="date-picker"
          className="w-32 justify-between font-normal"
        >
          {date ? date.toLocaleDateString() : "Select date"}
          <ChevronDownIcon />
        </H8Button>
      </H8PopoverTrigger>
      <H8PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <H8Calendar
          mode="single"
          selected={date}
          captionLayout="dropdown-buttons"
          onSelect={(date) => {
            setDate(date)
            setOpen(false)
          }}
          fromYear={1900}
          toYear={new Date().getFullYear()}
        />
      </H8PopoverContent>
    </H8Popover>
  </div>
  <div className="flex flex-col gap-3">
    <H8Label htmlFor="time-picker" className="px-1">
      Time
    </H8Label>
    <H8Input
      type="time"
      id="time-picker"
      step="1"
      defaultValue="10:30:00"
      className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
    />
  </div>
</div>`} />

      {/* Example 4 */}
      <h2>Natural Language Picker</h2>
      <ComponentPreview>
        <div className="flex flex-col gap-3">
          <H8Label htmlFor="date-nl" className="px-1">
            Schedule Date
          </H8Label>
          <div className="relative flex gap-2">
            <H8Input
              id="date-nl"
              value={nlValue}
              placeholder="Tomorrow or next week"
              className="bg-background pr-10"
              onChange={(e) => {
                setNlValue(e.target.value)
                const date = parseDate(e.target.value)
                if (date) {
                  setNlDate(date)
                  setNlMonth(date)
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault()
                  setNlOpen(true)
                }
              }}
            />
            <H8Popover open={nlOpen} onOpenChange={setNlOpen}>
              <H8PopoverTrigger asChild>
                <H8Button
                  id="date-picker-nl"
                  variant="ghost"
                  className="absolute top-1/2 right-2 size-6 -translate-y-1/2 p-0 h-6 w-6"
                >
                  <CalendarIcon className="size-3.5" />
                  <span className="sr-only">Select date</span>
                </H8Button>
              </H8PopoverTrigger>
              <H8PopoverContent className="w-auto overflow-hidden p-0" align="end">
                <H8Calendar
                  mode="single"
                  selected={nlDate}
                  captionLayout="dropdown-buttons"
                  month={nlMonth}
                  onMonthChange={setNlMonth}
                  onSelect={(date) => {
                    setNlDate(date)
                    setNlValue(formatDate(date))
                    setNlOpen(false)
                  }}
                  fromYear={1900}
                  toYear={new Date().getFullYear()}
                />
              </H8PopoverContent>
            </H8Popover>
          </div>
          <div className="text-muted-foreground px-1 text-sm">
            Your post will be published on{" "}
            <span className="font-medium">{formatDate(nlDate)}</span>.
          </div>
        </div>
      </ComponentPreview>
      <CodeBlock code={`<div className="flex flex-col gap-3">
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
        const date = parseDate(e.target.value)
        if (date) {
          setDate(date)
          setMonth(date)
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
          className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
        >
          <CalendarIcon className="size-3.5" />
          <span className="sr-only">Select date</span>
        </H8Button>
      </H8PopoverTrigger>
      <H8PopoverContent className="w-auto overflow-hidden p-0" align="end">
        <H8Calendar
          mode="single"
          selected={date}
          captionLayout="dropdown-buttons"
          month={month}
          onMonthChange={setMonth}
          onSelect={(date) => {
            setDate(date)
            setValue(formatDate(date))
            setOpen(false)
          }}
          fromYear={1900}
          toYear={new Date().getFullYear()}
        />
      </H8PopoverContent>
    </H8Popover>
  </div>
  <div className="text-muted-foreground px-1 text-sm">
    Your post will be published on{" "}
    <span className="font-medium">{formatDate(date)}</span>.
  </div>
</div>`} />

      {/* <h2>Installation</h2>
            <CodeBlock code={`npm install date-fns react-day-picker chrono-node`} /> */}

    </div>
  );
};

export default DatePickerDocs;
