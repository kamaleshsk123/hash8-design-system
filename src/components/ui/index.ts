import "../../index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";

// Polyfill process
if (typeof window !== "undefined") {
    if (!window.process) {
        (window as any).process = { env: { NODE_ENV: "production" } };
    }
}

export { React, ReactDOM };

// --- Imports ---

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "./accordion";

import {
    AlertDialog,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
} from "./alert-dialog";

import {
    Alert,
    AlertTitle,
    AlertDescription,
} from "./alert";

import { AspectRatio } from "./aspect-ratio";

import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "./avatar";

import {
    Badge,
    badgeVariants,
} from "./badge";

import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
} from "./breadcrumb";

import {
    Button,
    buttonVariants,
} from "./button";

import { Calendar } from "./calendar";

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from "./card";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "./carousel";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
    ChartStyle,
} from "./chart";

import { Checkbox } from "./checkbox";

import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "./collapsible";

import {
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandShortcut,
    CommandSeparator,
} from "./command";

import {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuCheckboxItem,
    ContextMenuRadioItem,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuGroup,
    ContextMenuPortal,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuRadioGroup,
} from "./context-menu";

import {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from "./dialog";

import {
    Drawer,
    DrawerPortal,
    DrawerOverlay,
    DrawerTrigger,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
    DrawerDescription,
} from "./drawer";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
} from "./dropdown-menu";

import {
    useFormField,
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
} from "./form";

import {
    HoverCard,
    HoverCardTrigger,
    HoverCardContent,
} from "./hover-card";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator,
} from "./input-otp";

import { Input } from "./input";

import { Label } from "./label";

import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarLabel,
    MenubarCheckboxItem,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarPortal,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarGroup,
    MenubarSub,
    MenubarShortcut,
} from "./menubar";

import {
    navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
} from "./navigation-menu";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "./pagination";

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "./popover";

import { Progress } from "./progress";

import {
    RadioGroup,
    RadioGroupItem,
} from "./radio-group";

import {
    ResizablePanelGroup,
    ResizablePanel,
    ResizableHandle,
} from "./resizable";

import {
    ScrollArea,
    ScrollBar,
} from "./scroll-area";

import {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
} from "./select";

import { Separator } from "./separator";

import {
    Sheet,
    SheetPortal,
    SheetOverlay,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
} from "./sheet";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarTrigger,
    SidebarRail,
    SidebarInset,
    SidebarInput,
    SidebarSeparator,
    SidebarHeader,
    SidebarFooter,
} from "./sidebar";

import { Skeleton } from "./skeleton";

import { Slider } from "./slider";

import { Toaster as SonnerToaster } from "./sonner";

import { Switch } from "./switch";

import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
} from "./table";

import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "./tabs";

import { Textarea } from "./textarea";

import {
    ToastProvider,
    ToastViewport,
    Toast,
    ToastTitle,
    ToastDescription,
    ToastClose,
    ToastAction,
} from "./toast";

import { Toaster } from "./toaster";

import {
    ToggleGroup,
    ToggleGroupItem,
} from "./toggle-group";

import {
    Toggle,
    toggleVariants,
} from "./toggle";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "./tooltip";


// --- Exports (Aliased) ---

export {
    Accordion as H8Accordion,
    AccordionItem as H8AccordionItem,
    AccordionTrigger as H8AccordionTrigger,
    AccordionContent as H8AccordionContent,
};

export {
    AlertDialog as H8AlertDialog,
    AlertDialogPortal as H8AlertDialogPortal,
    AlertDialogOverlay as H8AlertDialogOverlay,
    AlertDialogTrigger as H8AlertDialogTrigger,
    AlertDialogContent as H8AlertDialogContent,
    AlertDialogHeader as H8AlertDialogHeader,
    AlertDialogFooter as H8AlertDialogFooter,
    AlertDialogTitle as H8AlertDialogTitle,
    AlertDialogDescription as H8AlertDialogDescription,
    AlertDialogAction as H8AlertDialogAction,
    AlertDialogCancel as H8AlertDialogCancel,
};

export {
    Alert as H8Alert,
    AlertTitle as H8AlertTitle,
    AlertDescription as H8AlertDescription,
};

export { AspectRatio as H8AspectRatio };

export {
    Avatar as H8Avatar,
    AvatarImage as H8AvatarImage,
    AvatarFallback as H8AvatarFallback,
};

export {
    Badge as H8Badge,
    badgeVariants as H8BadgeVariants,
};

export {
    Breadcrumb as H8Breadcrumb,
    BreadcrumbList as H8BreadcrumbList,
    BreadcrumbItem as H8BreadcrumbItem,
    BreadcrumbLink as H8BreadcrumbLink,
    BreadcrumbPage as H8BreadcrumbPage,
    BreadcrumbSeparator as H8BreadcrumbSeparator,
    BreadcrumbEllipsis as H8BreadcrumbEllipsis,
};

export {
    Button as H8Button,
    buttonVariants as H8ButtonVariants,
};

export { Calendar as H8Calendar };

export {
    Card as H8Card,
    CardHeader as H8CardHeader,
    CardFooter as H8CardFooter,
    CardTitle as H8CardTitle,
    CardDescription as H8CardDescription,
    CardContent as H8CardContent,
};

export {
    Carousel as H8Carousel,
    CarouselContent as H8CarouselContent,
    CarouselItem as H8CarouselItem,
    CarouselPrevious as H8CarouselPrevious,
    CarouselNext as H8CarouselNext,
};

export {
    ChartContainer as H8ChartContainer,
    ChartTooltip as H8ChartTooltip,
    ChartTooltipContent as H8ChartTooltipContent,
    ChartLegend as H8ChartLegend,
    ChartLegendContent as H8ChartLegendContent,
    ChartStyle as H8ChartStyle,
};

export { Checkbox as H8Checkbox };

export {
    Collapsible as H8Collapsible,
    CollapsibleTrigger as H8CollapsibleTrigger,
    CollapsibleContent as H8CollapsibleContent,
};

export {
    Command as H8Command,
    CommandDialog as H8CommandDialog,
    CommandInput as H8CommandInput,
    CommandList as H8CommandList,
    CommandEmpty as H8CommandEmpty,
    CommandGroup as H8CommandGroup,
    CommandItem as H8CommandItem,
    CommandShortcut as H8CommandShortcut,
    CommandSeparator as H8CommandSeparator,
};

export {
    ContextMenu as H8ContextMenu,
    ContextMenuTrigger as H8ContextMenuTrigger,
    ContextMenuContent as H8ContextMenuContent,
    ContextMenuItem as H8ContextMenuItem,
    ContextMenuCheckboxItem as H8ContextMenuCheckboxItem,
    ContextMenuRadioItem as H8ContextMenuRadioItem,
    ContextMenuLabel as H8ContextMenuLabel,
    ContextMenuSeparator as H8ContextMenuSeparator,
    ContextMenuShortcut as H8ContextMenuShortcut,
    ContextMenuGroup as H8ContextMenuGroup,
    ContextMenuPortal as H8ContextMenuPortal,
    ContextMenuSub as H8ContextMenuSub,
    ContextMenuSubContent as H8ContextMenuSubContent,
    ContextMenuSubTrigger as H8ContextMenuSubTrigger,
    ContextMenuRadioGroup as H8ContextMenuRadioGroup,
};

export {
    Dialog as H8Dialog,
    DialogPortal as H8DialogPortal,
    DialogOverlay as H8DialogOverlay,
    DialogClose as H8DialogClose,
    DialogTrigger as H8DialogTrigger,
    DialogContent as H8DialogContent,
    DialogHeader as H8DialogHeader,
    DialogFooter as H8DialogFooter,
    DialogTitle as H8DialogTitle,
    DialogDescription as H8DialogDescription,
};

export {
    Drawer as H8Drawer,
    DrawerPortal as H8DrawerPortal,
    DrawerOverlay as H8DrawerOverlay,
    DrawerTrigger as H8DrawerTrigger,
    DrawerClose as H8DrawerClose,
    DrawerContent as H8DrawerContent,
    DrawerHeader as H8DrawerHeader,
    DrawerFooter as H8DrawerFooter,
    DrawerTitle as H8DrawerTitle,
    DrawerDescription as H8DrawerDescription,
};

export {
    DropdownMenu as H8DropdownMenu,
    DropdownMenuTrigger as H8DropdownMenuTrigger,
    DropdownMenuContent as H8DropdownMenuContent,
    DropdownMenuItem as H8DropdownMenuItem,
    DropdownMenuCheckboxItem as H8DropdownMenuCheckboxItem,
    DropdownMenuRadioItem as H8DropdownMenuRadioItem,
    DropdownMenuLabel as H8DropdownMenuLabel,
    DropdownMenuSeparator as H8DropdownMenuSeparator,
    DropdownMenuShortcut as H8DropdownMenuShortcut,
    DropdownMenuGroup as H8DropdownMenuGroup,
    DropdownMenuPortal as H8DropdownMenuPortal,
    DropdownMenuSub as H8DropdownMenuSub,
    DropdownMenuSubContent as H8DropdownMenuSubContent,
    DropdownMenuSubTrigger as H8DropdownMenuSubTrigger,
    DropdownMenuRadioGroup as H8DropdownMenuRadioGroup,
};

export {
    useFormField as H8UseFormField,
    Form as H8Form,
    FormItem as H8FormItem,
    FormLabel as H8FormLabel,
    FormControl as H8FormControl,
    FormDescription as H8FormDescription,
    FormMessage as H8FormMessage,
    FormField as H8FormField,
};

export {
    HoverCard as H8HoverCard,
    HoverCardTrigger as H8HoverCardTrigger,
    HoverCardContent as H8HoverCardContent,
};

export {
    InputOTP as H8InputOTP,
    InputOTPGroup as H8InputOTPGroup,
    InputOTPSlot as H8InputOTPSlot,
    InputOTPSeparator as H8InputOTPSeparator,
};

export { Input as H8Input };

export { Label as H8Label };

export {
    Menubar as H8Menubar,
    MenubarMenu as H8MenubarMenu,
    MenubarTrigger as H8MenubarTrigger,
    MenubarContent as H8MenubarContent,
    MenubarItem as H8MenubarItem,
    MenubarSeparator as H8MenubarSeparator,
    MenubarLabel as H8MenubarLabel,
    MenubarCheckboxItem as H8MenubarCheckboxItem,
    MenubarRadioGroup as H8MenubarRadioGroup,
    MenubarRadioItem as H8MenubarRadioItem,
    MenubarPortal as H8MenubarPortal,
    MenubarSubContent as H8MenubarSubContent,
    MenubarSubTrigger as H8MenubarSubTrigger,
    MenubarGroup as H8MenubarGroup,
    MenubarSub as H8MenubarSub,
    MenubarShortcut as H8MenubarShortcut,
};

export {
    navigationMenuTriggerStyle as h8NavigationMenuTriggerStyle,
    NavigationMenu as H8NavigationMenu,
    NavigationMenuList as H8NavigationMenuList,
    NavigationMenuItem as H8NavigationMenuItem,
    NavigationMenuContent as H8NavigationMenuContent,
    NavigationMenuTrigger as H8NavigationMenuTrigger,
    NavigationMenuLink as H8NavigationMenuLink,
    NavigationMenuIndicator as H8NavigationMenuIndicator,
    NavigationMenuViewport as H8NavigationMenuViewport,
};

export {
    Pagination as H8Pagination,
    PaginationContent as H8PaginationContent,
    PaginationEllipsis as H8PaginationEllipsis,
    PaginationItem as H8PaginationItem,
    PaginationLink as H8PaginationLink,
    PaginationNext as H8PaginationNext,
    PaginationPrevious as H8PaginationPrevious,
};

export {
    Popover as H8Popover,
    PopoverTrigger as H8PopoverTrigger,
    PopoverContent as H8PopoverContent,
};

export { Progress as H8Progress };

export {
    RadioGroup as H8RadioGroup,
    RadioGroupItem as H8RadioGroupItem,
};

export {
    ResizablePanelGroup as H8ResizablePanelGroup,
    ResizablePanel as H8ResizablePanel,
    ResizableHandle as H8ResizableHandle,
};

export {
    ScrollArea as H8ScrollArea,
    ScrollBar as H8ScrollBar,
};

export {
    Select as H8Select,
    SelectGroup as H8SelectGroup,
    SelectValue as H8SelectValue,
    SelectTrigger as H8SelectTrigger,
    SelectContent as H8SelectContent,
    SelectLabel as H8SelectLabel,
    SelectItem as H8SelectItem,
    SelectSeparator as H8SelectSeparator,
    SelectScrollUpButton as H8SelectScrollUpButton,
    SelectScrollDownButton as H8SelectScrollDownButton,
};

export { Separator as H8Separator };

export {
    Sheet as H8Sheet,
    SheetPortal as H8SheetPortal,
    SheetOverlay as H8SheetOverlay,
    SheetTrigger as H8SheetTrigger,
    SheetClose as H8SheetClose,
    SheetContent as H8SheetContent,
    SheetHeader as H8SheetHeader,
    SheetFooter as H8SheetFooter,
    SheetTitle as H8SheetTitle,
    SheetDescription as H8SheetDescription,
};

export {
    Sidebar as H8Sidebar,
    SidebarContent as H8SidebarContent,
    SidebarGroup as H8SidebarGroup,
    SidebarGroupContent as H8SidebarGroupContent,
    SidebarGroupLabel as H8SidebarGroupLabel,
    SidebarMenu as H8SidebarMenu,
    SidebarMenuButton as H8SidebarMenuButton,
    SidebarMenuItem as H8SidebarMenuItem,
    SidebarMenuSub as H8SidebarMenuSub,
    SidebarMenuSubButton as H8SidebarMenuSubButton,
    SidebarMenuSubItem as H8SidebarMenuSubItem,
    SidebarProvider as H8SidebarProvider,
    SidebarTrigger as H8SidebarTrigger,
    SidebarRail as H8SidebarRail,
    SidebarInset as H8SidebarInset,
    SidebarInput as H8SidebarInput,
    SidebarSeparator as H8SidebarSeparator,
    SidebarHeader as H8SidebarHeader,
    SidebarFooter as H8SidebarFooter,
};

export { Skeleton as H8Skeleton };

export { Slider as H8Slider };

export { SonnerToaster as H8SonnerToaster };

export { Switch as H8Switch };

export {
    Table as H8Table,
    TableHeader as H8TableHeader,
    TableBody as H8TableBody,
    TableFooter as H8TableFooter,
    TableHead as H8TableHead,
    TableRow as H8TableRow,
    TableCell as H8TableCell,
    TableCaption as H8TableCaption,
};

export {
    Tabs as H8Tabs,
    TabsList as H8TabsList,
    TabsTrigger as H8TabsTrigger,
    TabsContent as H8TabsContent,
};

export { Textarea as H8Textarea };

export {
    ToastProvider as H8ToastProvider,
    ToastViewport as H8ToastViewport,
    Toast as H8Toast,
    ToastTitle as H8ToastTitle,
    ToastDescription as H8ToastDescription,
    ToastClose as H8ToastClose,
    ToastAction as H8ToastAction,
};

export { Toaster as H8Toaster };

export {
    ToggleGroup as H8ToggleGroup,
    ToggleGroupItem as H8ToggleGroupItem,
};

export {
    Toggle as H8Toggle,
    toggleVariants as H8ToggleVariants,
};

export {
    Tooltip as H8Tooltip,
    TooltipTrigger as H8TooltipTrigger,
    TooltipContent as H8TooltipContent,
    TooltipProvider as H8TooltipProvider,
};


// Auto-mount function for direct HTML usage
const autoMount = () => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    console.log("Hash8UI: Starting Auto-Mount...");

    const componentMap: Record<string, any> = {
        H8Accordion: Accordion,
        H8AccordionItem: AccordionItem,
        H8AccordionTrigger: AccordionTrigger,
        H8AccordionContent: AccordionContent,
        H8AlertDialog: AlertDialog,
        H8AlertDialogTrigger: AlertDialogTrigger,
        H8AlertDialogContent: AlertDialogContent,
        H8AlertDialogAction: AlertDialogAction,
        H8AlertDialogCancel: AlertDialogCancel,
        H8Alert: Alert,
        H8AlertTitle: AlertTitle,
        H8AlertDescription: AlertDescription,
        H8AspectRatio: AspectRatio,
        H8Avatar: Avatar,
        H8AvatarImage: AvatarImage,
        H8AvatarFallback: AvatarFallback,
        H8Badge: Badge,
        H8Button: Button,
        H8Card: Card,
        H8CardHeader: CardHeader,
        H8CardTitle: CardTitle,
        H8CardDescription: CardDescription,
        H8CardContent: CardContent,
        H8CardFooter: CardFooter,
        H8Checkbox: Checkbox,
        H8Dialog: Dialog,
        H8DialogTrigger: DialogTrigger,
        H8DialogContent: DialogContent,
        H8DialogTitle: DialogTitle,
        H8DialogDescription: DialogDescription,
        H8DialogFooter: DialogFooter,
        H8Input: Input,
        H8Label: Label,
        H8Progress: Progress,
        H8RadioGroup: RadioGroup,
        H8RadioGroupItem: RadioGroupItem,
        H8Select: Select,
        H8SelectTrigger: SelectTrigger,
        H8SelectValue: SelectValue,
        H8SelectContent: SelectContent,
        H8SelectItem: SelectItem,
        H8Separator: Separator,
        H8Skeleton: Skeleton,
        H8Slider: Slider,
        H8Switch: Switch,
        H8Table: Table,
        H8TableRow: TableRow,
        H8TableCell: TableCell,
        H8TableHead: TableHead,
        H8TableHeader: TableHeader,
        H8TableBody: TableBody,
        H8Tabs: Tabs,
        H8TabsList: TabsList,
        H8TabsTrigger: TabsTrigger,
        H8TabsContent: TabsContent,
        H8Textarea: Textarea,
        H8Tooltip: Tooltip,
        H8TooltipTrigger: TooltipTrigger,
        H8TooltipContent: TooltipContent,
        H8TooltipProvider: TooltipProvider
    };

    // Helper: Normalize tag names for matching
    // We will scan the DOM for elements that *somewhat* match our known components.

    // Strategy: Get ALL elements, check their tagName against our map (case-insensitive)
    const allElements = document.getElementsByTagName("*");

    Array.from(allElements).forEach((el) => {
        if (el.getAttribute('data-h8-mounted')) return;

        // Check if this element's tag matches any of our known components (case-insensitive)
        const matchedName = Object.keys(componentMap).find(key => key.toUpperCase() === el.tagName.toUpperCase());

        if (matchedName) {
            console.log(`Hash8UI: Mounting <${el.tagName}> as ${matchedName}`);
            el.setAttribute('data-h8-mounted', 'true');

            const Component = componentMap[matchedName];

            // 1. Gather Props
            const props: Record<string, any> = {};
            Array.from(el.attributes).forEach((attr) => {
                if (attr.name === 'data-h8-mounted') return;
                // Basic type conversions
                if (attr.value === "true") props[attr.name] = true;
                else if (attr.value === "false") props[attr.name] = false;
                else props[attr.name] = attr.value;
            });

            // 2. Handle Children (Text Content only for now to avoid complexity)
            // If the element has text content but we haven't passed children, use it.
            if (!props.children && el.textContent && el.textContent.trim().length > 0) {
                props.children = el.textContent;
            } else if (el.innerHTML.trim().length > 0) {
                // For now, simple text.
                props.children = el.textContent;
            }

            // 3. Mount
            const root = ReactDOM.createRoot(el);
            root.render(React.createElement(Component, props));
        }
    });

    console.log("Hash8UI: Auto-Mount Complete.");
};

// Boot up
if (typeof window !== "undefined") {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", autoMount);
    } else {
        setTimeout(autoMount, 0); // Defer to next tick to ensure parsing
    }
}
