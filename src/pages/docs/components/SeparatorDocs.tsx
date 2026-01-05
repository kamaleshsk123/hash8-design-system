
import { H8Separator } from "@/components/hash8-ui"
import { ComponentPreview } from "@/components/docs/ComponentPreview"
import { CodeBlock } from "@/components/docs/CodeBlock"

const SeparatorDocs = () => {
    return (
        <div className="docs-prose">
            <h1>Separator</h1>
            <p className="text-xl text-muted-foreground">
                Visually or semantically separates content.
            </p>

            <h2>Example</h2>
            <ComponentPreview>
                <div className="w-full flex justify-center">
                    <div>
                        <div className="space-y-1">
                            <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
                            <p className="text-muted-foreground text-sm">
                                An open-source UI component library.
                            </p>
                        </div>
                        <H8Separator className="my-4" />
                        <div className="flex h-5 items-center space-x-4 text-sm">
                            <div>Blog</div>
                            <H8Separator orientation="vertical" />
                            <div>Docs</div>
                            <H8Separator orientation="vertical" />
                            <div>Source</div>
                        </div>
                    </div>
                </div>
            </ComponentPreview>
            <CodeBlock code={`import { H8Separator } from "@/components/hash8-ui"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">
          An open-source UI component library.
        </p>
      </div>
      <H8Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <H8Separator orientation="vertical" />
        <div>Docs</div>
        <H8Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}`} />

            {/* <h2>Installation</h2>
            <CodeBlock code={`npm install @radix-ui/react-separator`} /> */}

        </div>
    );
};

export default SeparatorDocs;
