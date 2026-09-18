import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function NavigationMenuDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A standard navigation menu for Native."
        code={`import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger, 
  NavigationMenuContent, 
  NavigationMenuLink,
  Text 
} from '@gv-tech/design-system';

export function NavExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><Text>Getting started</Text></NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink onPress={() => console.log('intro')}>
              <Text>Introduction</Text>
            </NavigationMenuLink>
            <NavigationMenuLink onPress={() => console.log('install')}>
              <Text>Installation</Text>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Navigation Menu component for Native is built on top of <code>@rn-primitives/navigation-menu</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">NavigationMenu (Root)</h4>
        <PropsTable
          props={[
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
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">NavigationMenuLink</h4>
        <PropsTable
          props={[
            {
              name: 'active',
              type: 'boolean',
              description: 'Used to identify the link as the currently active page.',
            },
            {
              name: 'onPress',
              type: '() => void',
              description: 'Native press event handler.',
            },
          ]}
        />
      </div>
    </>
  );
}
