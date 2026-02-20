// @gv-tech/ui-core
//
// Shared component contracts for the GV Tech design system.
// Consumed by both ui-web and ui-native implementations.

// Accordion
export type {
  AccordionBaseProps,
  AccordionContentBaseProps,
  AccordionItemBaseProps,
  AccordionTriggerBaseProps,
} from './contracts/accordion';

// Alert
export type { AlertBaseProps, AlertDescriptionBaseProps, AlertTitleBaseProps } from './contracts/alert';

// Alert Dialog
export type {
  AlertDialogActionBaseProps,
  AlertDialogBaseProps,
  AlertDialogCancelBaseProps,
  AlertDialogContentBaseProps,
  AlertDialogDescriptionBaseProps,
  AlertDialogFooterBaseProps,
  AlertDialogHeaderBaseProps,
  AlertDialogTitleBaseProps,
  AlertDialogTriggerBaseProps,
} from './contracts/alert-dialog';

// Aspect Ratio
export type { AspectRatioBaseProps } from './contracts/aspect-ratio';

// Avatar
export type { AvatarBaseProps, AvatarFallbackBaseProps, AvatarImageBaseProps } from './contracts/avatar';

// Badge
export type { BadgeBaseProps } from './contracts/badge';

// Breadcrumb
export type {
  BreadcrumbBaseProps,
  BreadcrumbEllipsisBaseProps,
  BreadcrumbItemBaseProps,
  BreadcrumbLinkBaseProps,
  BreadcrumbListBaseProps,
  BreadcrumbPageBaseProps,
  BreadcrumbSeparatorBaseProps,
} from './contracts/breadcrumb';

// Button
export { buttonSizeValues, buttonVariantValues } from './contracts/button';
export type { ButtonBaseProps, ButtonSize, ButtonVariant } from './contracts/button';

// Calendar
export type { CalendarBaseProps } from './contracts/calendar';

// Card
export type { CardBaseProps, CardSubComponent } from './contracts/card';

// Carousel
export type {
  CarouselBaseProps,
  CarouselContentBaseProps,
  CarouselItemBaseProps,
  CarouselNextBaseProps,
  CarouselPreviousBaseProps,
} from './contracts/carousel';

// Chart
export type {
  ChartConfig,
  ChartContainerBaseProps,
  ChartLegendContentBaseProps,
  ChartTooltipContentBaseProps,
} from './contracts/chart';

// Checkbox
export type { CheckboxBaseProps } from './contracts/checkbox';

// Collapsible
export type {
  CollapsibleBaseProps,
  CollapsibleContentBaseProps,
  CollapsibleTriggerBaseProps,
} from './contracts/collapsible';

// Command
export type {
  CommandBaseProps,
  CommandEmptyBaseProps,
  CommandGroupBaseProps,
  CommandInputBaseProps,
  CommandItemBaseProps,
  CommandListBaseProps,
  CommandSeparatorBaseProps,
  CommandShortcutBaseProps,
} from './contracts/command';

// Context Menu
export type {
  ContextMenuBaseProps,
  ContextMenuCheckboxItemBaseProps,
  ContextMenuContentBaseProps,
  ContextMenuGroupBaseProps,
  ContextMenuItemBaseProps,
  ContextMenuLabelBaseProps,
  ContextMenuRadioGroupBaseProps,
  ContextMenuRadioItemBaseProps,
  ContextMenuSeparatorBaseProps,
  ContextMenuShortcutBaseProps,
  ContextMenuSubBaseProps,
  ContextMenuSubContentBaseProps,
  ContextMenuSubTriggerBaseProps,
  ContextMenuTriggerBaseProps,
} from './contracts/context-menu';

// Dialog
export type { DialogBaseProps, DialogContentBaseProps, DialogSubComponent } from './contracts/dialog';

// Drawer
export type {
  DrawerBaseProps,
  DrawerCloseBaseProps,
  DrawerContentBaseProps,
  DrawerDescriptionBaseProps,
  DrawerFooterBaseProps,
  DrawerHeaderBaseProps,
  DrawerTitleBaseProps,
  DrawerTriggerBaseProps,
} from './contracts/drawer';

// Dropdown Menu
export type {
  DropdownMenuBaseProps,
  DropdownMenuCheckboxItemBaseProps,
  DropdownMenuContentBaseProps,
  DropdownMenuGroupBaseProps,
  DropdownMenuItemBaseProps,
  DropdownMenuLabelBaseProps,
  DropdownMenuRadioGroupBaseProps,
  DropdownMenuRadioItemBaseProps,
  DropdownMenuSeparatorBaseProps,
  DropdownMenuShortcutBaseProps,
  DropdownMenuSubBaseProps,
  DropdownMenuSubContentBaseProps,
  DropdownMenuSubTriggerBaseProps,
  DropdownMenuTriggerBaseProps,
} from './contracts/dropdown-menu';

// Form
export type {
  FormBaseProps,
  FormControlBaseProps,
  FormDescriptionBaseProps,
  FormItemBaseProps,
  FormLabelBaseProps,
  FormMessageBaseProps,
} from './contracts/form';

// Hover Card
export type { HoverCardBaseProps, HoverCardContentBaseProps, HoverCardTriggerBaseProps } from './contracts/hover-card';

// Input
export type { InputBaseProps } from './contracts/input';

// Label
export type { LabelBaseProps } from './contracts/label';

// Menubar
export type {
  MenubarBaseProps,
  MenubarCheckboxItemBaseProps,
  MenubarContentBaseProps,
  MenubarItemBaseProps,
  MenubarLabelBaseProps,
  MenubarMenuBaseProps,
  MenubarRadioItemBaseProps,
  MenubarSeparatorBaseProps,
  MenubarShortcutBaseProps,
  MenubarSubBaseProps,
  MenubarSubContentBaseProps,
  MenubarSubTriggerBaseProps,
  MenubarTriggerBaseProps,
} from './contracts/menubar';

// Navigation Menu
export type {
  NavigationMenuBaseProps,
  NavigationMenuContentBaseProps,
  NavigationMenuIndicatorBaseProps,
  NavigationMenuItemBaseProps,
  NavigationMenuLinkBaseProps,
  NavigationMenuListBaseProps,
  NavigationMenuTriggerBaseProps,
  NavigationMenuViewportBaseProps,
} from './contracts/navigation-menu';

// Pagination
export type {
  PaginationBaseProps,
  PaginationContentBaseProps,
  PaginationEllipsisBaseProps,
  PaginationItemBaseProps,
  PaginationLinkBaseProps,
  PaginationNextBaseProps,
  PaginationPreviousBaseProps,
} from './contracts/pagination';

// Popover
export type {
  PopoverAnchorBaseProps,
  PopoverBaseProps,
  PopoverContentBaseProps,
  PopoverTriggerBaseProps,
} from './contracts/popover';

// Progress
export type { ProgressBaseProps } from './contracts/progress';

// Radio
export type { RadioGroupBaseProps, RadioGroupItemBaseProps } from './contracts/radio';

// Resizable
export type {
  ResizableHandleBaseProps,
  ResizablePanelBaseProps,
  ResizablePanelGroupBaseProps,
} from './contracts/resizable';

// Scroll Area
export type { ScrollAreaBaseProps, ScrollBarBaseProps } from './contracts/scroll-area';

// Search
export type { SearchBaseProps, SearchTriggerBaseProps } from './contracts/search';

// Select
export type {
  SelectBaseProps,
  SelectContentBaseProps,
  SelectGroupBaseProps,
  SelectItemBaseProps,
  SelectLabelBaseProps,
  SelectScrollDownButtonBaseProps,
  SelectScrollUpButtonBaseProps,
  SelectSeparatorBaseProps,
  SelectTriggerBaseProps,
  SelectValueBaseProps,
} from './contracts/select';

// Separator
export type { SeparatorBaseProps } from './contracts/separator';

// Sheet
export type {
  SheetBaseProps,
  SheetCloseBaseProps,
  SheetContentBaseProps,
  SheetDescriptionBaseProps,
  SheetFooterBaseProps,
  SheetHeaderBaseProps,
  SheetOverlayBaseProps,
  SheetPortalBaseProps,
  SheetTitleBaseProps,
  SheetTriggerBaseProps,
} from './contracts/sheet';

// Skeleton
export type { SkeletonBaseProps } from './contracts/skeleton';

// Slider
export type { SliderBaseProps } from './contracts/slider';

// Sonner
export type { SonnerBaseProps } from './contracts/sonner';

// Switch
export type { SwitchBaseProps } from './contracts/switch';

// Table
export type {
  TableBaseProps,
  TableBodyBaseProps,
  TableCaptionBaseProps,
  TableCellBaseProps,
  TableFooterBaseProps,
  TableHeadBaseProps,
  TableHeaderBaseProps,
  TableRowBaseProps,
} from './contracts/table';

// Tabs
export type { TabsBaseProps, TabsContentBaseProps, TabsListBaseProps, TabsTriggerBaseProps } from './contracts/tabs';

// Text
export { textVariantValues } from './contracts/text';
export type { TextBaseProps, TextVariant } from './contracts/text';

// Textarea
export type { TextareaBaseProps } from './contracts/textarea';

// Toggle
export { toggleVariantValues, toggleVariants } from './contracts/toggle';
export type { ToggleBaseProps, ToggleSize, ToggleVariant } from './contracts/toggle';

// Toggle Group
export type { ToggleGroupBaseProps, ToggleGroupItemBaseProps } from './contracts/toggle-group';

// Tooltip
export type {
  TooltipBaseProps,
  TooltipContentBaseProps,
  TooltipProviderBaseProps,
  TooltipTriggerBaseProps,
} from './contracts/tooltip';

// Toast
export { toastVariantValues } from './contracts/toast';
export type { ToastBaseProps, ToastVariant } from './contracts/toast';

// Theme Provider
export type { ThemeProviderBaseProps } from './contracts/theme-provider';

// Theme Toggle
export type { ThemeToggleBaseProps } from './contracts/theme-toggle';

// Toaster
export type { ToasterBaseProps } from './contracts/toaster';
