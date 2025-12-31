import { CodeBlock } from "@/components/docs/CodeBlock";

const NuxtInstallation = () => {
    return (
        <div className="docs-prose">
            <h1>Nuxt Installation</h1>
            <p className="text-xl text-muted-foreground">
                Use Hash8 UI React components inside your Nuxt (Vue) application via the Standalone CDN.
            </p>

            <div className="mt-8">
                <h3>1. Enable Custom Elements</h3>
                <p>In `nuxt.config.ts`, tell Vue to ignore H8 tags so it doesn't try to compile them.</p>
                <CodeBlock code={`export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('H8')
    }
  }
})`} />
            </div>

            <div className="mt-8">
                <h3>2. Add the Script</h3>
                <p>Add the script to your `app.vue` or `nuxt.config.ts` head.</p>
                <CodeBlock code={`useHead({
  script: [
    { src: 'https://unpkg.com/hash8-ui/dist-standalone/hash8-ui.standalone.js', defer: true }
  ]
})`} />
            </div>

            <div className="mt-8">
                <h3>3. Use in Components</h3>
                <p>You can now drop components directly into your Vue templates.</p>
                <CodeBlock code={`<template>
  <div class="p-8">
    <H8Card>
      <H8CardHeader>
        <H8CardTitle>Hello from Nuxt</H8CardTitle>
      </H8CardHeader>
      <H8CardContent>
         <H8Button @click="handleClick">Action</H8Button>
      </H8CardContent>
    </H8Card>
  </div>
</template>`} />
            </div>
        </div>
    );
};

export default NuxtInstallation;
