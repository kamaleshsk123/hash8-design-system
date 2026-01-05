import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
    H8Card,
    H8CardContent,
    H8Carousel,
    H8CarouselContent,
    H8CarouselItem,
    H8CarouselNext,
    H8CarouselPrevious,
    type CarouselApi,
} from "@/components/hash8-ui"

import { ComponentPreview } from "@/components/docs/ComponentPreview"
import { CodeBlock } from "@/components/docs/CodeBlock"

const CarouselDocs = () => {

    // API Demo State
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    // Plugin Demo Ref
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div className="docs-prose">
            <h1>Carousel</h1>
            <p className="text-xl text-muted-foreground">
                A carousel with motion and swipe built using Embla.
            </p>

            <h2>Basic Example</h2>
            <ComponentPreview>
                <div className="w-full flex justify-center">
                    <H8Carousel className="w-full max-w-xs">
                        <H8CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <H8CarouselItem key={index}>
                                    <div className="p-1">
                                        <H8Card>
                                            <H8CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-4xl font-semibold">{index + 1}</span>
                                            </H8CardContent>
                                        </H8Card>
                                    </div>
                                </H8CarouselItem>
                            ))}
                        </H8CarouselContent>
                        <H8CarouselPrevious />
                        <H8CarouselNext />
                    </H8Carousel>
                </div>
            </ComponentPreview>
            <CodeBlock code={`<H8Carousel className="w-full max-w-xs">
  <H8CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <H8CarouselItem key={index}>
        <div className="p-1">
          <H8Card>
            <H8CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </H8CardContent>
          </H8Card>
        </div>
      </H8CarouselItem>
    ))}
  </H8CarouselContent>
  <H8CarouselPrevious />
  <H8CarouselNext />
</H8Carousel>`} />

            <h2>Size</h2>
            <p>Use <code>basis</code> utility classes to set the size of the carousel items.</p>
            <ComponentPreview>
                <div className="w-full flex justify-center">
                    <H8Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-sm"
                    >
                        <H8CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <H8CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <H8Card>
                                            <H8CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-3xl font-semibold">{index + 1}</span>
                                            </H8CardContent>
                                        </H8Card>
                                    </div>
                                </H8CarouselItem>
                            ))}
                        </H8CarouselContent>
                        <H8CarouselPrevious />
                        <H8CarouselNext />
                    </H8Carousel>
                </div>
            </ComponentPreview>
            <CodeBlock code={`<H8Carousel
  opts={{
    align: "start",
  }}
  className="w-full max-w-sm"
>
  <H8CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <H8CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <H8Card>
            <H8CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-3xl font-semibold">{index + 1}</span>
            </H8CardContent>
          </H8Card>
        </div>
      </H8CarouselItem>
    ))}
  </H8CarouselContent>
  <H8CarouselPrevious />
  <H8CarouselNext />
</H8Carousel>`} />

            <h2>Spacing</h2>
            <p>Add padding to the carousel items to create spacing.</p>
            <ComponentPreview>
                <div className="w-full flex justify-center">
                    <H8Carousel className="w-full max-w-sm">
                        <H8CarouselContent className="-ml-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <H8CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <H8Card>
                                            <H8CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-2xl font-semibold">{index + 1}</span>
                                            </H8CardContent>
                                        </H8Card>
                                    </div>
                                </H8CarouselItem>
                            ))}
                        </H8CarouselContent>
                        <H8CarouselPrevious />
                        <H8CarouselNext />
                    </H8Carousel>
                </div>
            </ComponentPreview>
            <CodeBlock code={`<H8Carousel className="w-full max-w-sm">
  <H8CarouselContent className="-ml-1">
    {Array.from({ length: 5 }).map((_, index) => (
      <H8CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <H8Card>
            <H8CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-2xl font-semibold">{index + 1}</span>
            </H8CardContent>
          </H8Card>
        </div>
      </H8CarouselItem>
    ))}
  </H8CarouselContent>
  <H8CarouselPrevious />
  <H8CarouselNext />
</H8Carousel>`} />

            <h2>Orientation</h2>
            <p>Use the <code>orientation</code> prop to set the orientation of the carousel.</p>
            <ComponentPreview>
                <div className="w-full flex justify-center">
                    <H8Carousel
                        opts={{
                            align: "start",
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs"
                    >
                        <H8CarouselContent className="-mt-1 h-[200px]">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <H8CarouselItem key={index} className="pt-1 md:basis-1/2">
                                    <div className="p-1">
                                        <H8Card>
                                            <H8CardContent className="flex items-center justify-center p-6">
                                                <span className="text-3xl font-semibold">{index + 1}</span>
                                            </H8CardContent>
                                        </H8Card>
                                    </div>
                                </H8CarouselItem>
                            ))}
                        </H8CarouselContent>
                        <H8CarouselPrevious />
                        <H8CarouselNext />
                    </H8Carousel>
                </div>
            </ComponentPreview>
            <CodeBlock code={`<H8Carousel
  opts={{
    align: "start",
  }}
  orientation="vertical"
  className="w-full max-w-xs"
>
  <H8CarouselContent className="-mt-1 h-[200px]">
    {Array.from({ length: 5 }).map((_, index) => (
      <H8CarouselItem key={index} className="pt-1 md:basis-1/2">
        <div className="p-1">
          <H8Card>
            <H8CardContent className="flex items-center justify-center p-6">
              <span className="text-3xl font-semibold">{index + 1}</span>
            </H8CardContent>
          </H8Card>
        </div>
      </H8CarouselItem>
    ))}
  </H8CarouselContent>
  <H8CarouselPrevious />
  <H8CarouselNext />
</H8Carousel>`} />

            <h2>API</h2>
            <p>Use the <code>setApi</code> prop to get the carousel API instance.</p>
            <ComponentPreview>
                <div className="w-full flex justify-center flex-col items-center">
                    <H8Carousel setApi={setApi} className="w-full max-w-xs">
                        <H8CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <H8CarouselItem key={index}>
                                    <H8Card>
                                        <H8CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </H8CardContent>
                                    </H8Card>
                                </H8CarouselItem>
                            ))}
                        </H8CarouselContent>
                        <H8CarouselPrevious />
                        <H8CarouselNext />
                    </H8Carousel>
                    <div className="text-muted-foreground py-2 text-center text-sm">
                        Slide {current} of {count}
                    </div>
                </div>
            </ComponentPreview>
            <CodeBlock code={`import { type CarouselApi } from "@/components/hash8-ui"

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="mx-auto max-w-xs">
      <H8Carousel setApi={setApi} className="w-full max-w-xs">
        <H8CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <H8CarouselItem key={index}>
              <H8Card>
                <H8CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </H8CardContent>
              </H8Card>
            </H8CarouselItem>
          ))}
        </H8CarouselContent>
        <H8CarouselPrevious />
        <H8CarouselNext />
      </H8Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </div>
  )
}`} />

            <h2>Plugins</h2>
            <p>
                Use plugins to add functionality to the carousel. This example uses <code>embla-carousel-autoplay</code>.
                {" "}
                See the <a href="https://www.embla-carousel.com/api/plugins/" target="_blank" rel="noreferrer" className="underline font-medium decoration-primary">Embla Carousel docs</a> for more information on using plugins.
            </p>
            <ComponentPreview>
                <div className="w-full flex justify-center">
                    <H8Carousel
                        plugins={[plugin.current]}
                        className="w-full max-w-xs"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <H8CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <H8CarouselItem key={index}>
                                    <div className="p-1">
                                        <H8Card>
                                            <H8CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-4xl font-semibold">{index + 1}</span>
                                            </H8CardContent>
                                        </H8Card>
                                    </div>
                                </H8CarouselItem>
                            ))}
                        </H8CarouselContent>
                        <H8CarouselPrevious />
                        <H8CarouselNext />
                    </H8Carousel>
                </div>
            </ComponentPreview>
            <CodeBlock code={`import Autoplay from "embla-carousel-autoplay"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <H8Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <H8CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <H8CarouselItem key={index}>
            <div className="p-1">
              <H8Card>
                <H8CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </H8CardContent>
              </H8Card>
            </div>
          </H8CarouselItem>
        ))}
      </H8CarouselContent>
      <H8CarouselPrevious />
      <H8CarouselNext />
    </H8Carousel>
  )
}`} />

            {/* <h2>Installation</h2>
            <CodeBlock code={`npm install embla-carousel-react embla-carousel-autoplay`} /> */}

        </div>
    );
};

export default CarouselDocs;
