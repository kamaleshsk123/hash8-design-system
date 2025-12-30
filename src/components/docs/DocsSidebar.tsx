import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Dialog", href: "/docs/components/dialog" },
      { title: "Tooltip", href: "/docs/components/tooltip" },
    ],
  },
];

export function DocsSidebar() {
  const location = useLocation();

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
      <div className="h-full overflow-y-auto py-6 pr-6 lg:py-8">
        <nav className="grid gap-6">
          {navigation.map((section) => (
            <div key={section.title} className="grid gap-1">
              <h4 className="mb-1 px-2 text-sm font-semibold">{section.title}</h4>
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex w-full items-center rounded-md px-2 py-1.5 text-sm hover:bg-accent",
                    location.pathname === item.href
                      ? "bg-accent font-medium text-accent-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
