import { CodeBlock } from "@/components/docs/CodeBlock";

const LaravelInstallation = () => {
    return (
        <div className="docs-prose">
            <h1>Laravel Installation</h1>
            <p className="text-xl text-muted-foreground">
                Integrate Hash8 UI components into your Laravel application using our Standalone Bundle.
            </p>

            <div className="mt-8">
                <h3>1. Add the Bundle</h3>
                <p>In your main layout file (usually <code>resources/views/layouts/app.blade.php</code> or <code>check.blade.php</code>), add the standalone script.</p>
                <CodeBlock code={`<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- ... -->
    <script src="https://unpkg.com/hash8-ui/dist-standalone/hash8-ui.standalone.js"></script>
</head>
<body>
    @yield('content')
</body>
</html>`} />
            </div>

            <div className="mt-8">
                <h3>2. Use Components in Blade</h3>
                <p>You can now use Hash8 components directly in your Blade templates.</p>
                <CodeBlock code={`@extends('layouts.app')

@section('content')
    <div class="p-10">
        <H8Card>
            <H8CardHeader>
                <H8CardTitle>Welcome to Laravel</H8CardTitle>
                <H8CardDescription>Powered by Hash8 UI</H8CardDescription>
            </H8CardHeader>
            <H8CardContent>
                <H8Button>Click Me</H8Button>
            </H8CardContent>
        </H8Card>
    </div>
@endsection`} />
            </div>

            <div className="mt-8">
                <h3>3. Dynamic Content</h3>
                <p>Our auto-mount system ensures that even if you load HTML fragments via Livewire or AJAX, the components will initialize automatically.</p>
            </div>

        </div>
    );
};

export default LaravelInstallation;
