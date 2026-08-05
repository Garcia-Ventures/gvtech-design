'use client';
// @gv-tech/ui-web
//
// Web (DOM/Radix) implementations of the GV Tech design system components.
// Each component satisfies the contracts defined in @gv-tech/ui-core.

// Utilities
export { cn } from './lib/utils';

// Accordion
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';

// Alert
export { Alert, AlertDescription, AlertTitle } from './alert';

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

// Aspect Ratio
export { AspectRatio } from './aspect-ratio';

// Avatar
export { Avatar, AvatarFallback, AvatarImage } from './avatar';

// Badge
export { Badge, badgeVariants } from './badge';

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

// Button
export { Button, buttonVariants } from './button';

// Calendar
export { Calendar, CalendarDayButton } from './calendar';

// Card
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

// Carousel
export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel';
export type { CarouselApi } from './carousel';

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

// Collapsible
export { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible';

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

// Form
export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField } from './form';

// Hover Card
export { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';

// Input
export { Input } from './input';

// Label
export { Label } from './label';

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

// Popover
export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from './popover';

// Progress
export { Progress } from './progress';

// Radio
export { RadioGroup, RadioGroupItem } from './radio-group';

// Resizable
export { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './resizable';

// Scroll Area
export { ScrollArea, ScrollBar } from './scroll-area';

// Scroll To Top
export { ScrollToTop } from './scroll-to-top';
export type { ScrollToTopProps } from './scroll-to-top';

// Support FAB
export { SupportFab } from './support-fab';
export type { SupportFabProps } from './support-fab';

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

// Separator
export { Separator } from './separator';

// Sheet
export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';

// Skeleton
export { Skeleton } from './skeleton';

// Slider
export { Slider } from './slider';

// Sonner
export { Toaster as SonnerToaster } from './sonner';

// Switch
export { Switch } from './switch';

// Table
export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './table';

// Tabs
export { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

// Text
export { Text, textVariants } from './text';
export type { TextProps } from './text';

// Textarea
export { Textarea } from './textarea';

// Toggle
export { Toggle, toggleVariants } from './toggle';

// Toggle Group
export { ToggleGroup, ToggleGroupItem } from './toggle-group';

// Tooltip
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

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

// Theme Hook
export { useTheme } from './hooks/use-theme';

// Toaster (Radix)
export type { ToasterBaseProps as ToasterProps } from '@gv-tech/ui-core';
export { toast, useToast } from './hooks/use-toast';
export { Toaster } from './toaster';

// Table Of Contents
export { TableOfContents } from './table-of-contents';
export type { TableOfContentsProps } from './table-of-contents';

// Button Group
export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants } from './button-group';

// Direction
export { DirectionProvider, useDirection } from './direction';

// Empty
export { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './empty';

// Spinner
export { Spinner } from './spinner';

// Field
export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from './field';

// Input Group
export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from './input-group';

// Native Select
export { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from './native-select';

// Kbd
export { Kbd, KbdGroup } from './kbd';

// Item
export {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from './item';

// Combobox
export {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
} from './combobox';

// Input OTP
export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './input-otp';

// Sidebar
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from './sidebar';
