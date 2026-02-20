import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function DropdownMenuDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A simple dropdown menu."
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      ...
    </DropdownMenuGroup>
    ...
    <DropdownMenuItem>
      <SiGithub className="mr-2 h-4 w-4" />
      <span>GitHub</span>
    </DropdownMenuItem>
    ...
  </DropdownMenuContent>
</DropdownMenu>`}
      />

      <ComponentShowcase
        title="Checkboxes and Radios"
        description="A dropdown menu with checkboxes and radio items."
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem
      checked={showStatusBar}
      onCheckedChange={setShowStatusBar}
    >
      Status Bar
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem
      checked={showActivityBar}
      onCheckedChange={setShowActivityBar}
      disabled
    >
      Activity Bar
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem
      checked={showPanel}
      onCheckedChange={setShowPanel}
    >
      Panel
    </DropdownMenuCheckboxItem>
    <DropdownMenuSeparator />
    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
      <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The DropdownMenu component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/dropdown-menu"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Dropdown Menu
          </a>
          .
        </p>

        <h4 className="text-lg font-medium mt-6">DropdownMenu (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the dropdown menu.',
            },
            {
              name: 'defaultOpen',
              type: 'boolean',
              description: 'The default open state when uncontrolled.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
            {
              name: 'modal',
              type: 'boolean',
              defaultValue: 'true',
              description: 'The modality of the dropdown menu.',
            },
            {
              name: 'dir',
              type: '"ltr" | "rtl"',
              description: 'The reading direction of the dropdown menu.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">DropdownMenuCheckboxItem</h4>
        <PropsTable
          props={[
            {
              name: 'checked',
              type: 'boolean | "indeterminate"',
              description: 'The controlled checked state of the item.',
            },
            {
              name: 'onCheckedChange',
              type: '(checked: boolean) => void',
              description: 'Event handler called when the checked state changes.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">DropdownMenuRadioGroup</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'string',
              description: 'The value of the selected item in the group.',
            },
            {
              name: 'onValueChange',
              type: '(value: string) => void',
              description: 'Event handler called when the value changes.',
            },
          ]}
        />
      </div>
    </>
  );
}
