
import { H8Checkbox, H8Label } from "@/components/hash8-ui"
import { ComponentPreview } from "@/components/docs/ComponentPreview"
import { CodeBlock } from "@/components/docs/CodeBlock"

const CheckboxDocs = () => {
    return (
        <div className="docs-prose">
            <h1>Checkbox</h1>
            <p className="text-xl text-muted-foreground">
                A control that allows the user to toggle between checked and not checked.
            </p>

            <h2>Example</h2>
            <ComponentPreview>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <H8Checkbox id="terms" />
                        <H8Label htmlFor="terms">Accept terms and conditions</H8Label>
                    </div>
                    <div className="flex items-start gap-3">
                        <H8Checkbox id="terms-2" defaultChecked />
                        <div className="grid gap-2">
                            <H8Label htmlFor="terms-2">Accept terms and conditions</H8Label>
                            <p className="text-muted-foreground text-sm">
                                By clicking this checkbox, you agree to the terms and conditions.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <H8Checkbox id="toggle" disabled />
                        <H8Label htmlFor="toggle">Enable notifications</H8Label>
                    </div>
                    <H8Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                        <H8Checkbox
                            id="toggle-2"
                            defaultChecked
                            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                        />
                        <div className="grid gap-1.5 font-normal">
                            <p className="text-sm leading-none font-medium">
                                Enable notifications
                            </p>
                            <p className="text-muted-foreground text-sm">
                                You can enable or disable notifications at any time.
                            </p>
                        </div>
                    </H8Label>
                </div>
            </ComponentPreview>
            <CodeBlock code={`import { H8Checkbox, H8Label } from "@/components/hash8-ui"

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <H8Checkbox id="terms" />
        <H8Label htmlFor="terms">Accept terms and conditions</H8Label>
      </div>
      <div className="flex items-start gap-3">
        <H8Checkbox id="terms-2" defaultChecked />
        <div className="grid gap-2">
          <H8Label htmlFor="terms-2">Accept terms and conditions</H8Label>
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <H8Checkbox id="toggle" disabled />
        <H8Label htmlFor="toggle">Enable notifications</H8Label>
      </div>
      <H8Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
        <H8Checkbox
          id="toggle-2"
          defaultChecked
          className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
        />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">
            Enable notifications
          </p>
          <p className="text-muted-foreground text-sm">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </H8Label>
    </div>
  )
}`} />

            {/* <h2>Installation</h2>
            <CodeBlock code={`npm install @radix-ui/react-checkbox`} /> */}

        </div>
    );
};

export default CheckboxDocs;
