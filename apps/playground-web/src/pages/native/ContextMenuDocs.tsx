import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function ContextMenuDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="Long-press to open the context menu on Native."
        code={`import { 
  ContextMenu, 
  ContextMenuTrigger, 
  ContextMenuContent, 
  ContextMenuItem, 
  ContextMenuSeparator, 
  ContextMenuSub, 
  ContextMenuSubTrigger, 
  ContextMenuSubContent,
  Text 
} from "@gv-tech/design-system";
import { View } from "react-native";

export function ContextMenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed">
        <Text className="text-sm">Long press here</Text>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem onSelect={() => console.log("Back")}>
          <Text>Back</Text>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          <Text>Forward</Text>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Text>More Tools</Text>
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              <Text>Save Page As...</Text>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Context Menu component for Native is built on top of <code>@rn-primitives/context-menu</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">ContextMenuItem</h4>
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
          ]}
        />
      </div>
    </>
  );
}
