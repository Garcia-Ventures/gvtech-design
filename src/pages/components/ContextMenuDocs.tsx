import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

export function ContextMenuDocs() {
  return (
    <ComponentSection
      title="Context Menu"
      description="Displays a menu to the user—such as a set of actions or functions—triggered by right-click."
    >
      <ComponentShowcase
        title="Default"
        description="Right-click to open the context menu."
        code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>
      Back
      <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem disabled>
      Forward
      <ContextMenuShortcut>⌘]</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Reload
      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Save Page As...</ContextMenuItem>
        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Developer Tools</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem>
      View Page Source
      <ContextMenuShortcut>⌘U</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
      >
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled>
              Forward
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Reload
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>Save Page As...</ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem>
              View Page Source
              <ContextMenuShortcut>⌘U</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Context Menu component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/context-menu"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Context Menu
          </a>
          .
        </p>
        <h4 className="text-lg font-medium mt-6">ContextMenu (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
            {
              name: 'modal',
              type: 'boolean',
              defaultValue: 'true',
              description: 'The modality of the context menu.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">ContextMenuTrigger</h4>
        <PropsTable
          props={[
            {
              name: 'disabled',
              type: 'boolean',
              description: 'Whether the trigger is disabled.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">ContextMenuItem</h4>
        <PropsTable
          props={[
            {
              name: 'onSelect',
              type: '(event: Event) => void',
              description: 'Event handler called when the item is selected.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'Whether the item is disabled.',
            },
            {
              name: 'textValue',
              type: 'string',
              description: 'Text representation of the item for typeahead support.',
            },
          ]}
        />
      </div>
    </ComponentSection>
  );
}
