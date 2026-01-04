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
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './card';
export { Input } from './input';
export { Badge, badgeVariants } from './badge';
export { Avatar, AvatarImage, AvatarFallback } from './avatar';
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
