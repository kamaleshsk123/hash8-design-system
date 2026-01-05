import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"

import {
  H8Alert,
  H8AlertDescription,
  H8AlertTitle,
} from "@/components/hash8-ui"

import { ComponentPreview } from "@/components/docs/ComponentPreview"
import { CodeBlock } from "@/components/docs/CodeBlock"

const AlertDocs = () => {
  return (
    <div className="docs-prose">
      <h1>Alert</h1>
      <p className="text-xl text-muted-foreground">
        Displays a callout for user attention.
      </p>

      <h2>Example</h2>
      <ComponentPreview>
        <div className="grid w-full max-w-xl items-start gap-4">
          <H8Alert>
            <CheckCircle2Icon className="h-4 w-4" />
            <H8AlertTitle>Success! Your changes have been saved</H8AlertTitle>
            <H8AlertDescription>
              This is an alert with icon, title and description.
            </H8AlertDescription>
          </H8Alert>
          <H8Alert>
            <PopcornIcon className="h-4 w-4" />
            <H8AlertTitle>
              This Alert has a title and an icon. No description.
            </H8AlertTitle>
          </H8Alert>
          <H8Alert variant="destructive">
            <AlertCircleIcon className="h-4 w-4" />
            <H8AlertTitle>Unable to process your payment.</H8AlertTitle>
            <H8AlertDescription>
              <p>Please verify your billing information and try again.</p>
              <ul className="list-inside list-disc text-sm">
                <li>Check your card details</li>
                <li>Ensure sufficient funds</li>
                <li>Verify billing address</li>
              </ul>
            </H8AlertDescription>
          </H8Alert>
        </div>
      </ComponentPreview>
      <CodeBlock code={`import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"
import {
  H8Alert,
  H8AlertDescription,
  H8AlertTitle,
} from "@/components/hash8-ui"

export function AlertDemo() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <H8Alert>
        <CheckCircle2Icon className="h-4 w-4" />
        <H8AlertTitle>Success! Your changes have been saved</H8AlertTitle>
        <H8AlertDescription>
          This is an alert with icon, title and description.
        </H8AlertDescription>
      </H8Alert>
      <H8Alert>
        <PopcornIcon className="h-4 w-4" />
        <H8AlertTitle>
          This Alert has a title and an icon. No description.
        </H8AlertTitle>
      </H8Alert>
      <H8Alert variant="destructive">
        <AlertCircleIcon className="h-4 w-4" />
        <H8AlertTitle>Unable to process your payment.</H8AlertTitle>
        <H8AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </H8AlertDescription>
      </H8Alert>
    </div>
  )
}`} />

      {/* <h2>Installation</h2>
            <CodeBlock code={`npm install @radix-ui/react-alert`} /> */}

    </div>
  );
};

export default AlertDocs;
