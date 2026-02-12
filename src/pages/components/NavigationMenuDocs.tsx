import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import React from 'react';

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';

export function NavigationMenuDocs() {
  return (
    <ComponentSection title="Navigation Menu" description="A collection of links for navigating websites.">
      <ComponentShowcase
        title="Default"
        description="A standard navigation menu."
        code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="mb-2 mt-4 text-lg font-medium">
                  shadcn/ui
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Beautifully designed components built with Radix UI and
                  Tailwind CSS.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <ListItem href="/docs" title="Introduction">
            Re-usable components built using Radix UI and Tailwind CSS.
          </ListItem>
          <ListItem href="/docs/installation" title="Installation">
            How to install dependencies and structure your app.
          </ListItem>
          <ListItem href="/docs/primitives/typography" title="Typography">
            Styles for headings, paragraphs, lists...etc
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          <ListItem title="Alert Dialog" href="/docs/primitives/alert-dialog">
            A modal dialog that interrupts the user with important content.
          </ListItem>
          <ListItem title="Hover Card" href="/docs/primitives/hover-card">
            For sighted users to preview content available behind a link.
          </ListItem>
          <ListItem title="Progress" href="/docs/primitives/progress">
            Displays an indicator showing the completion progress of a task.
          </ListItem>
          <ListItem title="Scroll-area" href="/docs/primitives/scroll-area">
            Visually or semantically separates content.
          </ListItem>
          <ListItem title="Tabs" href="/docs/primitives/tabs">
            A set of layered sections of content—known as tab panels.
          </ListItem>
          <ListItem title="Tooltip" href="/docs/primitives/tooltip">
            A popup that displays information related to an element.
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <a href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Documentation
        </NavigationMenuLink>
      </a>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <ListItem title="Alert Dialog" href="/docs/primitives/alert-dialog">
                    A modal dialog that interrupts the user with important content.
                  </ListItem>
                  <ListItem title="Hover Card" href="/docs/primitives/hover-card">
                    For sighted users to preview content available behind a link.
                  </ListItem>
                  <ListItem title="Progress" href="/docs/primitives/progress">
                    Displays an indicator showing the completion progress of a task.
                  </ListItem>
                  <ListItem title="Scroll-area" href="/docs/primitives/scroll-area">
                    Visually or semantically separates content.
                  </ListItem>
                  <ListItem title="Tabs" href="/docs/primitives/tabs">
                    A set of layered sections of content—known as tab panels.
                  </ListItem>
                  <ListItem title="Tooltip" href="/docs/primitives/tooltip">
                    A popup that displays information related to an element.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/docs">
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Navigation Menu component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/navigation-menu"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Navigation Menu
          </a>
          .
        </p>

        <h4 className="text-lg font-medium mt-6">NavigationMenu (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'defaultValue',
              type: 'string',
              description: 'The value of the menu item that should be active when initially rendered.',
            },
            {
              name: 'value',
              type: 'string',
              description: 'The controlled value of the active menu item.',
            },
            {
              name: 'onValueChange',
              type: '(value: string) => void',
              description: 'Event handler called when the value changes.',
            },
            {
              name: 'delayDuration',
              type: 'number',
              defaultValue: '200',
              description: 'The duration from when the mouse enters the trigger until the content opens.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">NavigationMenuContent</h4>
        <PropsTable
          props={[
            {
              name: 'onEscapeKeyDown',
              type: '(event: KeyboardEvent) => void',
              description: 'Event handler called when the escape key is down.',
            },
            {
              name: 'onPointerDownOutside',
              type: '(event: PointerDownOutsideEvent) => void',
              description: 'Event handler called when a pointer event occurs outside the bounds of the component.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">NavigationMenuLink</h4>
        <PropsTable
          props={[
            {
              name: 'active',
              type: 'boolean',
              description: 'Used to identify the link as the currently active page.',
            },
            {
              name: 'onSelect',
              type: '(event: Event) => void',
              description: 'Event handler called when the link is selected.',
            },
          ]}
        />
      </div>
    </ComponentSection>
  );
}
