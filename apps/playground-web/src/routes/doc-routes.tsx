import * as React from 'react';

export interface DocRoute {
  path: string;
  title: string;
  description: string;
  web?: React.LazyExoticComponent<React.ComponentType>;
  native?: React.LazyExoticComponent<React.ComponentType>;
}

// Helper to lazy load pages
const web = (name: string) =>
  React.lazy(() => import('@/pages/web').then((m) => ({ default: (m as Record<string, React.ComponentType>)[name] })));
const native = (name: string) =>
  React.lazy(() =>
    import('@/pages/native').then((m) => ({ default: (m as Record<string, React.ComponentType>)[name] })),
  );
const shared = (name: string) =>
  React.lazy(() =>
    import('@/pages/shared/GettingStarted').then((m) => ({
      default: (m as Record<string, React.ComponentType>)[name],
    })),
  );

export const docRoutes: DocRoute[] = [
  // Intro
  {
    path: 'getting-started',
    title: 'Getting Started',
    description: 'Learn how to get started with the GV Tech Design System.',
    web: shared('GettingStartedPage'),
  },
  {
    path: 'installation',
    title: 'Installation',
    description: 'Install the GV Tech Design System in your project.',
    web: web('WebInstallationDocs'),
    native: native('NativeInstallationDocs'),
  },

  // Layout
  {
    path: 'aspect-ratio',
    title: 'Aspect Ratio',
    description: 'Displays content within a desired ratio.',
    web: web('WebAspectRatioDocs'),
    // Native: not yet implemented
  },
  {
    path: 'resizable',
    title: 'Resizable',
    description: 'Accessible resizable panel groups and layouts with keyboard support.',
    web: web('WebResizableDocs'),
    // Native: not yet implemented
  },
  {
    path: 'scroll-area',
    title: 'Scroll-area',
    description: 'Augments native scroll functionality for custom, cross-browser styling.',
    web: web('WebScrollAreaDocs'),
    // Native: not yet implemented
  },

  // Components
  {
    path: 'accordion',
    title: 'Accordion',
    description: 'A vertically stacked set of interactive headings that each reveal a section of content.',
    web: web('WebAccordionDocs'),
    native: native('NativeAccordionDocs'),
  },
  {
    path: 'alert',
    title: 'Alert',
    description: 'Displays a callout for user attention.',
    web: web('WebAlertDocs'),
    native: native('NativeAlertDocs'),
  },
  {
    path: 'alert-dialog',
    title: 'Alert Dialog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
    web: web('WebAlertDialogDocs'),
    native: native('NativeAlertDialogDocs'),
  },
  {
    path: 'avatar',
    title: 'Avatar',
    description: 'An image element with a fallback for representing the user.',
    web: web('WebAvatarDocs'),
    native: native('NativeAvatarDocs'),
  },
  {
    path: 'badge',
    title: 'Badge',
    description: 'Displays a badge or a component that looks like a badge.',
    web: web('WebBadgeDocs'),
    native: native('NativeBadgeDocs'),
  },
  {
    path: 'breadcrumb',
    title: 'Breadcrumb',
    description: 'Displays the path to the current resource using a hierarchy of links.',
    web: web('WebBreadcrumbDocs'),
    // Native: not yet implemented
  },
  {
    path: 'button',
    title: 'Button',
    description: 'Displays a button or a component that looks like a button.',
    web: web('WebButtonDocs'),
    native: native('NativeButtonDocs'),
  },
  {
    path: 'calendar',
    title: 'Calendar',
    description: 'A date field component that allows users to enter and edit dates.',
    web: web('WebCalendarDocs'),
    // Native: not yet implemented
  },
  {
    path: 'card',
    title: 'Card',
    description: 'Displays a card with header, content, and footer.',
    web: web('WebCardDocs'),
    native: native('NativeCardDocs'),
  },
  {
    path: 'carousel',
    title: 'Carousel',
    description: 'A carousel with next and previous buttons.',
    web: web('WebCarouselDocs'),
    // Native: not yet implemented
  },
  {
    path: 'chart',
    title: 'Chart',
    description: 'A chart component with various types of charts.',
    web: web('WebChartDocs'),
    // Native: not yet implemented
  },
  {
    path: 'checkbox',
    title: 'Checkbox',
    description: 'A control that allows the user to toggle between checked and not checked.',
    web: web('WebCheckboxDocs'),
    native: native('NativeCheckboxDocs'),
  },
  {
    path: 'collapsible',
    title: 'Collapsible',
    description: 'An interactive component which can be expanded or collapsed.',
    web: web('WebCollapsibleDocs'),
    native: native('NativeCollapsibleDocs'),
  },
  {
    path: 'command',
    title: 'Command',
    description: 'A command menu for running tasks and navigating.',
    web: web('WebCommandDocs'),
    // Native: not yet implemented
  },
  {
    path: 'context-menu',
    title: 'Context Menu',
    description: 'Displays a menu located at the pointer, triggered by a right-click or a long-press.',
    web: web('WebContextMenuDocs'),
    // Native: not yet implemented
  },
  {
    path: 'dialog',
    title: 'Dialog',
    description:
      'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
    web: web('WebDialogDocs'),
    native: native('NativeDialogDocs'),
  },
  {
    path: 'drawer',
    title: 'Drawer',
    description: 'A responsive drawer component.',
    web: web('WebDrawerDocs'),
    // Native: not yet implemented
  },
  {
    path: 'dropdown-menu',
    title: 'Dropdown Menu',
    description: 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.',
    web: web('WebDropdownMenuDocs'),
    // Native: not yet implemented
  },
  {
    path: 'form',
    title: 'Form',
    description: 'Building forms with React Hook Form and Zod.',
    web: web('WebFormDocs'),
  },
  {
    path: 'hover-card',
    title: 'Hover Card',
    description: 'For sighted users to preview content available behind a link.',
    web: web('WebHoverCardDocs'),
    // Native: not yet implemented
  },
  {
    path: 'input',
    title: 'Input',
    description: 'Displays a form input field or a component that looks like an input field.',
    web: web('WebInputDocs'),
    native: native('NativeInputDocs'),
  },
  {
    path: 'label',
    title: 'Label',
    description: 'Renders an accessible label associated with a form control.',
    web: web('WebLabelDocs'),
    native: native('NativeLabelDocs'),
  },
  {
    path: 'menubar',
    title: 'Menubar',
    description:
      'A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.',
    web: web('WebMenubarDocs'),
    // Native: not yet implemented
  },
  {
    path: 'navigation-menu',
    title: 'Navigation Menu',
    description: 'A collection of links for navigating websites.',
    web: web('WebNavigationMenuDocs'),
    // Native: not yet implemented
  },
  {
    path: 'pagination',
    title: 'Pagination',
    description: 'Pagination with next and previous buttons.',
    web: web('WebPaginationDocs'),
    // Native: not yet implemented
  },
  {
    path: 'popover',
    title: 'Popover',
    description: 'Displays rich content in a portal, triggered by a button.',
    web: web('WebPopoverDocs'),
    // Native: not yet implemented
  },
  {
    path: 'progress',
    title: 'Progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    web: web('WebProgressDocs'),
    // Native: not yet implemented
  },
  {
    path: 'radio-group',
    title: 'Radio Group',
    description:
      'A set of checkable buttons—known as radio buttons—where no more than one button can be checked at a time.',
    web: web('WebRadioGroupDocs'),
    native: native('NativeRadioGroupDocs'),
  },
  {
    path: 'select',
    title: 'Select',
    description: 'Displays a list of options for the user to pick from—triggered by a button.',
    web: web('WebSelectDocs'),
    native: native('NativeSelectDocs'),
  },
  {
    path: 'separator',
    title: 'Separator',
    description: 'Visually or semantically separates content.',
    web: web('WebSeparatorDocs'),
    native: native('NativeSeparatorDocs'),
  },
  {
    path: 'sheet',
    title: 'Sheet',
    description: 'Extends the Dialog component to display content that complements the main content of the screen.',
    web: web('WebSheetDocs'),
    native: native('NativeSheetDocs'),
  },
  {
    path: 'skeleton',
    title: 'Skeleton',
    description: 'Use to show a placeholder while content is loading.',
    web: web('WebSkeletonDocs'),
    native: native('NativeSkeletonDocs'),
  },
  {
    path: 'slider',
    title: 'Slider',
    description: 'An input where the user selects a value from within a given range.',
    web: web('WebSliderDocs'),
    // Native: not yet implemented
  },
  {
    path: 'sonner',
    title: 'Sonner',
    description: 'An opinionated toast component for React.',
    web: web('WebSonnerDocs'),
    // Native: not yet implemented (use Toast for native)
  },
  {
    path: 'switch',
    title: 'Switch',
    description: 'A control that allows the user to toggle between checked and not checked.',
    web: web('WebSwitchDocs'),
    native: native('NativeSwitchDocs'),
  },
  {
    path: 'table',
    title: 'Table',
    description: 'A responsive table component.',
    web: web('WebTableDocs'),
    native: native('NativeTableDocs'),
  },
  {
    path: 'tabs',
    title: 'Tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    web: web('WebTabsDocs'),
    native: native('NativeTabsDocs'),
  },
  {
    path: 'text',
    title: 'Text',
    description: 'Typography component for various text styles.',
    web: web('WebTextDocs'),
    native: native('NativeTextDocs'),
  },
  {
    path: 'textarea',
    title: 'Textarea',
    description: 'Displays a form textarea or a component that looks like a textarea.',
    web: web('WebTextareaDocs'),
    native: native('NativeTextareaDocs'),
  },
  {
    path: 'theme-toggle',
    title: 'Theme Toggle',
    description: 'A component that allows users to switch between light, dark, and system themes.',
    web: web('WebThemeToggleDocs'),
    native: native('NativeThemeToggleDocs'),
  },
  {
    path: 'search',
    title: 'Search',
    description: 'A searchable command palette for navigation and actions.',
    web: web('WebSearchDocs'),
    native: native('NativeSearchDocs'),
  },
  {
    path: 'toast',
    title: 'Toast',
    description: 'A succinct message that is displayed temporarily.',
    web: web('WebToastDocs'),
    native: native('NativeToastDocs'),
  },
  {
    path: 'toggle',
    title: 'Toggle',
    description: 'A two-state button that can be either on or off.',
    web: web('WebToggleDocs'),
    native: native('NativeToggleDocs'),
  },
  {
    path: 'toggle-group',
    title: 'Toggle Group',
    description: 'A set of two-state buttons that can be toggled on or off.',
    web: web('WebToggleGroupDocs'),
    native: native('NativeToggleGroupDocs'),
  },
  {
    path: 'tooltip',
    title: 'Tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    web: web('WebTooltipDocs'),
    native: native('NativeTooltipDocs'),
  },
];
