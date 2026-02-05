import { execSync } from 'child_process';

const components = [
  // Layout
  'accordion',
  'collapsible',
  'scroll-area',
  'separator',
  'tabs',
  // Inputs
  'input',
  'textarea',
  'checkbox',
  'radio-group',
  'select',
  'switch',
  'slider',
  'toggle',
  'date-picker', // Note: This might require multiple (calendar, popover, etc.)
  'form',
  // Feedback
  'alert',
  'badge',
  'progress',
  'skeleton',
  'toast',
  'tooltip',
  'sonner',
  // Overlay
  'dialog',
  'popover',
  'drawer',
  'sheet',
  'command',
  'alert-dialog',
  'hover-card',
  // Content
  'card',
  'table',
  'carousel',
  'calendar',
  'chart',
  'aspect-ratio',
  'avatar',
  'breadcrumb',
  'context-menu',
  'dropdown-menu',
  'menubar',
  'navigation-menu',
  'pagination',
  'resizable',
  'label',
  'menubar',
  'toggle-group',
];

console.log(`🚀 Starting batch import of ${components.length} components...`);

for (const component of components) {
  try {
    console.log(`📦 Adding ${component}...`);
    execSync(`npx shadcn@latest add ${component} --yes --overwrite`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`❌ Failed to add ${component}:`, error);
  }
}

console.log('✅ All components processed!');
