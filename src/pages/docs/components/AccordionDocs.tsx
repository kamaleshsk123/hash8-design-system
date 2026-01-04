import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/hash8-ui/accordion";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";

const AccordionDocs = () => {
    return (
        <div className="docs-prose">
            <h1>Accordion</h1>
            <p className="text-xl text-muted-foreground">
                A vertically stacked set of interactive headings that each reveal a section of content.
            </p>

            <h2>Preview</h2>
            <ComponentPreview>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It's animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </ComponentPreview>

            {/* <h2>Installation</h2>
            <CodeBlock
                code={`npm install @radix-ui/react-accordion`}
            /> */}

            <h2>Usage</h2>
            <CodeBlock
                code={`import {
  H8Accordion,
  H8AccordionContent,
  H8AccordionItem,
  H8AccordionTrigger,
} from "@/components/hash8-ui"

export function AccordionDemo() {
  return (
    <H8Accordion type="single" collapsible className="w-full">
      <H8AccordionItem value="item-1">
        <H8AccordionTrigger>Is it accessible?</H8AccordionTrigger>
        <H8AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </H8AccordionContent>
      </H8AccordionItem>
      <H8AccordionItem value="item-2">
        <H8AccordionTrigger>Is it styled?</H8AccordionTrigger>
        <H8AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </H8AccordionContent>
      </H8AccordionItem>
      <H8AccordionItem value="item-3">
        <H8AccordionTrigger>Is it animated?</H8AccordionTrigger>
        <H8AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </H8AccordionContent>
      </H8AccordionItem>
    </H8Accordion>
  )
}`}
            />
        </div>
    );
};

export default AccordionDocs;
