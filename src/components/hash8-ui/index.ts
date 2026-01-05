/**
 * Hash8 UI Component Library
 * 
 * All components should be imported from this index file:
 * import { Button, Card, Input } from '@/components/hash8-ui'
 * 
 * Components wrap Radix UI primitives with Hash8 design tokens.
 * Apps should NOT import Radix directly.
 */

export { Button, Button as H8Button, buttonVariants } from './button';
export {
  Alert,
  Alert as H8Alert,
  AlertTitle,
  AlertTitle as H8AlertTitle,
  AlertDescription,
  AlertDescription as H8AlertDescription,
} from './alert';
export {
  Accordion,
  Accordion as H8Accordion,
  AccordionItem,
  AccordionItem as H8AccordionItem,
  AccordionTrigger,
  AccordionTrigger as H8AccordionTrigger,
  AccordionContent,
  AccordionContent as H8AccordionContent,
} from './accordion';
export {
  Breadcrumb,
  Breadcrumb as H8Breadcrumb,
  BreadcrumbList,
  BreadcrumbList as H8BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbItem as H8BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbLink as H8BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbPage as H8BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbSeparator as H8BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbEllipsis as H8BreadcrumbEllipsis,
} from './breadcrumb';
export {
  Calendar,
  Calendar as H8Calendar,
} from './calendar';
export {
  Popover,
  Popover as H8Popover,
  PopoverTrigger,
  PopoverTrigger as H8PopoverTrigger,
  PopoverContent,
  PopoverContent as H8PopoverContent,
} from './popover';
export {
  Card,
  Card as H8Card,
  CardHeader,
  CardHeader as H8CardHeader,
  CardFooter,
  CardFooter as H8CardFooter,
  CardTitle,
  CardTitle as H8CardTitle,
  CardDescription,
  CardDescription as H8CardDescription,
  CardContent,
  CardContent as H8CardContent
} from './card';
export { Input, Input as H8Input } from './input';
export { Label, Label as H8Label } from './label';
export { Badge, badgeVariants } from './badge';
export {
  Avatar,
  Avatar as H8Avatar,
  AvatarImage,
  AvatarImage as H8AvatarImage,
  AvatarFallback,
  AvatarFallback as H8AvatarFallback,
} from './avatar';
export {
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
} from './dialog';
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from './tooltip';
export {
  Table,
  Table as H8Table,
  TableHeader,
  TableHeader as H8TableHeader,
  TableBody,
  TableBody as H8TableBody,
  TableFooter,
  TableFooter as H8TableFooter,
  TableHead,
  TableHead as H8TableHead,
  TableRow,
  TableRow as H8TableRow,
  TableCell,
  TableCell as H8TableCell,
  TableCaption,
  TableCaption as H8TableCaption,
} from './table';
export {
  HoverCard,
  HoverCard as H8HoverCard,
  HoverCardTrigger,
  HoverCardTrigger as H8HoverCardTrigger,
  HoverCardContent,
  HoverCardContent as H8HoverCardContent,
} from './hover-card';
export {
  type CarouselApi,
  Carousel,
  Carousel as H8Carousel,
  CarouselContent,
  CarouselContent as H8CarouselContent,
  CarouselItem,
  CarouselItem as H8CarouselItem,
  CarouselPrevious,
  CarouselPrevious as H8CarouselPrevious,
  CarouselNext,
  CarouselNext as H8CarouselNext,
} from './carousel';
export {
  Collapsible,
  Collapsible as H8Collapsible,
  CollapsibleTrigger,
  CollapsibleTrigger as H8CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleContent as H8CollapsibleContent,
} from './collapsible';
export { Checkbox, Checkbox as H8Checkbox } from './checkbox';
