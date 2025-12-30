import { Outlet } from "react-router-dom";
import { DocsHeader } from "./DocsHeader";
import { DocsSidebar } from "./DocsSidebar";

export function DocsLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <DocsHeader />
      <div className="container flex-1">
        <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <DocsSidebar />
          <main className="relative py-6 lg:gap-10 lg:py-8">
            <div className="mx-auto w-full min-w-0">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
