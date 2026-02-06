import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
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
    </ComponentSection>
  );
}
