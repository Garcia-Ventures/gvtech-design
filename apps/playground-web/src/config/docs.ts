export type DocPlatform = 'web' | 'native';

export interface DocItem {
  title: string;
  href: string; // URL path segment (e.g., 'button')
  platforms: DocPlatform[];
  description?: string;
  component?: React.ComponentType<{ platform: DocPlatform }>; // The docs component
}

export interface DocCategory {
  title: string;
  items: DocItem[];
}

// We'll import the actual components in App.tsx to keep the config lightweight if we want
// but for now, to make the loop work, we might need to reference them differently
// or just export the structure and map it in App.tsx.
// Let's stick to a pure config structure and map in App.tsx to avoid circular deps if configs grow.
// Actually, mapping in App.tsx is safer.

export const docConfig: DocCategory[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Introduction',
        href: 'getting-started',
        platforms: ['web', 'native'],
      },
      {
        title: 'Installation',
        href: 'installation',
        platforms: ['web', 'native'],
      },
      {
        title: 'Theming',
        href: 'theming',
        platforms: ['web', 'native'],
      },
    ],
  },
  {
    title: 'Layout',
    items: [
      {
        title: 'Aspect Ratio',
        href: 'aspect-ratio',
        platforms: ['web'],
      },
      {
        title: 'Resizable',
        href: 'resizable',
        platforms: ['web'],
      },
      {
        title: 'Scroll Area',
        href: 'scroll-area',
        platforms: ['web'],
      },
      {
        title: 'Separator',
        href: 'separator',
        platforms: ['web', 'native'],
      },
    ],
  },
  {
    title: 'Forms',
    items: [
      {
        title: 'Button',
        href: 'button',
        platforms: ['web', 'native'],
      },
      {
        title: 'Checkbox',
        href: 'checkbox',
        platforms: ['web', 'native'],
      },
      {
        title: 'Form',
        href: 'form',
        platforms: ['web'],
      },
      {
        title: 'Input',
        href: 'input',
        platforms: ['web', 'native'],
      },
      {
        title: 'Label',
        href: 'label',
        platforms: ['web', 'native'],
      },
      {
        title: 'Radio Group',
        href: 'radio-group',
        platforms: ['web', 'native'],
      },
      {
        title: 'Select',
        href: 'select',
        platforms: ['web', 'native'],
      },
      {
        title: 'Slider',
        href: 'slider',
        platforms: ['web'],
      },
      {
        title: 'Switch',
        href: 'switch',
        platforms: ['web', 'native'],
      },
      {
        title: 'Textarea',
        href: 'textarea',
        platforms: ['web', 'native'],
      },
      {
        title: 'Toggle',
        href: 'toggle',
        platforms: ['web', 'native'],
      },
      {
        title: 'Toggle Group',
        href: 'toggle-group',
        platforms: ['web', 'native'],
      },
    ],
  },
  {
    title: 'Data Display',
    items: [
      {
        title: 'Accordion',
        href: 'accordion',
        platforms: ['web', 'native'],
      },
      {
        title: 'Alert',
        href: 'alert',
        platforms: ['web', 'native'],
      },
      {
        title: 'Avatar',
        href: 'avatar',
        platforms: ['web', 'native'],
      },
      {
        title: 'Badge',
        href: 'badge',
        platforms: ['web', 'native'],
      },
      {
        title: 'Calendar',
        href: 'calendar',
        platforms: ['web'],
      },
      {
        title: 'Card',
        href: 'card',
        platforms: ['web', 'native'],
      },
      {
        title: 'Carousel',
        href: 'carousel',
        platforms: ['web'],
      },
      {
        title: 'Chart',
        href: 'chart',
        platforms: ['web'],
      },
      {
        title: 'Collapsible',
        href: 'collapsible',
        platforms: ['web', 'native'],
      },
      {
        title: 'Table',
        href: 'table',
        platforms: ['web', 'native'],
      },
    ],
  },
  {
    title: 'Feedback',
    items: [
      {
        title: 'Alert Dialog',
        href: 'alert-dialog',
        platforms: ['web', 'native'],
      },
      {
        title: 'Dialog',
        href: 'dialog',
        platforms: ['web', 'native'],
      },
      {
        title: 'Hover Card',
        href: 'hover-card',
        platforms: ['web'],
      },
      {
        title: 'Popover',
        href: 'popover',
        platforms: ['web'],
      },
      {
        title: 'Progress',
        href: 'progress',
        platforms: ['web'],
      },
      {
        title: 'Skeleton',
        href: 'skeleton',
        platforms: ['web', 'native'],
      },
      {
        title: 'Sonner',
        href: 'sonner',
        platforms: ['web'],
      },
      {
        title: 'Toast',
        href: 'toast',
        platforms: ['web', 'native'],
      },
      {
        title: 'Tooltip',
        href: 'tooltip',
        platforms: ['web', 'native'],
      },
    ],
  },
  {
    title: 'Navigation',
    items: [
      {
        title: 'Breadcrumb',
        href: 'breadcrumb',
        platforms: ['web'],
      },
      {
        title: 'Command',
        href: 'command',
        platforms: ['web'],
      },
      {
        title: 'Context Menu',
        href: 'context-menu',
        platforms: ['web'],
      },
      {
        title: 'Drawer',
        href: 'drawer',
        platforms: ['web'],
      },
      {
        title: 'Dropdown Menu',
        href: 'dropdown-menu',
        platforms: ['web'],
      },
      {
        title: 'Menubar',
        href: 'menubar',
        platforms: ['web'],
      },
      {
        title: 'Navigation Menu',
        href: 'navigation-menu',
        platforms: ['web'],
      },
      {
        title: 'Pagination',
        href: 'pagination',
        platforms: ['web'],
      },
      {
        title: 'Sheet',
        href: 'sheet',
        platforms: ['web', 'native'],
      },
      {
        title: 'Tabs',
        href: 'tabs',
        platforms: ['web', 'native'],
      },
    ],
  },
];
