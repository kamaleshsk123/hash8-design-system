import { Link } from "react-router-dom";
import { Github, Search, Moon, Sun, Monitor, Command, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DashboardPreview } from "@/components/demo/DashboardPreview";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              <span className="hidden font-bold sm:inline-block">
                hash8/ui
              </span>
            </Link>
            <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
              <Link
                to="/docs"
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                Docs
              </Link>
              <Link
                to="/docs/components/button"
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                Components
              </Link>
              <Link
                to="#"
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                Blocks
              </Link>
              <Link
                to="#"
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                Charts
              </Link>
              <Link
                to="#"
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                Directory
              </Link>
              <Link
                to="#"
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                Create
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative inline-flex h-9 w-full items-center justify-start rounded-[0.5rem] border border-input bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm hover:bg-accent hover:text-accent-foreground sm:pr-12 md:w-64">
                <span className="hidden lg:inline-flex">Search documentation...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </div>
            <nav className="flex items-center space-x-2">
              <a
                href="https://github.com/hash8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              {/* <Button>New Project</Button> */}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container relative pb-10 pt-10 md:pt-20 lg:pt-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            {/* <Badge variant="secondary" className="mb-4 font-mono font-medium rounded-full px-4 py-1.5">
              ● npx shadcn create →
            </Badge> */}
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
              The Foundation for your <br className="hidden md:block" /> Design System
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              A set of beautifully designed components that you can customize, extend,
              and build on. Start here then make it your own. Open Source. Open Code.
            </p>
            <div className="flex gap-4 mt-6">
              <Button size="lg" className="h-12 px-8">
                <Plus className="mr-2 h-4 w-4" /> <Link to="/docs">View Docs</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8" asChild>
                <Link to="/docs/components/button">View Components</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Preview / Dashboard */}
        <section className="container py-8 md:py-12 lg:py-24">
          <DashboardPreview />
        </section>

        {/* Additional Sections matching the menu in the image can go here */}
        <section className="container py-8">
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <Link to="#" className="font-medium hover:text-foreground">Examples</Link>
            <Link to="#" className="font-medium text-foreground">Dashboard</Link>
            <Link to="#" className="font-medium hover:text-foreground">Tasks</Link>
            <Link to="#" className="font-medium hover:text-foreground">Playground</Link>
            <Link to="#" className="font-medium hover:text-foreground">Authentication</Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://hash8.dev"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Hash8
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/hash8"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
