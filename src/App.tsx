import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/hash8-ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { DocsLayout } from "./components/docs/DocsLayout";
import DocsIntroduction from "./pages/docs/DocsIntroduction";
import DocsInstallation from "./pages/docs/DocsInstallation";
import AngularInstallation from "./pages/docs/frameworks/AngularInstallation";
import NextjsInstallation from "./pages/docs/frameworks/NextjsInstallation";
import LaravelInstallation from "./pages/docs/frameworks/LaravelInstallation";
import NuxtInstallation from "./pages/docs/frameworks/NuxtInstallation";
import RemixInstallation from "./pages/docs/frameworks/RemixInstallation";
import SvelteKitInstallation from "./pages/docs/frameworks/SvelteKitInstallation";
import ButtonDocs from "./pages/docs/components/ButtonDocs";
import CardDocs from "./pages/docs/components/CardDocs";
import InputDocs from "./pages/docs/components/InputDocs";
import BadgeDocs from "./pages/docs/components/BadgeDocs";
import AvatarDocs from "./pages/docs/components/AvatarDocs";
import DialogDocs from "./pages/docs/components/DialogDocs";
import TooltipDocs from "./pages/docs/components/TooltipDocs";
import AccordionDocs from "./pages/docs/components/AccordionDocs";
import BreadcrumbDocs from "./pages/docs/components/BreadcrumbDocs";
import DatePickerDocs from "./pages/docs/components/DatePickerDocs";
import TableDocs from "./pages/docs/components/TableDocs";
import HoverCardDocs from "./pages/docs/components/HoverCardDocs";
import AlertDocs from "./pages/docs/components/AlertDocs";
import CarouselDocs from "./pages/docs/components/CarouselDocs";
import CheckboxDocs from "./pages/docs/components/CheckboxDocs";
import CommandDocs from "./pages/docs/components/CommandDocs";
import ComboboxDocs from "./pages/docs/components/ComboboxDocs";

// ... existing imports


import CollapsibleDocs from "./pages/docs/components/CollapsibleDocs";
import SeparatorDocs from "./pages/docs/components/SeparatorDocs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<DocsIntroduction />} />
            <Route path="installation" element={<DocsInstallation />} />
            <Route path="installation/angular" element={<AngularInstallation />} />
            <Route path="installation/nextjs" element={<NextjsInstallation />} />
            <Route path="installation/laravel" element={<LaravelInstallation />} />
            <Route path="installation/nuxt" element={<NuxtInstallation />} />
            <Route path="installation/remix" element={<RemixInstallation />} />
            <Route path="installation/sveltekit" element={<SvelteKitInstallation />} />
            <Route path="components/accordion" element={<AccordionDocs />} />
            <Route path="components/alert" element={<AlertDocs />} />
            <Route path="components/carousel" element={<CarouselDocs />} />
            <Route path="components/checkbox" element={<CheckboxDocs />} />
            <Route path="components/combobox" element={<ComboboxDocs />} />
            <Route path="components/command" element={<CommandDocs />} />
            <Route path="components/collapsible" element={<CollapsibleDocs />} />
            <Route path="components/breadcrumb" element={<BreadcrumbDocs />} />
            <Route path="components/date-picker" element={<DatePickerDocs />} />
            <Route path="components/table" element={<TableDocs />} />
            <Route path="components/hover-card" element={<HoverCardDocs />} />
            <Route path="components/button" element={<ButtonDocs />} />
            <Route path="components/card" element={<CardDocs />} />
            <Route path="components/input" element={<InputDocs />} />
            <Route path="components/badge" element={<BadgeDocs />} />
            <Route path="components/avatar" element={<AvatarDocs />} />
            <Route path="components/dialog" element={<DialogDocs />} />
            <Route path="components/separator" element={<SeparatorDocs />} />
            <Route path="components/tooltip" element={<TooltipDocs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
