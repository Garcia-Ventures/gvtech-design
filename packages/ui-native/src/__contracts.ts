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

const _test_Accordion: AccordionBaseProps = {} as React.ComponentProps<typeof Accordion>;
const _test_AccordionContent: AccordionContentBaseProps = {} as React.ComponentProps<typeof AccordionContent>;
const _test_AccordionItem: AccordionItemBaseProps = {} as React.ComponentProps<typeof AccordionItem>;
const _test_AccordionTrigger: AccordionTriggerBaseProps = {} as React.ComponentProps<typeof AccordionTrigger>;
const _test_Alert: AlertBaseProps = {} as React.ComponentProps<typeof Alert>;
const _test_AlertDescription: AlertDescriptionBaseProps = {} as React.ComponentProps<typeof AlertDescription>;
const _test_AlertTitle: AlertTitleBaseProps = {} as React.ComponentProps<typeof AlertTitle>;
const _test_AlertDialogAction: AlertDialogActionBaseProps = {} as React.ComponentProps<typeof AlertDialogAction>;
const _test_AlertDialog: AlertDialogBaseProps = {} as React.ComponentProps<typeof AlertDialog>;
const _test_AlertDialogCancel: AlertDialogCancelBaseProps = {} as React.ComponentProps<typeof AlertDialogCancel>;
const _test_AlertDialogContent: AlertDialogContentBaseProps = {} as React.ComponentProps<typeof AlertDialogContent>;
const _test_AlertDialogDescription: AlertDialogDescriptionBaseProps = {} as React.ComponentProps<
  typeof AlertDialogDescription
>;
const _test_AlertDialogFooter: AlertDialogFooterBaseProps = {} as React.ComponentProps<typeof AlertDialogFooter>;
const _test_AlertDialogHeader: AlertDialogHeaderBaseProps = {} as React.ComponentProps<typeof AlertDialogHeader>;
const _test_AlertDialogTitle: AlertDialogTitleBaseProps = {} as React.ComponentProps<typeof AlertDialogTitle>;
const _test_AlertDialogTrigger: AlertDialogTriggerBaseProps = {} as React.ComponentProps<typeof AlertDialogTrigger>;
const _test_AspectRatio: AspectRatioBaseProps = {} as React.ComponentProps<typeof AspectRatio>;
const _test_Avatar: AvatarBaseProps = {} as React.ComponentProps<typeof Avatar>;
const _test_AvatarFallback: AvatarFallbackBaseProps = {} as React.ComponentProps<typeof AvatarFallback>;
const _test_AvatarImage: AvatarImageBaseProps = {} as React.ComponentProps<typeof AvatarImage>;
const _test_Badge: BadgeBaseProps = {} as React.ComponentProps<typeof Badge>;
const _test_Breadcrumb: BreadcrumbBaseProps = {} as React.ComponentProps<typeof Breadcrumb>;
const _test_BreadcrumbEllipsis: BreadcrumbEllipsisBaseProps = {} as React.ComponentProps<typeof BreadcrumbEllipsis>;
const _test_BreadcrumbItem: BreadcrumbItemBaseProps = {} as React.ComponentProps<typeof BreadcrumbItem>;
const _test_BreadcrumbLink: BreadcrumbLinkBaseProps = {} as React.ComponentProps<typeof BreadcrumbLink>;
const _test_BreadcrumbList: BreadcrumbListBaseProps = {} as React.ComponentProps<typeof BreadcrumbList>;
const _test_BreadcrumbPage: BreadcrumbPageBaseProps = {} as React.ComponentProps<typeof BreadcrumbPage>;
const _test_BreadcrumbSeparator: BreadcrumbSeparatorBaseProps = {} as React.ComponentProps<typeof BreadcrumbSeparator>;
const _test_Button: ButtonBaseProps = {} as React.ComponentProps<typeof Button>;
const _test_Calendar: CalendarBaseProps = {} as React.ComponentProps<typeof Calendar>;
const _test_Card: CardBaseProps = {} as React.ComponentProps<typeof Card>;
const _test_Carousel: CarouselBaseProps = {} as React.ComponentProps<typeof Carousel>;
const _test_CarouselContent: CarouselContentBaseProps = {} as React.ComponentProps<typeof CarouselContent>;
const _test_CarouselItem: CarouselItemBaseProps = {} as React.ComponentProps<typeof CarouselItem>;
const _test_CarouselNext: CarouselNextBaseProps = {} as React.ComponentProps<typeof CarouselNext>;
const _test_CarouselPrevious: CarouselPreviousBaseProps = {} as React.ComponentProps<typeof CarouselPrevious>;
const _test_ChartContainer: ChartContainerBaseProps = {} as React.ComponentProps<typeof ChartContainer>;
const _test_ChartLegendContent: ChartLegendContentBaseProps = {} as React.ComponentProps<typeof ChartLegendContent>;
const _test_ChartTooltipContent: ChartTooltipContentBaseProps = {} as React.ComponentProps<typeof ChartTooltipContent>;
const _test_Checkbox: CheckboxBaseProps = {} as React.ComponentProps<typeof Checkbox>;
const _test_Collapsible: CollapsibleBaseProps = {} as React.ComponentProps<typeof Collapsible>;
const _test_CollapsibleContent: CollapsibleContentBaseProps = {} as React.ComponentProps<typeof CollapsibleContent>;
const _test_CollapsibleTrigger: CollapsibleTriggerBaseProps = {} as React.ComponentProps<typeof CollapsibleTrigger>;
const _test_Command: CommandBaseProps = {} as React.ComponentProps<typeof Command>;
const _test_CommandEmpty: CommandEmptyBaseProps = {} as React.ComponentProps<typeof CommandEmpty>;
const _test_CommandGroup: CommandGroupBaseProps = {} as React.ComponentProps<typeof CommandGroup>;
const _test_CommandInput: CommandInputBaseProps = {} as React.ComponentProps<typeof CommandInput>;
const _test_CommandItem: CommandItemBaseProps = {} as React.ComponentProps<typeof CommandItem>;
const _test_CommandList: CommandListBaseProps = {} as React.ComponentProps<typeof CommandList>;
const _test_CommandSeparator: CommandSeparatorBaseProps = {} as React.ComponentProps<typeof CommandSeparator>;
const _test_CommandShortcut: CommandShortcutBaseProps = {} as React.ComponentProps<typeof CommandShortcut>;
const _test_ContextMenu: ContextMenuBaseProps = {} as React.ComponentProps<typeof ContextMenu>;
const _test_ContextMenuCheckboxItem: ContextMenuCheckboxItemBaseProps = {} as React.ComponentProps<
  typeof ContextMenuCheckboxItem
>;
const _test_ContextMenuContent: ContextMenuContentBaseProps = {} as React.ComponentProps<typeof ContextMenuContent>;
const _test_ContextMenuGroup: ContextMenuGroupBaseProps = {} as React.ComponentProps<typeof ContextMenuGroup>;
const _test_ContextMenuItem: ContextMenuItemBaseProps = {} as React.ComponentProps<typeof ContextMenuItem>;
const _test_ContextMenuLabel: ContextMenuLabelBaseProps = {} as React.ComponentProps<typeof ContextMenuLabel>;
const _test_ContextMenuRadioGroup: ContextMenuRadioGroupBaseProps = {} as React.ComponentProps<
  typeof ContextMenuRadioGroup
>;
const _test_ContextMenuRadioItem: ContextMenuRadioItemBaseProps = {} as React.ComponentProps<
  typeof ContextMenuRadioItem
>;
const _test_ContextMenuSeparator: ContextMenuSeparatorBaseProps = {} as React.ComponentProps<
  typeof ContextMenuSeparator
>;
const _test_ContextMenuShortcut: ContextMenuShortcutBaseProps = {} as React.ComponentProps<typeof ContextMenuShortcut>;
const _test_ContextMenuSub: ContextMenuSubBaseProps = {} as React.ComponentProps<typeof ContextMenuSub>;
const _test_ContextMenuSubContent: ContextMenuSubContentBaseProps = {} as React.ComponentProps<
  typeof ContextMenuSubContent
>;
const _test_ContextMenuSubTrigger: ContextMenuSubTriggerBaseProps = {} as React.ComponentProps<
  typeof ContextMenuSubTrigger
>;
const _test_ContextMenuTrigger: ContextMenuTriggerBaseProps = {} as React.ComponentProps<typeof ContextMenuTrigger>;
const _test_Dialog: DialogBaseProps = {} as React.ComponentProps<typeof Dialog>;
const _test_DialogContent: DialogContentBaseProps = {} as React.ComponentProps<typeof DialogContent>;
const _test_Drawer: DrawerBaseProps = {} as React.ComponentProps<typeof Drawer>;
const _test_DrawerClose: DrawerCloseBaseProps = {} as React.ComponentProps<typeof DrawerClose>;
const _test_DrawerContent: DrawerContentBaseProps = {} as React.ComponentProps<typeof DrawerContent>;
const _test_DrawerDescription: DrawerDescriptionBaseProps = {} as React.ComponentProps<typeof DrawerDescription>;
const _test_DrawerFooter: DrawerFooterBaseProps = {} as React.ComponentProps<typeof DrawerFooter>;
const _test_DrawerHeader: DrawerHeaderBaseProps = {} as React.ComponentProps<typeof DrawerHeader>;
const _test_DrawerTitle: DrawerTitleBaseProps = {} as React.ComponentProps<typeof DrawerTitle>;
const _test_DrawerTrigger: DrawerTriggerBaseProps = {} as React.ComponentProps<typeof DrawerTrigger>;
const _test_DropdownMenu: DropdownMenuBaseProps = {} as React.ComponentProps<typeof DropdownMenu>;
const _test_DropdownMenuCheckboxItem: DropdownMenuCheckboxItemBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuCheckboxItem
>;
const _test_DropdownMenuContent: DropdownMenuContentBaseProps = {} as React.ComponentProps<typeof DropdownMenuContent>;
const _test_DropdownMenuGroup: DropdownMenuGroupBaseProps = {} as React.ComponentProps<typeof DropdownMenuGroup>;
const _test_DropdownMenuItem: DropdownMenuItemBaseProps = {} as React.ComponentProps<typeof DropdownMenuItem>;
const _test_DropdownMenuLabel: DropdownMenuLabelBaseProps = {} as React.ComponentProps<typeof DropdownMenuLabel>;
const _test_DropdownMenuRadioGroup: DropdownMenuRadioGroupBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuRadioGroup
>;
const _test_DropdownMenuRadioItem: DropdownMenuRadioItemBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuRadioItem
>;
const _test_DropdownMenuSeparator: DropdownMenuSeparatorBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuSeparator
>;
const _test_DropdownMenuShortcut: DropdownMenuShortcutBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuShortcut
>;
const _test_DropdownMenuSub: DropdownMenuSubBaseProps = {} as React.ComponentProps<typeof DropdownMenuSub>;
const _test_DropdownMenuSubContent: DropdownMenuSubContentBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuSubContent
>;
const _test_DropdownMenuSubTrigger: DropdownMenuSubTriggerBaseProps = {} as React.ComponentProps<
  typeof DropdownMenuSubTrigger
>;
const _test_DropdownMenuTrigger: DropdownMenuTriggerBaseProps = {} as React.ComponentProps<typeof DropdownMenuTrigger>;
const _test_Form: FormBaseProps = {} as React.ComponentProps<typeof Form>;
const _test_FormDescription: FormDescriptionBaseProps = {} as React.ComponentProps<typeof FormDescription>;
const _test_FormItem: FormItemBaseProps = {} as React.ComponentProps<typeof FormItem>;
const _test_FormLabel: FormLabelBaseProps = {} as React.ComponentProps<typeof FormLabel>;
const _test_FormMessage: FormMessageBaseProps = {} as React.ComponentProps<typeof FormMessage>;
const _test_HoverCard: HoverCardBaseProps = {} as React.ComponentProps<typeof HoverCard>;
const _test_HoverCardContent: HoverCardContentBaseProps = {} as React.ComponentProps<typeof HoverCardContent>;
const _test_HoverCardTrigger: HoverCardTriggerBaseProps = {} as React.ComponentProps<typeof HoverCardTrigger>;
const _test_Input: InputBaseProps = {} as React.ComponentProps<typeof Input>;
const _test_Label: LabelBaseProps = {} as React.ComponentProps<typeof Label>;
const _test_Menubar: MenubarBaseProps = {} as React.ComponentProps<typeof Menubar>;
const _test_MenubarCheckboxItem: MenubarCheckboxItemBaseProps = {} as React.ComponentProps<typeof MenubarCheckboxItem>;
const _test_MenubarContent: MenubarContentBaseProps = {} as React.ComponentProps<typeof MenubarContent>;
const _test_MenubarItem: MenubarItemBaseProps = {} as React.ComponentProps<typeof MenubarItem>;
const _test_MenubarLabel: MenubarLabelBaseProps = {} as React.ComponentProps<typeof MenubarLabel>;
const _test_MenubarMenu: MenubarMenuBaseProps = {} as React.ComponentProps<typeof MenubarMenu>;
const _test_MenubarRadioItem: MenubarRadioItemBaseProps = {} as React.ComponentProps<typeof MenubarRadioItem>;
const _test_MenubarSeparator: MenubarSeparatorBaseProps = {} as React.ComponentProps<typeof MenubarSeparator>;
const _test_MenubarShortcut: MenubarShortcutBaseProps = {} as React.ComponentProps<typeof MenubarShortcut>;
const _test_MenubarSub: MenubarSubBaseProps = {} as React.ComponentProps<typeof MenubarSub>;
const _test_MenubarSubContent: MenubarSubContentBaseProps = {} as React.ComponentProps<typeof MenubarSubContent>;
const _test_MenubarSubTrigger: MenubarSubTriggerBaseProps = {} as React.ComponentProps<typeof MenubarSubTrigger>;
const _test_MenubarTrigger: MenubarTriggerBaseProps = {} as React.ComponentProps<typeof MenubarTrigger>;
const _test_NavigationMenu: NavigationMenuBaseProps = {} as React.ComponentProps<typeof NavigationMenu>;
const _test_NavigationMenuContent: NavigationMenuContentBaseProps = {} as React.ComponentProps<
  typeof NavigationMenuContent
>;
const _test_NavigationMenuIndicator: NavigationMenuIndicatorBaseProps = {} as React.ComponentProps<
  typeof NavigationMenuIndicator
>;
const _test_NavigationMenuItem: NavigationMenuItemBaseProps = {} as React.ComponentProps<typeof NavigationMenuItem>;
const _test_NavigationMenuLink: NavigationMenuLinkBaseProps = {} as React.ComponentProps<typeof NavigationMenuLink>;
const _test_NavigationMenuList: NavigationMenuListBaseProps = {} as React.ComponentProps<typeof NavigationMenuList>;
const _test_NavigationMenuTrigger: NavigationMenuTriggerBaseProps = {} as React.ComponentProps<
  typeof NavigationMenuTrigger
>;
const _test_NavigationMenuViewport: NavigationMenuViewportBaseProps = {} as React.ComponentProps<
  typeof NavigationMenuViewport
>;
const _test_Pagination: PaginationBaseProps = {} as React.ComponentProps<typeof Pagination>;
const _test_PaginationContent: PaginationContentBaseProps = {} as React.ComponentProps<typeof PaginationContent>;
const _test_PaginationEllipsis: PaginationEllipsisBaseProps = {} as React.ComponentProps<typeof PaginationEllipsis>;
const _test_PaginationItem: PaginationItemBaseProps = {} as React.ComponentProps<typeof PaginationItem>;
const _test_PaginationLink: PaginationLinkBaseProps = {} as React.ComponentProps<typeof PaginationLink>;
const _test_PaginationNext: PaginationNextBaseProps = {} as React.ComponentProps<typeof PaginationNext>;
const _test_PaginationPrevious: PaginationPreviousBaseProps = {} as React.ComponentProps<typeof PaginationPrevious>;
const _test_PopoverAnchor: PopoverAnchorBaseProps = {} as React.ComponentProps<typeof PopoverAnchor>;
const _test_Popover: PopoverBaseProps = {} as React.ComponentProps<typeof Popover>;
const _test_PopoverContent: PopoverContentBaseProps = {} as React.ComponentProps<typeof PopoverContent>;
const _test_PopoverTrigger: PopoverTriggerBaseProps = {} as React.ComponentProps<typeof PopoverTrigger>;
const _test_Progress: ProgressBaseProps = {} as React.ComponentProps<typeof Progress>;
const _test_RadioGroup: RadioGroupBaseProps = {} as React.ComponentProps<typeof RadioGroup>;
const _test_RadioGroupItem: RadioGroupItemBaseProps = {} as React.ComponentProps<typeof RadioGroupItem>;
const _test_ResizableHandle: ResizableHandleBaseProps = {} as React.ComponentProps<typeof ResizableHandle>;
const _test_ResizablePanel: ResizablePanelBaseProps = {} as React.ComponentProps<typeof ResizablePanel>;
const _test_ResizablePanelGroup: ResizablePanelGroupBaseProps = {} as React.ComponentProps<typeof ResizablePanelGroup>;
const _test_ScrollArea: ScrollAreaBaseProps = {} as React.ComponentProps<typeof ScrollArea>;
const _test_ScrollToTop: ScrollToTopBaseProps = {} as React.ComponentProps<typeof ScrollToTop>;
const _test_Search: SearchBaseProps = {} as React.ComponentProps<typeof Search>;
const _test_Select: SelectBaseProps = {} as React.ComponentProps<typeof Select>;
const _test_SelectContent: SelectContentBaseProps = {} as React.ComponentProps<typeof SelectContent>;
const _test_SelectGroup: SelectGroupBaseProps = {} as React.ComponentProps<typeof SelectGroup>;
const _test_SelectItem: SelectItemBaseProps = {} as React.ComponentProps<typeof SelectItem>;
const _test_SelectLabel: SelectLabelBaseProps = {} as React.ComponentProps<typeof SelectLabel>;
const _test_SelectScrollDownButton: SelectScrollDownButtonBaseProps = {} as React.ComponentProps<
  typeof SelectScrollDownButton
>;
const _test_SelectScrollUpButton: SelectScrollUpButtonBaseProps = {} as React.ComponentProps<
  typeof SelectScrollUpButton
>;
const _test_SelectSeparator: SelectSeparatorBaseProps = {} as React.ComponentProps<typeof SelectSeparator>;
const _test_SelectTrigger: SelectTriggerBaseProps = {} as React.ComponentProps<typeof SelectTrigger>;
const _test_SelectValue: SelectValueBaseProps = {} as React.ComponentProps<typeof SelectValue>;
const _test_Separator: SeparatorBaseProps = {} as React.ComponentProps<typeof Separator>;
const _test_Sheet: SheetBaseProps = {} as React.ComponentProps<typeof Sheet>;
const _test_SheetClose: SheetCloseBaseProps = {} as React.ComponentProps<typeof SheetClose>;
const _test_SheetContent: SheetContentBaseProps = {} as React.ComponentProps<typeof SheetContent>;
const _test_SheetDescription: SheetDescriptionBaseProps = {} as React.ComponentProps<typeof SheetDescription>;
const _test_SheetFooter: SheetFooterBaseProps = {} as React.ComponentProps<typeof SheetFooter>;
const _test_SheetHeader: SheetHeaderBaseProps = {} as React.ComponentProps<typeof SheetHeader>;
const _test_SheetOverlay: SheetOverlayBaseProps = {} as React.ComponentProps<typeof SheetOverlay>;
const _test_SheetPortal: SheetPortalBaseProps = {} as React.ComponentProps<typeof SheetPortal>;
const _test_SheetTitle: SheetTitleBaseProps = {} as React.ComponentProps<typeof SheetTitle>;
const _test_SheetTrigger: SheetTriggerBaseProps = {} as React.ComponentProps<typeof SheetTrigger>;
const _test_Skeleton: SkeletonBaseProps = {} as React.ComponentProps<typeof Skeleton>;
const _test_Slider: SliderBaseProps = {} as React.ComponentProps<typeof Slider>;
const _test_Switch: SwitchBaseProps = {} as React.ComponentProps<typeof Switch>;
const _test_Table: TableBaseProps = {} as React.ComponentProps<typeof Table>;
const _test_TableBody: TableBodyBaseProps = {} as React.ComponentProps<typeof TableBody>;
const _test_TableCaption: TableCaptionBaseProps = {} as React.ComponentProps<typeof TableCaption>;
const _test_TableCell: TableCellBaseProps = {} as React.ComponentProps<typeof TableCell>;
const _test_TableFooter: TableFooterBaseProps = {} as React.ComponentProps<typeof TableFooter>;
const _test_TableHead: TableHeadBaseProps = {} as React.ComponentProps<typeof TableHead>;
const _test_TableHeader: TableHeaderBaseProps = {} as React.ComponentProps<typeof TableHeader>;
const _test_TableRow: TableRowBaseProps = {} as React.ComponentProps<typeof TableRow>;
const _test_Tabs: TabsBaseProps = {} as React.ComponentProps<typeof Tabs>;
const _test_TabsContent: TabsContentBaseProps = {} as React.ComponentProps<typeof TabsContent>;
const _test_TabsList: TabsListBaseProps = {} as React.ComponentProps<typeof TabsList>;
const _test_TabsTrigger: TabsTriggerBaseProps = {} as React.ComponentProps<typeof TabsTrigger>;
const _test_Text: TextBaseProps = {} as React.ComponentProps<typeof Text>;
const _test_Textarea: TextareaBaseProps = {} as React.ComponentProps<typeof Textarea>;
const _test_Toggle: ToggleBaseProps = {} as React.ComponentProps<typeof Toggle>;
const _test_ToggleGroup: ToggleGroupBaseProps = {} as React.ComponentProps<typeof ToggleGroup>;
const _test_ToggleGroupItem: ToggleGroupItemBaseProps = {} as React.ComponentProps<typeof ToggleGroupItem>;
const _test_Tooltip: TooltipBaseProps = {} as React.ComponentProps<typeof Tooltip>;
const _test_TooltipContent: TooltipContentBaseProps = {} as React.ComponentProps<typeof TooltipContent>;
const _test_TooltipProvider: TooltipProviderBaseProps = {} as React.ComponentProps<typeof TooltipProvider>;
const _test_TooltipTrigger: TooltipTriggerBaseProps = {} as React.ComponentProps<typeof TooltipTrigger>;
const _test_Toast: ToastBaseProps = {} as React.ComponentProps<typeof Toast>;
const _test_ThemeProvider: ThemeProviderBaseProps = {} as React.ComponentProps<typeof ThemeProvider>;
const _test_ThemeToggle: ThemeToggleBaseProps = {} as React.ComponentProps<typeof ThemeToggle>;
const _test_Toaster: ToasterBaseProps = {} as React.ComponentProps<typeof Toaster>;
const _test_TableOfContents: TableOfContentsBaseProps = {} as React.ComponentProps<typeof TableOfContents>;
const _test_TableOfContentsContent: TableOfContentsContentBaseProps = {} as React.ComponentProps<
  typeof TableOfContentsContent
>;
const _test_TableOfContentsList: TableOfContentsListBaseProps = {} as React.ComponentProps<typeof TableOfContentsList>;
const _test_ButtonGroup: ButtonGroupBaseProps = {} as React.ComponentProps<typeof ButtonGroup>;
const _test_ButtonGroupSeparator: ButtonGroupSeparatorBaseProps = {} as React.ComponentProps<
  typeof ButtonGroupSeparator
>;
const _test_ButtonGroupText: ButtonGroupTextBaseProps = {} as React.ComponentProps<typeof ButtonGroupText>;
const _test_DirectionProvider: DirectionProviderBaseProps = {} as React.ComponentProps<typeof DirectionProvider>;
const _test_Empty: EmptyBaseProps = {} as React.ComponentProps<typeof Empty>;
const _test_EmptyMedia: EmptyMediaBaseProps = {} as React.ComponentProps<typeof EmptyMedia>;
const _test_Spinner: SpinnerBaseProps = {} as React.ComponentProps<typeof Spinner>;
const _test_Field: FieldBaseProps = {} as React.ComponentProps<typeof Field>;
const _test_FieldContent: FieldContentBaseProps = {} as React.ComponentProps<typeof FieldContent>;
const _test_FieldDescription: FieldDescriptionBaseProps = {} as React.ComponentProps<typeof FieldDescription>;
const _test_FieldError: FieldErrorBaseProps = {} as React.ComponentProps<typeof FieldError>;
const _test_FieldGroup: FieldGroupBaseProps = {} as React.ComponentProps<typeof FieldGroup>;
const _test_FieldLabel: FieldLabelBaseProps = {} as React.ComponentProps<typeof FieldLabel>;
const _test_FieldLegend: FieldLegendBaseProps = {} as React.ComponentProps<typeof FieldLegend>;
const _test_FieldSeparator: FieldSeparatorBaseProps = {} as React.ComponentProps<typeof FieldSeparator>;
const _test_FieldSet: FieldSetBaseProps = {} as React.ComponentProps<typeof FieldSet>;
const _test_FieldTitle: FieldTitleBaseProps = {} as React.ComponentProps<typeof FieldTitle>;
const _test_InputGroupAddon: InputGroupAddonBaseProps = {} as React.ComponentProps<typeof InputGroupAddon>;
const _test_InputGroup: InputGroupBaseProps = {} as React.ComponentProps<typeof InputGroup>;
const _test_InputGroupButton: InputGroupButtonBaseProps = {} as React.ComponentProps<typeof InputGroupButton>;
const _test_InputGroupInput: InputGroupInputBaseProps = {} as React.ComponentProps<typeof InputGroupInput>;
const _test_InputGroupText: InputGroupTextBaseProps = {} as React.ComponentProps<typeof InputGroupText>;
const _test_InputGroupTextarea: InputGroupTextareaBaseProps = {} as React.ComponentProps<typeof InputGroupTextarea>;
const _test_NativeSelect: NativeSelectBaseProps = {} as React.ComponentProps<typeof NativeSelect>;
const _test_NativeSelectOptGroup: NativeSelectOptGroupBaseProps = {} as React.ComponentProps<
  typeof NativeSelectOptGroup
>;
const _test_NativeSelectOption: NativeSelectOptionBaseProps = {} as React.ComponentProps<typeof NativeSelectOption>;
const _test_Kbd: KbdBaseProps = {} as React.ComponentProps<typeof Kbd>;
const _test_KbdGroup: KbdGroupBaseProps = {} as React.ComponentProps<typeof KbdGroup>;
const _test_ItemActions: ItemActionsBaseProps = {} as React.ComponentProps<typeof ItemActions>;
const _test_Item: ItemBaseProps = {} as React.ComponentProps<typeof Item>;
const _test_ItemContent: ItemContentBaseProps = {} as React.ComponentProps<typeof ItemContent>;
const _test_ItemDescription: ItemDescriptionBaseProps = {} as React.ComponentProps<typeof ItemDescription>;
const _test_ItemFooter: ItemFooterBaseProps = {} as React.ComponentProps<typeof ItemFooter>;
const _test_ItemGroup: ItemGroupBaseProps = {} as React.ComponentProps<typeof ItemGroup>;
const _test_ItemHeader: ItemHeaderBaseProps = {} as React.ComponentProps<typeof ItemHeader>;
const _test_ItemMedia: ItemMediaBaseProps = {} as React.ComponentProps<typeof ItemMedia>;
const _test_ItemSeparator: ItemSeparatorBaseProps = {} as React.ComponentProps<typeof ItemSeparator>;
const _test_ItemTitle: ItemTitleBaseProps = {} as React.ComponentProps<typeof ItemTitle>;
const _test_ComboboxChip: ComboboxChipBaseProps = {} as React.ComponentProps<typeof ComboboxChip>;
const _test_ComboboxChips: ComboboxChipsBaseProps = {} as React.ComponentProps<typeof ComboboxChips>;
const _test_ComboboxChipsInput: ComboboxChipsInputBaseProps = {} as React.ComponentProps<typeof ComboboxChipsInput>;
const _test_ComboboxClear: ComboboxClearBaseProps = {} as React.ComponentProps<typeof ComboboxClear>;
const _test_ComboboxCollection: ComboboxCollectionBaseProps = {} as React.ComponentProps<typeof ComboboxCollection>;
const _test_ComboboxContent: ComboboxContentBaseProps = {} as React.ComponentProps<typeof ComboboxContent>;
const _test_ComboboxEmpty: ComboboxEmptyBaseProps = {} as React.ComponentProps<typeof ComboboxEmpty>;
const _test_ComboboxGroup: ComboboxGroupBaseProps = {} as React.ComponentProps<typeof ComboboxGroup>;
const _test_ComboboxInput: ComboboxInputBaseProps = {} as React.ComponentProps<typeof ComboboxInput>;
const _test_ComboboxItem: ComboboxItemBaseProps = {} as React.ComponentProps<typeof ComboboxItem>;
const _test_ComboboxLabel: ComboboxLabelBaseProps = {} as React.ComponentProps<typeof ComboboxLabel>;
const _test_ComboboxList: ComboboxListBaseProps = {} as React.ComponentProps<typeof ComboboxList>;
const _test_ComboboxSeparator: ComboboxSeparatorBaseProps = {} as React.ComponentProps<typeof ComboboxSeparator>;
const _test_ComboboxTrigger: ComboboxTriggerBaseProps = {} as React.ComponentProps<typeof ComboboxTrigger>;
const _test_ComboboxValue: ComboboxValueBaseProps = {} as React.ComponentProps<typeof ComboboxValue>;
const _test_InputOTP: InputOTPBaseProps = {} as React.ComponentProps<typeof InputOTP>;
const _test_InputOTPGroup: InputOTPGroupBaseProps = {} as React.ComponentProps<typeof InputOTPGroup>;
const _test_InputOTPSeparator: InputOTPSeparatorBaseProps = {} as React.ComponentProps<typeof InputOTPSeparator>;
const _test_InputOTPSlot: InputOTPSlotBaseProps = {} as React.ComponentProps<typeof InputOTPSlot>;
const _test_Sidebar: SidebarBaseProps = {} as React.ComponentProps<typeof Sidebar>;
const _test_SidebarContent: SidebarContentBaseProps = {} as React.ComponentProps<typeof SidebarContent>;
const _test_SidebarFooter: SidebarFooterBaseProps = {} as React.ComponentProps<typeof SidebarFooter>;
const _test_SidebarGroupAction: SidebarGroupActionBaseProps = {} as React.ComponentProps<typeof SidebarGroupAction>;
const _test_SidebarGroup: SidebarGroupBaseProps = {} as React.ComponentProps<typeof SidebarGroup>;
const _test_SidebarGroupContent: SidebarGroupContentBaseProps = {} as React.ComponentProps<typeof SidebarGroupContent>;
const _test_SidebarGroupLabel: SidebarGroupLabelBaseProps = {} as React.ComponentProps<typeof SidebarGroupLabel>;
const _test_SidebarHeader: SidebarHeaderBaseProps = {} as React.ComponentProps<typeof SidebarHeader>;
const _test_SidebarInput: SidebarInputBaseProps = {} as React.ComponentProps<typeof SidebarInput>;
const _test_SidebarInset: SidebarInsetBaseProps = {} as React.ComponentProps<typeof SidebarInset>;
const _test_SidebarMenuAction: SidebarMenuActionBaseProps = {} as React.ComponentProps<typeof SidebarMenuAction>;
const _test_SidebarMenuBadge: SidebarMenuBadgeBaseProps = {} as React.ComponentProps<typeof SidebarMenuBadge>;
const _test_SidebarMenu: SidebarMenuBaseProps = {} as React.ComponentProps<typeof SidebarMenu>;
const _test_SidebarMenuButton: SidebarMenuButtonBaseProps = {} as React.ComponentProps<typeof SidebarMenuButton>;
const _test_SidebarMenuItem: SidebarMenuItemBaseProps = {} as React.ComponentProps<typeof SidebarMenuItem>;
const _test_SidebarMenuSkeleton: SidebarMenuSkeletonBaseProps = {} as React.ComponentProps<typeof SidebarMenuSkeleton>;
const _test_SidebarMenuSub: SidebarMenuSubBaseProps = {} as React.ComponentProps<typeof SidebarMenuSub>;
const _test_SidebarMenuSubButton: SidebarMenuSubButtonBaseProps = {} as React.ComponentProps<
  typeof SidebarMenuSubButton
>;
const _test_SidebarMenuSubItem: SidebarMenuSubItemBaseProps = {} as React.ComponentProps<typeof SidebarMenuSubItem>;
const _test_SidebarProvider: SidebarProviderBaseProps = {} as React.ComponentProps<typeof SidebarProvider>;
const _test_SidebarRail: SidebarRailBaseProps = {} as React.ComponentProps<typeof SidebarRail>;
const _test_SidebarSeparator: SidebarSeparatorBaseProps = {} as React.ComponentProps<typeof SidebarSeparator>;
const _test_SidebarTrigger: SidebarTriggerBaseProps = {} as React.ComponentProps<typeof SidebarTrigger>;

export {};
