import * as React from 'react';

// These components and their base props are imported to verify that
// the platform-specific implementations correctly satisfy the ui-core contracts.
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  Calendar,
  Card,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ChartContainer,
  ChartLegendContent,
  ChartTooltipContent,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxClear,
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
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Dialog,
  DialogContent,
  DirectionProvider,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Empty,
  EmptyMedia,
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
  Form,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
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
  Kbd,
  KbdGroup,
  Label,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  ScrollToTop,
  Search,
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
  Separator,
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
  Skeleton,
  Slider,
  Spinner,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableOfContents,
  TableOfContentsContent,
  TableOfContentsList,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  Textarea,
  ThemeProvider,
  ThemeToggle,
  Toast,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './index';

import type {
  AccordionBaseProps,
  AccordionContentBaseProps,
  AccordionItemBaseProps,
  AccordionTriggerBaseProps,
  AlertBaseProps,
  AlertDescriptionBaseProps,
  AlertDialogActionBaseProps,
  AlertDialogBaseProps,
  AlertDialogCancelBaseProps,
  AlertDialogContentBaseProps,
  AlertDialogDescriptionBaseProps,
  AlertDialogFooterBaseProps,
  AlertDialogHeaderBaseProps,
  AlertDialogTitleBaseProps,
  AlertDialogTriggerBaseProps,
  AlertTitleBaseProps,
  AspectRatioBaseProps,
  AvatarBaseProps,
  AvatarFallbackBaseProps,
  AvatarImageBaseProps,
  BadgeBaseProps,
  BreadcrumbBaseProps,
  BreadcrumbEllipsisBaseProps,
  BreadcrumbItemBaseProps,
  BreadcrumbLinkBaseProps,
  BreadcrumbListBaseProps,
  BreadcrumbPageBaseProps,
  BreadcrumbSeparatorBaseProps,
  ButtonBaseProps,
  ButtonGroupBaseProps,
  ButtonGroupSeparatorBaseProps,
  ButtonGroupTextBaseProps,
  CalendarBaseProps,
  CardBaseProps,
  CarouselBaseProps,
  CarouselContentBaseProps,
  CarouselItemBaseProps,
  CarouselNextBaseProps,
  CarouselPreviousBaseProps,
  ChartContainerBaseProps,
  ChartLegendContentBaseProps,
  ChartTooltipContentBaseProps,
  CheckboxBaseProps,
  CollapsibleBaseProps,
  CollapsibleContentBaseProps,
  CollapsibleTriggerBaseProps,
  ComboboxChipBaseProps,
  ComboboxChipsBaseProps,
  ComboboxChipsInputBaseProps,
  ComboboxClearBaseProps,
  ComboboxCollectionBaseProps,
  ComboboxContentBaseProps,
  ComboboxEmptyBaseProps,
  ComboboxGroupBaseProps,
  ComboboxInputBaseProps,
  ComboboxItemBaseProps,
  ComboboxLabelBaseProps,
  ComboboxListBaseProps,
  ComboboxSeparatorBaseProps,
  ComboboxTriggerBaseProps,
  ComboboxValueBaseProps,
  CommandBaseProps,
  CommandEmptyBaseProps,
  CommandGroupBaseProps,
  CommandInputBaseProps,
  CommandItemBaseProps,
  CommandListBaseProps,
  CommandSeparatorBaseProps,
  CommandShortcutBaseProps,
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
  DialogBaseProps,
  DialogContentBaseProps,
  DirectionProviderBaseProps,
  DrawerBaseProps,
  DrawerCloseBaseProps,
  DrawerContentBaseProps,
  DrawerDescriptionBaseProps,
  DrawerFooterBaseProps,
  DrawerHeaderBaseProps,
  DrawerTitleBaseProps,
  DrawerTriggerBaseProps,
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
  EmptyBaseProps,
  EmptyMediaBaseProps,
  FieldBaseProps,
  FieldContentBaseProps,
  FieldDescriptionBaseProps,
  FieldErrorBaseProps,
  FieldGroupBaseProps,
  FieldLabelBaseProps,
  FieldLegendBaseProps,
  FieldSeparatorBaseProps,
  FieldSetBaseProps,
  FieldTitleBaseProps,
  FormBaseProps,
  FormDescriptionBaseProps,
  FormItemBaseProps,
  FormLabelBaseProps,
  FormMessageBaseProps,
  HoverCardBaseProps,
  HoverCardContentBaseProps,
  HoverCardTriggerBaseProps,
  InputBaseProps,
  InputGroupAddonBaseProps,
  InputGroupBaseProps,
  InputGroupButtonBaseProps,
  InputGroupInputBaseProps,
  InputGroupTextBaseProps,
  InputGroupTextareaBaseProps,
  InputOTPBaseProps,
  InputOTPGroupBaseProps,
  InputOTPSeparatorBaseProps,
  InputOTPSlotBaseProps,
  ItemActionsBaseProps,
  ItemBaseProps,
  ItemContentBaseProps,
  ItemDescriptionBaseProps,
  ItemFooterBaseProps,
  ItemGroupBaseProps,
  ItemHeaderBaseProps,
  ItemMediaBaseProps,
  ItemSeparatorBaseProps,
  ItemTitleBaseProps,
  KbdBaseProps,
  KbdGroupBaseProps,
  LabelBaseProps,
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
  NativeSelectBaseProps,
  NativeSelectOptGroupBaseProps,
  NativeSelectOptionBaseProps,
  NavigationMenuBaseProps,
  NavigationMenuContentBaseProps,
  NavigationMenuIndicatorBaseProps,
  NavigationMenuItemBaseProps,
  NavigationMenuLinkBaseProps,
  NavigationMenuListBaseProps,
  NavigationMenuTriggerBaseProps,
  NavigationMenuViewportBaseProps,
  PaginationBaseProps,
  PaginationContentBaseProps,
  PaginationEllipsisBaseProps,
  PaginationItemBaseProps,
  PaginationLinkBaseProps,
  PaginationNextBaseProps,
  PaginationPreviousBaseProps,
  PopoverAnchorBaseProps,
  PopoverBaseProps,
  PopoverContentBaseProps,
  PopoverTriggerBaseProps,
  ProgressBaseProps,
  RadioGroupBaseProps,
  RadioGroupItemBaseProps,
  ResizableHandleBaseProps,
  ResizablePanelBaseProps,
  ResizablePanelGroupBaseProps,
  ScrollAreaBaseProps,
  ScrollToTopBaseProps,
  SearchBaseProps,
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
  SeparatorBaseProps,
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
  SidebarBaseProps,
  SidebarContentBaseProps,
  SidebarFooterBaseProps,
  SidebarGroupActionBaseProps,
  SidebarGroupBaseProps,
  SidebarGroupContentBaseProps,
  SidebarGroupLabelBaseProps,
  SidebarHeaderBaseProps,
  SidebarInputBaseProps,
  SidebarInsetBaseProps,
  SidebarMenuActionBaseProps,
  SidebarMenuBadgeBaseProps,
  SidebarMenuBaseProps,
  SidebarMenuButtonBaseProps,
  SidebarMenuItemBaseProps,
  SidebarMenuSkeletonBaseProps,
  SidebarMenuSubBaseProps,
  SidebarMenuSubButtonBaseProps,
  SidebarMenuSubItemBaseProps,
  SidebarProviderBaseProps,
  SidebarRailBaseProps,
  SidebarSeparatorBaseProps,
  SidebarTriggerBaseProps,
  SkeletonBaseProps,
  SliderBaseProps,
  SpinnerBaseProps,
  SwitchBaseProps,
  TableBaseProps,
  TableBodyBaseProps,
  TableCaptionBaseProps,
  TableCellBaseProps,
  TableFooterBaseProps,
  TableHeadBaseProps,
  TableHeaderBaseProps,
  TableOfContentsBaseProps,
  TableOfContentsContentBaseProps,
  TableOfContentsListBaseProps,
  TableRowBaseProps,
  TabsBaseProps,
  TabsContentBaseProps,
  TabsListBaseProps,
  TabsTriggerBaseProps,
  TextBaseProps,
  TextareaBaseProps,
  ThemeProviderBaseProps,
  ThemeToggleBaseProps,
  ToastBaseProps,
  ToasterBaseProps,
  ToggleBaseProps,
  ToggleGroupBaseProps,
  ToggleGroupItemBaseProps,
  TooltipBaseProps,
  TooltipContentBaseProps,
  TooltipProviderBaseProps,
  TooltipTriggerBaseProps,
} from '@gv-tech/ui-core';

// This file is auto-generated by scripts/generate-contract-tests.ts
// Do not edit manually.
// It uses variable assignments to verify that implementations extend the base contracts.

export const _test_Accordion: AccordionBaseProps = {} as React.ComponentProps<typeof Accordion>;
export const _test_AccordionContent: AccordionContentBaseProps = {} as React.ComponentProps<typeof AccordionContent>;
export const _test_AccordionItem: AccordionItemBaseProps = {} as React.ComponentProps<typeof AccordionItem>;
export const _test_AccordionTrigger: AccordionTriggerBaseProps = {} as React.ComponentProps<typeof AccordionTrigger>;
export const _test_Alert: AlertBaseProps = {} as React.ComponentProps<typeof Alert>;
export const _test_AlertDescription: AlertDescriptionBaseProps = {} as React.ComponentProps<typeof AlertDescription>;
export const _test_AlertTitle: AlertTitleBaseProps = {} as React.ComponentProps<typeof AlertTitle>;
export const _test_AlertDialogAction: AlertDialogActionBaseProps = {} as React.ComponentProps<typeof AlertDialogAction>;
export const _test_AlertDialog: AlertDialogBaseProps = {} as React.ComponentProps<typeof AlertDialog>;
export const _test_AlertDialogCancel: AlertDialogCancelBaseProps = {} as React.ComponentProps<typeof AlertDialogCancel>;
export const _test_AlertDialogContent: AlertDialogContentBaseProps = {} as React.ComponentProps<
  typeof AlertDialogContent
>;
export const _test_AlertDialogDescription: AlertDialogDescriptionBaseProps = {} as React.ComponentProps<
  typeof AlertDialogDescription
>;
export const _test_AlertDialogFooter: AlertDialogFooterBaseProps = {} as React.ComponentProps<typeof AlertDialogFooter>;
export const _test_AlertDialogHeader: AlertDialogHeaderBaseProps = {} as React.ComponentProps<typeof AlertDialogHeader>;
export const _test_AlertDialogTitle: AlertDialogTitleBaseProps = {} as React.ComponentProps<typeof AlertDialogTitle>;
export const _test_AlertDialogTrigger: AlertDialogTriggerBaseProps = {} as React.ComponentProps<
  typeof AlertDialogTrigger
>;
export const _test_AspectRatio: AspectRatioBaseProps = {} as React.ComponentProps<typeof AspectRatio>;
export const _test_Avatar: AvatarBaseProps = {} as React.ComponentProps<typeof Avatar>;
export const _test_AvatarFallback: AvatarFallbackBaseProps = {} as React.ComponentProps<typeof AvatarFallback>;
export const _test_AvatarImage: AvatarImageBaseProps = {} as React.ComponentProps<typeof AvatarImage>;
export const _test_Badge: BadgeBaseProps = {} as React.ComponentProps<typeof Badge>;
export const _test_Breadcrumb: BreadcrumbBaseProps = {} as React.ComponentProps<typeof Breadcrumb>;
export const _test_BreadcrumbEllipsis: BreadcrumbEllipsisBaseProps = {} as React.ComponentProps<
  typeof BreadcrumbEllipsis
>;
export const _test_BreadcrumbItem: BreadcrumbItemBaseProps = {} as React.ComponentProps<typeof BreadcrumbItem>;
export const _test_BreadcrumbLink: BreadcrumbLinkBaseProps = {} as React.ComponentProps<typeof BreadcrumbLink>;
export const _test_BreadcrumbList: BreadcrumbListBaseProps = {} as React.ComponentProps<typeof BreadcrumbList>;
export const _test_BreadcrumbPage: BreadcrumbPageBaseProps = {} as React.ComponentProps<typeof BreadcrumbPage>;
export const _test_BreadcrumbSeparator: BreadcrumbSeparatorBaseProps = {} as React.ComponentProps<
  typeof BreadcrumbSeparator
>;
export const _test_Button: ButtonBaseProps = {} as React.ComponentProps<typeof Button>;
export const _test_Calendar: CalendarBaseProps = {} as React.ComponentProps<typeof Calendar>;
export const _test_Card: CardBaseProps = {} as React.ComponentProps<typeof Card>;
export const _test_Carousel: CarouselBaseProps = {} as React.ComponentProps<typeof Carousel>;
export const _test_CarouselContent: CarouselContentBaseProps = {} as React.ComponentProps<typeof CarouselContent>;
export const _test_CarouselItem: CarouselItemBaseProps = {} as React.ComponentProps<typeof CarouselItem>;
export const _test_CarouselNext: CarouselNextBaseProps = {} as React.ComponentProps<typeof CarouselNext>;
export const _test_CarouselPrevious: CarouselPreviousBaseProps = {} as React.ComponentProps<typeof CarouselPrevious>;
export const _test_ChartContainer: ChartContainerBaseProps = {} as React.ComponentProps<typeof ChartContainer>;
export const _test_ChartLegendContent: ChartLegendContentBaseProps = {} as React.ComponentProps<
  typeof ChartLegendContent
>;
export const _test_ChartTooltipContent: ChartTooltipContentBaseProps = {} as React.ComponentProps<
  typeof ChartTooltipContent
>;
export const _test_Checkbox: CheckboxBaseProps = {} as React.ComponentProps<typeof Checkbox>;
export const _test_Collapsible: CollapsibleBaseProps = {} as React.ComponentProps<typeof Collapsible>;
export const _test_CollapsibleContent: CollapsibleContentBaseProps = {} as React.ComponentProps<
  typeof CollapsibleContent
>;
export const _test_CollapsibleTrigger: CollapsibleTriggerBaseProps = {} as React.ComponentProps<
  typeof CollapsibleTrigger
>;
export const _test_Command: CommandBaseProps = {} as React.ComponentProps<typeof Command>;
export const _test_CommandEmpty: CommandEmptyBaseProps = {} as React.ComponentProps<typeof CommandEmpty>;
export const _test_CommandGroup: CommandGroupBaseProps = {} as React.ComponentProps<typeof CommandGroup>;
export const _test_CommandInput: CommandInputBaseProps = {} as React.ComponentProps<typeof CommandInput>;
export const _test_CommandItem: CommandItemBaseProps = {} as React.ComponentProps<typeof CommandItem>;
export const _test_CommandList: CommandListBaseProps = {} as React.ComponentProps<typeof CommandList>;
export const _test_CommandSeparator: CommandSeparatorBaseProps = {} as React.ComponentProps<typeof CommandSeparator>;
export const _test_CommandShortcut: CommandShortcutBaseProps = {} as React.ComponentProps<typeof CommandShortcut>;
export const _test_ContextMenu: ContextMenuBaseProps = {} as React.ComponentProps<typeof ContextMenu>;
export const _test_ContextMenuCheckboxItem: ContextMenuCheckboxItemBaseProps = {} as React.ComponentProps<
  typeof ContextMenuCheckboxItem
>;
export const _test_ContextMenuContent: ContextMenuContentBaseProps = {} as React.ComponentProps<
  typeof ContextMenuContent
>;
export const _test_ContextMenuGroup: ContextMenuGroupBaseProps = {} as React.ComponentProps<typeof ContextMenuGroup>;
export const _test_ContextMenuItem: ContextMenuItemBaseProps = {} as React.ComponentProps<typeof ContextMenuItem>;
export const _test_ContextMenuLabel: ContextMenuLabelBaseProps = {} as React.ComponentProps<typeof ContextMenuLabel>;
export const _test_ContextMenuRadioGroup: ContextMenuRadioGroupBaseProps = {} as React.ComponentProps<
  typeof ContextMenuRadioGroup
>;
export const _test_ContextMenuRadioItem: ContextMenuRadioItemBaseProps = {} as React.ComponentProps<
  typeof ContextMenuRadioItem
>;
export const _test_ContextMenuSeparator: ContextMenuSeparatorBaseProps = {} as React.ComponentProps<
  typeof ContextMenuSeparator
>;
export const _test_ContextMenuShortcut: ContextMenuShortcutBaseProps = {} as React.ComponentProps<
  typeof ContextMenuShortcut
>;
export const _test_ContextMenuSub: ContextMenuSubBaseProps = {} as React.ComponentProps<typeof ContextMenuSub>;
export const _test_ContextMenuSubContent: ContextMenuSubContentBaseProps = {} as React.ComponentProps<
  typeof ContextMenuSubContent
>;
export const _test_ContextMenuSubTrigger: ContextMenuSubTriggerBaseProps = {} as React.ComponentProps<
  typeof ContextMenuSubTrigger
>;
export const _test_ContextMenuTrigger: ContextMenuTriggerBaseProps = {} as React.ComponentProps<
  typeof ContextMenuTrigger
>;
export const _test_Dialog: DialogBaseProps = {} as React.ComponentProps<typeof Dialog>;
export const _test_DialogContent: DialogContentBaseProps = {} as React.ComponentProps<typeof DialogContent>;
export const _test_Drawer: DrawerBaseProps = {} as React.ComponentProps<typeof Drawer>;
export const _test_DrawerClose: DrawerCloseBaseProps = {} as React.ComponentProps<typeof DrawerClose>;
export const _test_DrawerContent: DrawerContentBaseProps = {} as React.ComponentProps<typeof DrawerContent>;
export const _test_DrawerDescription: DrawerDescriptionBaseProps = {} as React.ComponentProps<typeof DrawerDescription>;
export const _test_DrawerFooter: DrawerFooterBaseProps = {} as React.ComponentProps<typeof DrawerFooter>;
export const _test_DrawerHeader: DrawerHeaderBaseProps = {} as React.ComponentProps<typeof DrawerHeader>;
export const _test_DrawerTitle: DrawerTitleBaseProps = {} as React.ComponentProps<typeof DrawerTitle>;
export const _test_DrawerTrigger: DrawerTriggerBaseProps = {} as React.ComponentProps<typeof DrawerTrigger>;
export const _test_DropdownMenu: DropdownMenuBaseProps = {} as React.ComponentProps<typeof DropdownMenu>;
export const _test_DropdownMenuCheckboxItem: DropdownMenuCheckboxItemBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuCheckboxItem
>;
export const _test_DropdownMenuContent: DropdownMenuContentBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuContent
>;
export const _test_DropdownMenuGroup: DropdownMenuGroupBaseProps = {} as React.ComponentProps<typeof DropdownMenuGroup>;
export const _test_DropdownMenuItem: DropdownMenuItemBaseProps = {} as React.ComponentProps<typeof DropdownMenuItem>;
export const _test_DropdownMenuLabel: DropdownMenuLabelBaseProps = {} as React.ComponentProps<typeof DropdownMenuLabel>;
export const _test_DropdownMenuRadioGroup: DropdownMenuRadioGroupBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuRadioGroup
>;
export const _test_DropdownMenuRadioItem: DropdownMenuRadioItemBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuRadioItem
>;
export const _test_DropdownMenuSeparator: DropdownMenuSeparatorBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuSeparator
>;
export const _test_DropdownMenuShortcut: DropdownMenuShortcutBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuShortcut
>;
export const _test_DropdownMenuSub: DropdownMenuSubBaseProps = {} as React.ComponentProps<typeof DropdownMenuSub>;
export const _test_DropdownMenuSubContent: DropdownMenuSubContentBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuSubContent
>;
export const _test_DropdownMenuSubTrigger: DropdownMenuSubTriggerBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuSubTrigger
>;
export const _test_DropdownMenuTrigger: DropdownMenuTriggerBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuTrigger
>;
export const _test_Form: FormBaseProps = {} as React.ComponentProps<typeof Form>;
export const _test_FormDescription: FormDescriptionBaseProps = {} as React.ComponentProps<typeof FormDescription>;
export const _test_FormItem: FormItemBaseProps = {} as React.ComponentProps<typeof FormItem>;
export const _test_FormLabel: FormLabelBaseProps = {} as React.ComponentProps<typeof FormLabel>;
export const _test_FormMessage: FormMessageBaseProps = {} as React.ComponentProps<typeof FormMessage>;
export const _test_HoverCard: HoverCardBaseProps = {} as React.ComponentProps<typeof HoverCard>;
export const _test_HoverCardContent: HoverCardContentBaseProps = {} as React.ComponentProps<typeof HoverCardContent>;
export const _test_HoverCardTrigger: HoverCardTriggerBaseProps = {} as React.ComponentProps<typeof HoverCardTrigger>;
export const _test_Input: InputBaseProps = {} as React.ComponentProps<typeof Input>;
export const _test_Label: LabelBaseProps = {} as React.ComponentProps<typeof Label>;
export const _test_Menubar: MenubarBaseProps = {} as React.ComponentProps<typeof Menubar>;
export const _test_MenubarCheckboxItem: MenubarCheckboxItemBaseProps = {} as React.ComponentProps<
  typeof MenubarCheckboxItem
>;
export const _test_MenubarContent: MenubarContentBaseProps = {} as React.ComponentProps<typeof MenubarContent>;
export const _test_MenubarItem: MenubarItemBaseProps = {} as React.ComponentProps<typeof MenubarItem>;
export const _test_MenubarLabel: MenubarLabelBaseProps = {} as React.ComponentProps<typeof MenubarLabel>;
export const _test_MenubarMenu: MenubarMenuBaseProps = {} as React.ComponentProps<typeof MenubarMenu>;
export const _test_MenubarRadioItem: MenubarRadioItemBaseProps = {} as React.ComponentProps<typeof MenubarRadioItem>;
export const _test_MenubarSeparator: MenubarSeparatorBaseProps = {} as React.ComponentProps<typeof MenubarSeparator>;
export const _test_MenubarShortcut: MenubarShortcutBaseProps = {} as React.ComponentProps<typeof MenubarShortcut>;
export const _test_MenubarSub: MenubarSubBaseProps = {} as React.ComponentProps<typeof MenubarSub>;
export const _test_MenubarSubContent: MenubarSubContentBaseProps = {} as React.ComponentProps<typeof MenubarSubContent>;
export const _test_MenubarSubTrigger: MenubarSubTriggerBaseProps = {} as React.ComponentProps<typeof MenubarSubTrigger>;
export const _test_MenubarTrigger: MenubarTriggerBaseProps = {} as React.ComponentProps<typeof MenubarTrigger>;
export const _test_NavigationMenu: NavigationMenuBaseProps = {} as React.ComponentProps<typeof NavigationMenu>;
export const _test_NavigationMenuContent: NavigationMenuContentBaseProps = {} as React.ComponentProps<
  typeof NavigationMenuContent
>;
export const _test_NavigationMenuIndicator: NavigationMenuIndicatorBaseProps = {} as React.ComponentProps<
  typeof NavigationMenuIndicator
>;
export const _test_NavigationMenuItem: NavigationMenuItemBaseProps = {} as React.ComponentProps<
  typeof NavigationMenuItem
>;
export const _test_NavigationMenuLink: NavigationMenuLinkBaseProps = {} as React.ComponentProps<
  typeof NavigationMenuLink
>;
export const _test_NavigationMenuList: NavigationMenuListBaseProps = {} as React.ComponentProps<
  typeof NavigationMenuList
>;
export const _test_NavigationMenuTrigger: NavigationMenuTriggerBaseProps = {} as React.ComponentProps<
  typeof NavigationMenuTrigger
>;
export const _test_NavigationMenuViewport: NavigationMenuViewportBaseProps = {} as React.ComponentProps<
  typeof NavigationMenuViewport
>;
export const _test_Pagination: PaginationBaseProps = {} as React.ComponentProps<typeof Pagination>;
export const _test_PaginationContent: PaginationContentBaseProps = {} as React.ComponentProps<typeof PaginationContent>;
export const _test_PaginationEllipsis: PaginationEllipsisBaseProps = {} as React.ComponentProps<
  typeof PaginationEllipsis
>;
export const _test_PaginationItem: PaginationItemBaseProps = {} as React.ComponentProps<typeof PaginationItem>;
export const _test_PaginationLink: PaginationLinkBaseProps = {} as React.ComponentProps<typeof PaginationLink>;
export const _test_PaginationNext: PaginationNextBaseProps = {} as React.ComponentProps<typeof PaginationNext>;
export const _test_PaginationPrevious: PaginationPreviousBaseProps = {} as React.ComponentProps<
  typeof PaginationPrevious
>;
export const _test_PopoverAnchor: PopoverAnchorBaseProps = {} as React.ComponentProps<typeof PopoverAnchor>;
export const _test_Popover: PopoverBaseProps = {} as React.ComponentProps<typeof Popover>;
export const _test_PopoverContent: PopoverContentBaseProps = {} as React.ComponentProps<typeof PopoverContent>;
export const _test_PopoverTrigger: PopoverTriggerBaseProps = {} as React.ComponentProps<typeof PopoverTrigger>;
export const _test_Progress: ProgressBaseProps = {} as React.ComponentProps<typeof Progress>;
export const _test_RadioGroup: RadioGroupBaseProps = {} as React.ComponentProps<typeof RadioGroup>;
export const _test_RadioGroupItem: RadioGroupItemBaseProps = {} as React.ComponentProps<typeof RadioGroupItem>;
export const _test_ResizableHandle: ResizableHandleBaseProps = {} as React.ComponentProps<typeof ResizableHandle>;
export const _test_ResizablePanel: ResizablePanelBaseProps = {} as React.ComponentProps<typeof ResizablePanel>;
export const _test_ResizablePanelGroup: ResizablePanelGroupBaseProps = {} as React.ComponentProps<
  typeof ResizablePanelGroup
>;
export const _test_ScrollArea: ScrollAreaBaseProps = {} as React.ComponentProps<typeof ScrollArea>;
export const _test_ScrollToTop: ScrollToTopBaseProps = {} as React.ComponentProps<typeof ScrollToTop>;
export const _test_Search: SearchBaseProps = {} as React.ComponentProps<typeof Search>;
export const _test_Select: SelectBaseProps = {} as React.ComponentProps<typeof Select>;
export const _test_SelectContent: SelectContentBaseProps = {} as React.ComponentProps<typeof SelectContent>;
export const _test_SelectGroup: SelectGroupBaseProps = {} as React.ComponentProps<typeof SelectGroup>;
export const _test_SelectItem: SelectItemBaseProps = {} as React.ComponentProps<typeof SelectItem>;
export const _test_SelectLabel: SelectLabelBaseProps = {} as React.ComponentProps<typeof SelectLabel>;
export const _test_SelectScrollDownButton: SelectScrollDownButtonBaseProps = {} as React.ComponentProps<
  typeof SelectScrollDownButton
>;
export const _test_SelectScrollUpButton: SelectScrollUpButtonBaseProps = {} as React.ComponentProps<
  typeof SelectScrollUpButton
>;
export const _test_SelectSeparator: SelectSeparatorBaseProps = {} as React.ComponentProps<typeof SelectSeparator>;
export const _test_SelectTrigger: SelectTriggerBaseProps = {} as React.ComponentProps<typeof SelectTrigger>;
export const _test_SelectValue: SelectValueBaseProps = {} as React.ComponentProps<typeof SelectValue>;
export const _test_Separator: SeparatorBaseProps = {} as React.ComponentProps<typeof Separator>;
export const _test_Sheet: SheetBaseProps = {} as React.ComponentProps<typeof Sheet>;
export const _test_SheetClose: SheetCloseBaseProps = {} as React.ComponentProps<typeof SheetClose>;
export const _test_SheetContent: SheetContentBaseProps = {} as React.ComponentProps<typeof SheetContent>;
export const _test_SheetDescription: SheetDescriptionBaseProps = {} as React.ComponentProps<typeof SheetDescription>;
export const _test_SheetFooter: SheetFooterBaseProps = {} as React.ComponentProps<typeof SheetFooter>;
export const _test_SheetHeader: SheetHeaderBaseProps = {} as React.ComponentProps<typeof SheetHeader>;
export const _test_SheetOverlay: SheetOverlayBaseProps = {} as React.ComponentProps<typeof SheetOverlay>;
export const _test_SheetPortal: SheetPortalBaseProps = {} as React.ComponentProps<typeof SheetPortal>;
export const _test_SheetTitle: SheetTitleBaseProps = {} as React.ComponentProps<typeof SheetTitle>;
export const _test_SheetTrigger: SheetTriggerBaseProps = {} as React.ComponentProps<typeof SheetTrigger>;
export const _test_Skeleton: SkeletonBaseProps = {} as React.ComponentProps<typeof Skeleton>;
export const _test_Slider: SliderBaseProps = {} as React.ComponentProps<typeof Slider>;
export const _test_Switch: SwitchBaseProps = {} as React.ComponentProps<typeof Switch>;
export const _test_Table: TableBaseProps = {} as React.ComponentProps<typeof Table>;
export const _test_TableBody: TableBodyBaseProps = {} as React.ComponentProps<typeof TableBody>;
export const _test_TableCaption: TableCaptionBaseProps = {} as React.ComponentProps<typeof TableCaption>;
export const _test_TableCell: TableCellBaseProps = {} as React.ComponentProps<typeof TableCell>;
export const _test_TableFooter: TableFooterBaseProps = {} as React.ComponentProps<typeof TableFooter>;
export const _test_TableHead: TableHeadBaseProps = {} as React.ComponentProps<typeof TableHead>;
export const _test_TableHeader: TableHeaderBaseProps = {} as React.ComponentProps<typeof TableHeader>;
export const _test_TableRow: TableRowBaseProps = {} as React.ComponentProps<typeof TableRow>;
export const _test_Tabs: TabsBaseProps = {} as React.ComponentProps<typeof Tabs>;
export const _test_TabsContent: TabsContentBaseProps = {} as React.ComponentProps<typeof TabsContent>;
export const _test_TabsList: TabsListBaseProps = {} as React.ComponentProps<typeof TabsList>;
export const _test_TabsTrigger: TabsTriggerBaseProps = {} as React.ComponentProps<typeof TabsTrigger>;
export const _test_Text: TextBaseProps = {} as React.ComponentProps<typeof Text>;
export const _test_Textarea: TextareaBaseProps = {} as React.ComponentProps<typeof Textarea>;
export const _test_Toggle: ToggleBaseProps = {} as React.ComponentProps<typeof Toggle>;
export const _test_ToggleGroup: ToggleGroupBaseProps = {} as React.ComponentProps<typeof ToggleGroup>;
export const _test_ToggleGroupItem: ToggleGroupItemBaseProps = {} as React.ComponentProps<typeof ToggleGroupItem>;
export const _test_Tooltip: TooltipBaseProps = {} as React.ComponentProps<typeof Tooltip>;
export const _test_TooltipContent: TooltipContentBaseProps = {} as React.ComponentProps<typeof TooltipContent>;
export const _test_TooltipProvider: TooltipProviderBaseProps = {} as React.ComponentProps<typeof TooltipProvider>;
export const _test_TooltipTrigger: TooltipTriggerBaseProps = {} as React.ComponentProps<typeof TooltipTrigger>;
export const _test_Toast: ToastBaseProps = {} as React.ComponentProps<typeof Toast>;
export const _test_ThemeProvider: ThemeProviderBaseProps = {} as React.ComponentProps<typeof ThemeProvider>;
export const _test_ThemeToggle: ThemeToggleBaseProps = {} as React.ComponentProps<typeof ThemeToggle>;
export const _test_Toaster: ToasterBaseProps = {} as React.ComponentProps<typeof Toaster>;
export const _test_TableOfContents: TableOfContentsBaseProps = {} as React.ComponentProps<typeof TableOfContents>;
export const _test_TableOfContentsContent: TableOfContentsContentBaseProps = {} as React.ComponentProps<
  typeof TableOfContentsContent
>;
export const _test_TableOfContentsList: TableOfContentsListBaseProps = {} as React.ComponentProps<
  typeof TableOfContentsList
>;
export const _test_ButtonGroup: ButtonGroupBaseProps = {} as React.ComponentProps<typeof ButtonGroup>;
export const _test_ButtonGroupSeparator: ButtonGroupSeparatorBaseProps = {} as React.ComponentProps<
  typeof ButtonGroupSeparator
>;
export const _test_ButtonGroupText: ButtonGroupTextBaseProps = {} as React.ComponentProps<typeof ButtonGroupText>;
export const _test_DirectionProvider: DirectionProviderBaseProps = {} as React.ComponentProps<typeof DirectionProvider>;
export const _test_Empty: EmptyBaseProps = {} as React.ComponentProps<typeof Empty>;
export const _test_EmptyMedia: EmptyMediaBaseProps = {} as React.ComponentProps<typeof EmptyMedia>;
export const _test_Spinner: SpinnerBaseProps = {} as React.ComponentProps<typeof Spinner>;
export const _test_Field: FieldBaseProps = {} as React.ComponentProps<typeof Field>;
export const _test_FieldContent: FieldContentBaseProps = {} as React.ComponentProps<typeof FieldContent>;
export const _test_FieldDescription: FieldDescriptionBaseProps = {} as React.ComponentProps<typeof FieldDescription>;
export const _test_FieldError: FieldErrorBaseProps = {} as React.ComponentProps<typeof FieldError>;
export const _test_FieldGroup: FieldGroupBaseProps = {} as React.ComponentProps<typeof FieldGroup>;
export const _test_FieldLabel: FieldLabelBaseProps = {} as React.ComponentProps<typeof FieldLabel>;
export const _test_FieldLegend: FieldLegendBaseProps = {} as React.ComponentProps<typeof FieldLegend>;
export const _test_FieldSeparator: FieldSeparatorBaseProps = {} as React.ComponentProps<typeof FieldSeparator>;
export const _test_FieldSet: FieldSetBaseProps = {} as React.ComponentProps<typeof FieldSet>;
export const _test_FieldTitle: FieldTitleBaseProps = {} as React.ComponentProps<typeof FieldTitle>;
export const _test_InputGroupAddon: InputGroupAddonBaseProps = {} as React.ComponentProps<typeof InputGroupAddon>;
export const _test_InputGroup: InputGroupBaseProps = {} as React.ComponentProps<typeof InputGroup>;
export const _test_InputGroupButton: InputGroupButtonBaseProps = {} as React.ComponentProps<typeof InputGroupButton>;
export const _test_InputGroupInput: InputGroupInputBaseProps = {} as React.ComponentProps<typeof InputGroupInput>;
export const _test_InputGroupText: InputGroupTextBaseProps = {} as React.ComponentProps<typeof InputGroupText>;
export const _test_InputGroupTextarea: InputGroupTextareaBaseProps = {} as React.ComponentProps<
  typeof InputGroupTextarea
>;
export const _test_NativeSelect: NativeSelectBaseProps = {} as React.ComponentProps<typeof NativeSelect>;
export const _test_NativeSelectOptGroup: NativeSelectOptGroupBaseProps = {} as React.ComponentProps<
  typeof NativeSelectOptGroup
>;
export const _test_NativeSelectOption: NativeSelectOptionBaseProps = {} as React.ComponentProps<
  typeof NativeSelectOption
>;
export const _test_Kbd: KbdBaseProps = {} as React.ComponentProps<typeof Kbd>;
export const _test_KbdGroup: KbdGroupBaseProps = {} as React.ComponentProps<typeof KbdGroup>;
export const _test_ItemActions: ItemActionsBaseProps = {} as React.ComponentProps<typeof ItemActions>;
export const _test_Item: ItemBaseProps = {} as React.ComponentProps<typeof Item>;
export const _test_ItemContent: ItemContentBaseProps = {} as React.ComponentProps<typeof ItemContent>;
export const _test_ItemDescription: ItemDescriptionBaseProps = {} as React.ComponentProps<typeof ItemDescription>;
export const _test_ItemFooter: ItemFooterBaseProps = {} as React.ComponentProps<typeof ItemFooter>;
export const _test_ItemGroup: ItemGroupBaseProps = {} as React.ComponentProps<typeof ItemGroup>;
export const _test_ItemHeader: ItemHeaderBaseProps = {} as React.ComponentProps<typeof ItemHeader>;
export const _test_ItemMedia: ItemMediaBaseProps = {} as React.ComponentProps<typeof ItemMedia>;
export const _test_ItemSeparator: ItemSeparatorBaseProps = {} as React.ComponentProps<typeof ItemSeparator>;
export const _test_ItemTitle: ItemTitleBaseProps = {} as React.ComponentProps<typeof ItemTitle>;
export const _test_ComboboxChip: ComboboxChipBaseProps = {} as React.ComponentProps<typeof ComboboxChip>;
export const _test_ComboboxChips: ComboboxChipsBaseProps = {} as React.ComponentProps<typeof ComboboxChips>;
export const _test_ComboboxChipsInput: ComboboxChipsInputBaseProps = {} as React.ComponentProps<
  typeof ComboboxChipsInput
>;
export const _test_ComboboxClear: ComboboxClearBaseProps = {} as React.ComponentProps<typeof ComboboxClear>;
export const _test_ComboboxCollection: ComboboxCollectionBaseProps = {} as React.ComponentProps<
  typeof ComboboxCollection
>;
export const _test_ComboboxContent: ComboboxContentBaseProps = {} as React.ComponentProps<typeof ComboboxContent>;
export const _test_ComboboxEmpty: ComboboxEmptyBaseProps = {} as React.ComponentProps<typeof ComboboxEmpty>;
export const _test_ComboboxGroup: ComboboxGroupBaseProps = {} as React.ComponentProps<typeof ComboboxGroup>;
export const _test_ComboboxInput: ComboboxInputBaseProps = {} as React.ComponentProps<typeof ComboboxInput>;
export const _test_ComboboxItem: ComboboxItemBaseProps = {} as React.ComponentProps<typeof ComboboxItem>;
export const _test_ComboboxLabel: ComboboxLabelBaseProps = {} as React.ComponentProps<typeof ComboboxLabel>;
export const _test_ComboboxList: ComboboxListBaseProps = {} as React.ComponentProps<typeof ComboboxList>;
export const _test_ComboboxSeparator: ComboboxSeparatorBaseProps = {} as React.ComponentProps<typeof ComboboxSeparator>;
export const _test_ComboboxTrigger: ComboboxTriggerBaseProps = {} as React.ComponentProps<typeof ComboboxTrigger>;
export const _test_ComboboxValue: ComboboxValueBaseProps = {} as React.ComponentProps<typeof ComboboxValue>;
export const _test_InputOTP: InputOTPBaseProps = {} as React.ComponentProps<typeof InputOTP>;
export const _test_InputOTPGroup: InputOTPGroupBaseProps = {} as React.ComponentProps<typeof InputOTPGroup>;
export const _test_InputOTPSeparator: InputOTPSeparatorBaseProps = {} as React.ComponentProps<typeof InputOTPSeparator>;
export const _test_InputOTPSlot: InputOTPSlotBaseProps = {} as React.ComponentProps<typeof InputOTPSlot>;
export const _test_Sidebar: SidebarBaseProps = {} as React.ComponentProps<typeof Sidebar>;
export const _test_SidebarContent: SidebarContentBaseProps = {} as React.ComponentProps<typeof SidebarContent>;
export const _test_SidebarFooter: SidebarFooterBaseProps = {} as React.ComponentProps<typeof SidebarFooter>;
export const _test_SidebarGroupAction: SidebarGroupActionBaseProps = {} as React.ComponentProps<
  typeof SidebarGroupAction
>;
export const _test_SidebarGroup: SidebarGroupBaseProps = {} as React.ComponentProps<typeof SidebarGroup>;
export const _test_SidebarGroupContent: SidebarGroupContentBaseProps = {} as React.ComponentProps<
  typeof SidebarGroupContent
>;
export const _test_SidebarGroupLabel: SidebarGroupLabelBaseProps = {} as React.ComponentProps<typeof SidebarGroupLabel>;
export const _test_SidebarHeader: SidebarHeaderBaseProps = {} as React.ComponentProps<typeof SidebarHeader>;
export const _test_SidebarInput: SidebarInputBaseProps = {} as React.ComponentProps<typeof SidebarInput>;
export const _test_SidebarInset: SidebarInsetBaseProps = {} as React.ComponentProps<typeof SidebarInset>;
export const _test_SidebarMenuAction: SidebarMenuActionBaseProps = {} as React.ComponentProps<typeof SidebarMenuAction>;
export const _test_SidebarMenuBadge: SidebarMenuBadgeBaseProps = {} as React.ComponentProps<typeof SidebarMenuBadge>;
export const _test_SidebarMenu: SidebarMenuBaseProps = {} as React.ComponentProps<typeof SidebarMenu>;
export const _test_SidebarMenuButton: SidebarMenuButtonBaseProps = {} as React.ComponentProps<typeof SidebarMenuButton>;
export const _test_SidebarMenuItem: SidebarMenuItemBaseProps = {} as React.ComponentProps<typeof SidebarMenuItem>;
export const _test_SidebarMenuSkeleton: SidebarMenuSkeletonBaseProps = {} as React.ComponentProps<
  typeof SidebarMenuSkeleton
>;
export const _test_SidebarMenuSub: SidebarMenuSubBaseProps = {} as React.ComponentProps<typeof SidebarMenuSub>;
export const _test_SidebarMenuSubButton: SidebarMenuSubButtonBaseProps = {} as React.ComponentProps<
  typeof SidebarMenuSubButton
>;
export const _test_SidebarMenuSubItem: SidebarMenuSubItemBaseProps = {} as React.ComponentProps<
  typeof SidebarMenuSubItem
>;
export const _test_SidebarProvider: SidebarProviderBaseProps = {} as React.ComponentProps<typeof SidebarProvider>;
export const _test_SidebarRail: SidebarRailBaseProps = {} as React.ComponentProps<typeof SidebarRail>;
export const _test_SidebarSeparator: SidebarSeparatorBaseProps = {} as React.ComponentProps<typeof SidebarSeparator>;
export const _test_SidebarTrigger: SidebarTriggerBaseProps = {} as React.ComponentProps<typeof SidebarTrigger>;

export {};
