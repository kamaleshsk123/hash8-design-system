import { CalendarIcon } from "lucide-react"

import {
    H8Avatar,
    H8AvatarFallback,
    H8AvatarImage,
    H8Button,
    H8HoverCard,
    H8HoverCardContent,
    H8HoverCardTrigger,
} from "@/components/hash8-ui"

import { ComponentPreview } from "@/components/docs/ComponentPreview"
import { CodeBlock } from "@/components/docs/CodeBlock"

const HoverCardDocs = () => {
    return (
        <div className="docs-prose">
            <h1>Hover Card</h1>
            <p className="text-xl text-muted-foreground">
                For sighted users to preview content available behind a link.
            </p>

            <h2>Example</h2>
            <ComponentPreview>
                <H8HoverCard>
                    <H8HoverCardTrigger asChild>
                        <H8Button variant="link">@nextjs</H8Button>
                    </H8HoverCardTrigger>
                    <H8HoverCardContent className="w-80">
                        <div className="flex justify-between gap-4">
                            <H8Avatar>
                                <H8AvatarImage src="https://github.com/vercel.png" />
                                <H8AvatarFallback>VC</H8AvatarFallback>
                            </H8Avatar>
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold">@nextjs</h4>
                                <p className="text-sm">
                                    The React Framework – created and maintained by @vercel.
                                </p>
                                <div className="flex items-center pt-2">
                                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                                    <span className="text-xs text-muted-foreground">
                                        Joined December 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                    </H8HoverCardContent>
                </H8HoverCard>
            </ComponentPreview>
            <CodeBlock code={`<H8HoverCard>
  <H8HoverCardTrigger asChild>
    <H8Button variant="link">@nextjs</H8Button>
  </H8HoverCardTrigger>
  <H8HoverCardContent className="w-80">
    <div className="flex justify-between gap-4">
      <H8Avatar>
        <H8AvatarImage src="https://github.com/vercel.png" />
        <H8AvatarFallback>VC</H8AvatarFallback>
      </H8Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
        <div className="flex items-center pt-2">
          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </H8HoverCardContent>
</H8HoverCard>`} />

            {/* <h2>Installation</h2>
            <CodeBlock code={`npm install @radix-ui/react-hover-card`} /> */}

        </div>
    );
};

export default HoverCardDocs;
