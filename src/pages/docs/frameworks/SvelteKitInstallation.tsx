import { CodeBlock } from "@/components/docs/CodeBlock";

const SvelteKitInstallation = () => {
    return (
        <div className="docs-prose">
            <h1>SvelteKit Installation</h1>
            <p className="text-xl text-muted-foreground">
                Use Hash8 UI components in SvelteKit via the Standalone CDN.
            </p>

            <div className="mt-8">
                <h3>1. Add Script to app.html</h3>
                <p>Include the script in your <code>src/app.html</code> file.</p>
                <CodeBlock code={`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<meta name="viewport" content="width=device-width" />
		<script src="https://unpkg.com/hash8-ui/dist-standalone/hash8-ui.standalone.js"></script>
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>`} />
            </div>

            <div className="mt-8">
                <h3>2. Use in Svelte Components</h3>
                <p>You use standard HTML syntax. Svelte naturally supports custom elements.</p>
                <CodeBlock code={`<script>
  let count = 0;
  function handleClick() {
    count += 1;
  }
</script>

<H8Card>
    <H8CardHeader>
        <H8CardTitle>Svelte Integration</H8CardTitle>
    </H8CardHeader>
    <H8CardContent>
         <p class="mb-4">Count is {count}</p>
         <H8Button on:click={handleClick}>Increment</H8Button>
    </H8CardContent>
</H8Card>`} />
            </div>
        </div>
    );
};

export default SvelteKitInstallation;
