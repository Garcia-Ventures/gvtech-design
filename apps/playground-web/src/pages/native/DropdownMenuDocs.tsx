import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function DropdownMenuDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A simple dropdown menu for Native."
        code={`import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  Button, 
  Text 
} from '@gv-tech/design-system';
import { User, Github } from 'lucide-react-native';

export function DropdownExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Text>Open Menu</Text>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <Text>My Account</Text>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => console.log('profile')}>
          <User size={14} className="text-foreground mr-2" />
          <Text>Profile</Text>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => console.log('github')}>
          <Github size={14} className="text-foreground mr-2" />
          <Text>GitHub</Text>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The DropdownMenu component for Native is built on top of <code>@rn-primitives/dropdown-menu</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">DropdownMenu (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the dropdown menu.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">DropdownMenuCheckboxItem</h4>
        <PropsTable
          props={[
            {
              name: 'checked',
              type: 'boolean',
              description: 'The controlled checked state of the item.',
            },
            {
              name: 'onCheckedChange',
              type: '(checked: boolean) => void',
              description: 'Event handler called when the checked state changes.',
            },
          ]}
        />
      </div>
    </>
  );
}
