import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Moon, Sun, Plus, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "@/components/demo/DashboardPreview";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const THEME_COLORS: Record<string, { primary: string; primaryForeground: string }> = {
  neutral: { primary: "0 0% 9%", primaryForeground: "0 0% 98%" },
  blue: { primary: "221.2 83.2% 53.3%", primaryForeground: "210 40% 98%" },
  green: { primary: "142.1 76.2% 36.3%", primaryForeground: "355.7 100% 97.3%" },
  orange: { primary: "24.6 95% 53.1%", primaryForeground: "60 9.1% 97.8%" },
  red: { primary: "0 84.2% 60.2%", primaryForeground: "0 0% 98%" },
  rose: { primary: "346.8 77.2% 49.8%", primaryForeground: "355.7 100% 97.3%" },
  violet: { primary: "262.1 83.3% 57.8%", primaryForeground: "210 40% 98%" },
  yellow: { primary: "47.9 95.8% 53.1%", primaryForeground: "26 83.3% 14.1%" },
};

const Index = () => {
  const [theme, setTheme] = useState("neutral");

  const themeStyle = theme !== "neutral"
    ? {
      "--primary": THEME_COLORS[theme].primary,
      "--primary-foreground": THEME_COLORS[theme].primaryForeground,
    } as React.CSSProperties
    : undefined;

  const handleReset = () => setTheme("neutral");

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
                to="/docs/components/accordion"
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
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container relative pb-10 pt-10 md:pt-20 lg:pt-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
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
                <Link to="/docs/components/accordion">View Components</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Tab Navigation + Theme Selector + Dashboard Preview */}
        <section className="container py-6 md:py-10">
          <div className="flex items-center justify-between  mb-4 pb-0">
            <nav className="flex items-center space-x-6 text-sm overflow-x-auto">
              <Link
                to="#"
                className="border-b-2 border-foreground pb-3 font-medium text-foreground"
              >
                Examples
              </Link>
              <Link
                to="#"
                className="pb-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="#"
                className="pb-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                Tasks
              </Link>
              <Link
                to="#"
                className="pb-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                Playground
              </Link>
              <Link
                to="#"
                className="pb-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                Authentication
              </Link>
              {/* <Link
                to="#"
                className="pb-3 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                RTL <span className="h-1.5 w-1.5 rounded-full bg-blue-500 inline-block" />
              </Link> */}
            </nav>
            <div className="hidden md:flex items-center gap-2 pb-3">
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger className="h-8 w-[120px] text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <div className="px-2 py-1.5 text-xs text-muted-foreground">Theme</div>
                  {Object.keys(THEME_COLORS).map((key) => (
                    <SelectItem key={key} value={key} className="text-sm capitalize">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleReset}
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

          <div style={themeStyle}>
            <DashboardPreview />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {/* Built by{" "}
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
            . */}
            Copyright © 2026 Hash8.io
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
