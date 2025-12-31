import { CodeBlock } from "@/components/docs/CodeBlock";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AngularInstallation = () => {
    return (
        <div className="docs-prose">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                <Link to="/docs/installation" className="hover:text-foreground">Installation</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">Angular</span>
            </div>

            <h1>Install Hash8 with Angular</h1>
            <p className="text-xl text-muted-foreground">
                Use Hash8 UI components in your Angular project via the standalone bundle.
            </p>

            <div className="mt-8 space-y-10">
                <div className="flex gap-4 md:gap-6">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-muted text-sm font-bold font-mono">
                        01
                    </div>
                    <div className="flex-1 space-y-4">
                        <h3 className="mt-0">Create your project</h3>
                        <p>Start by creating a new Angular project if you don't have one set up already.</p>
                        <CodeBlock code={`ng new my-project
cd my-project`} />
                    </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-muted text-sm font-bold font-mono">
                        02
                    </div>
                    <div className="flex-1 space-y-4">
                        <h3 className="mt-0">Add the Script</h3>
                        <p>Add the Hash8 UI standalone script to your <code>src/index.html</code> file. You also need to include Babel for component rendering.</p>
                        <CodeBlock code={`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MyProject</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  
  <!-- Add these lines -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="/path/to/hash8-ui.standalone.js"></script>
</head>
<body>
  <app-root></app-root>
</body>
</html>`} />
                    </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-muted text-sm font-bold font-mono">
                        03
                    </div>
                    <div className="flex-1 space-y-4">
                        <h3 className="mt-0">Allow Custom Elements</h3>
                        <p>
                            Angular defaults to throwing errors for unknown HTML tags. To use Hash8 components (like <code>&lt;H8Button&gt;</code>),
                            you need to add <code>CUSTOM_ELEMENTS_SCHEMA</code> to your module.
                        </p>
                        <p>In <code>src/app/app.module.ts</code>:</p>
                        <CodeBlock code={`import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})
export class AppModule { }`} />
                    </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-muted text-sm font-bold font-mono">
                        04
                    </div>
                    <div className="flex-1 space-y-4">
                        <h3 className="mt-0">Start using Hash8 Components</h3>
                        <p>You can now use any Hash8 component directly in your templates.</p>
                        <p>In <code>src/app/app.component.html</code>:</p>
                        <CodeBlock code={`<div class="p-10 space-y-4">
  <h1>Welcome to Angular + Hash8</h1>
  
  <H8Card>
    <H8CardHeader>
      <H8CardTitle>Notification</H8CardTitle>
      <H8CardDescription>You have a new message.</H8CardDescription>
    </H8CardHeader>
    <H8CardContent>
      <H8Button>Mark as Read</H8Button>
      <H8Badge variant="destructive" class="ml-2">Urgent</H8Badge>
    </H8CardContent>
  </H8Card>
</div>`} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AngularInstallation;
