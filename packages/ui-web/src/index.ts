// @gv-tech/ui-web
//
// Web (DOM/Radix) implementations of the GV Tech design system components.
// Each component satisfies the contracts defined in @gv-tech/ui-core.

// Utilities
export { cn } from './lib/utils';

// Accordion
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';
export type { AccordionProps } from './accordion';

// Alert
export { Alert, AlertDescription, AlertTitle } from './alert';
export type { AlertProps } from './alert';

// Alert Dialog
export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog';
export type { AlertDialogProps } from './alert-dialog';

// Aspect Ratio
export { AspectRatio } from './aspect-ratio';
export type { AspectRatioProps } from './aspect-ratio';

// Avatar
export { Avatar, AvatarFallback, AvatarImage } from './avatar';
export type { AvatarProps } from './avatar';

// Badge
export { Badge, badgeVariants } from './badge';
export type { BadgeProps } from './badge';

// Breadcrumb
export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './breadcrumb';
export type { BreadcrumbProps } from './breadcrumb';

// Button
export { Button, buttonVariants } from './button';
export type { ButtonProps } from './button';

// Calendar
export { Calendar, CalendarDayButton } from './calendar';
export type { CalendarProps } from './calendar';

// Card
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
export type { CardProps } from './card';

// Carousel
export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel';
export type { CarouselApi, CarouselProps } from './carousel';

// Chart
export {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from './chart';
export type { ChartConfig } from './chart';

// Checkbox
export { Checkbox } from './checkbox';
export type { CheckboxProps } from './checkbox';

// Collapsible
export { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible';
export type { CollapsibleContentProps, CollapsibleProps, CollapsibleTriggerProps } from './collapsible';

// Command
export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './command';
export type {
  CommandEmptyProps,
  CommandGroupProps,
  CommandInputProps,
  CommandItemProps,
  CommandListProps,
  CommandProps,
  CommandSeparatorProps,
  CommandShortcutProps,
} from './command';

// Context Menu
export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from './context-menu';
export type {
  ContextMenuCheckboxItemProps,
  ContextMenuContentProps,
  ContextMenuGroupProps,
  ContextMenuItemProps,
  ContextMenuLabelProps,
  ContextMenuProps,
  ContextMenuRadioGroupProps,
  ContextMenuRadioItemProps,
  ContextMenuSeparatorProps,
  ContextMenuShortcutProps,
  ContextMenuSubContentProps,
  ContextMenuSubProps,
  ContextMenuSubTriggerProps,
  ContextMenuTriggerProps,
} from './context-menu';

// Dialog
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from './dialog';

// Drawer
export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';
export type {
  DrawerCloseProps,
  DrawerContentProps,
  DrawerDescriptionProps,
  DrawerFooterProps,
  DrawerHeaderProps,
  DrawerProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from './drawer';

// Dropdown Menu
export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './dropdown-menu';
export type {
  DropdownMenuCheckboxItemProps,
  DropdownMenuContentProps,
  DropdownMenuGroupProps,
  DropdownMenuItemProps,
  DropdownMenuLabelProps,
  DropdownMenuProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps,
  DropdownMenuSeparatorProps,
  DropdownMenuShortcutProps,
  DropdownMenuSubContentProps,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuTriggerProps,
} from './dropdown-menu';

// Form
export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField } from './form';
export type { FormControlProps, FormDescriptionProps, FormItemProps, FormLabelProps, FormMessageProps } from './form';

// Hover Card
export { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';
export type { HoverCardContentProps, HoverCardProps, HoverCardTriggerProps } from './hover-card';

// Input
export { Input } from './input';
export type { InputProps } from './input';

// Label
export { Label } from './label';
export type { LabelProps } from './label';

// Menubar
export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from './menubar';
export type {
  MenubarCheckboxItemProps,
  MenubarContentProps,
  MenubarItemProps,
  MenubarLabelProps,
  MenubarMenuProps,
  MenubarProps,
  MenubarRadioItemProps,
  MenubarSeparatorProps,
  MenubarShortcutProps,
  MenubarSubContentProps,
  MenubarSubProps,
  MenubarSubTriggerProps,
  MenubarTriggerProps,
} from './menubar';

// Navigation Menu
export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from './navigation-menu';
export type {
  NavigationMenuContentProps,
  NavigationMenuIndicatorProps,
  NavigationMenuItemProps,
  NavigationMenuLinkProps,
  NavigationMenuListProps,
  NavigationMenuProps,
  NavigationMenuTriggerProps,
  NavigationMenuViewportProps,
} from './navigation-menu';

// Pagination
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './pagination';
export type {
  PaginationContentProps,
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationLinkProps,
  PaginationNextProps,
  PaginationPreviousProps,
  PaginationProps,
} from './pagination';

// Popover
export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from './popover';
export type { PopoverAnchorProps, PopoverContentProps, PopoverProps, PopoverTriggerProps } from './popover';

// Progress
export { Progress } from './progress';
export type { ProgressProps } from './progress';

// Radio
export { RadioGroup, RadioGroupItem } from './radio-group';
export type { RadioGroupItemProps, RadioGroupProps } from './radio-group';

// Resizable
export { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './resizable';
export type { ResizableHandleProps, ResizablePanelGroupProps, ResizablePanelProps } from './resizable';

// Scroll Area
export { ScrollArea, ScrollBar } from './scroll-area';
export type { ScrollAreaProps, ScrollBarProps } from './scroll-area';

// Search
export { Search, SearchTrigger } from './search';
export type { SearchProps, SearchTriggerProps } from './search';

// Select
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select';
export type {
  SelectContentProps,
  SelectGroupProps,
  SelectItemProps,
  SelectLabelProps,
  SelectProps,
  SelectScrollDownButtonProps,
  SelectScrollUpButtonProps,
  SelectSeparatorProps,
  SelectTriggerProps,
  SelectValueProps,
} from './select';

// Separator
export { Separator } from './separator';
export type { SeparatorProps } from './separator';

// Sheet
export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from './sheet';
export type {
  SheetCloseProps,
  SheetContentProps,
  SheetDescriptionProps,
  SheetFooterProps,
  SheetHeaderProps,
  SheetOverlayProps,
  SheetPortalProps,
  SheetProps,
  SheetTitleProps,
  SheetTriggerProps,
} from './sheet';

// Skeleton
export { Skeleton } from './skeleton';
export type { SkeletonProps } from './skeleton';

// Slider
export { Slider } from './slider';
export type { SliderProps } from './slider';

// Sonner
export { Toaster as SonnerToaster } from './sonner';
export type { ToasterProps as SonnerProps } from './sonner';

// Switch
export { Switch } from './switch';
export type { SwitchProps } from './switch';

// Table
export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './table';
export type {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFooterProps,
  TableHeadProps,
  TableHeaderProps,
  TableProps,
  TableRowProps,
} from './table';

// Tabs
export { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
export type { TabsContentProps, TabsListProps, TabsProps, TabsTriggerProps } from './tabs';

// Text
export { Text, textVariants } from './text';
export type { TextProps } from './text';

// Textarea
export { Textarea } from './textarea';
export type { TextareaProps } from './textarea';

// Toggle
export { Toggle, toggleVariants } from './toggle';
export type { ToggleProps } from './toggle';

// Toggle Group
export { ToggleGroup, ToggleGroupItem } from './toggle-group';
export type { ToggleGroupItemProps, ToggleGroupProps } from './toggle-group';

// Tooltip
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
export type { TooltipContentProps, TooltipProps, TooltipProviderProps, TooltipTriggerProps } from './tooltip';

// Toast
export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastActionElement,
  type ToastProps,
} from './toast';

// Theme Provider
export { ThemeProvider } from './theme-provider';
export type { ThemeProviderProps } from './theme-provider';

// Theme Toggle
export { ThemeToggle } from './theme-toggle';
export type { ThemeToggleProps } from './theme-toggle';

// Toaster (Radix)
export type { ToasterBaseProps as ToasterProps } from '@gv-tech/ui-core';
export { toast, useToast } from './hooks/use-toast';
export { Toaster } from './toaster';
