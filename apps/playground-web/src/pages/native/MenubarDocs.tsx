import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function MenubarDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A standard menubar for Native."
        code={`import { 
  Menubar, 
  MenubarMenu, 
  MenubarTrigger, 
  MenubarContent, 
  MenubarItem, 
  MenubarSeparator, 
  MenubarSub, 
  MenubarSubTrigger, 
  MenubarSubContent,
  Text 
} from '@gv-tech/design-system';

export function MenubarExample() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger><Text>File</Text></MenubarTrigger>
        <MenubarContent>
          <MenubarItem onSelect={() => console.log('new tab')}>
            <Text>New Tab</Text>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger><Text>Share</Text></MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem><Text>Email</Text></MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Menubar component for Native is built on top of <code>@rn-primitives/menubar</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">Menubar (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'string',
              description: 'The controlled value of the active menu.',
            },
            {
              name: 'onValueChange',
              type: '(value: string) => void',
              description: 'Event handler called when the active menu changes.',
            },
          ]}
        />
      </div>
    </>
  );
}
