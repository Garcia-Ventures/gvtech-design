import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function SheetDocs() {
  return (
    <ComponentSection
      title="Sheet"
      description="Extends the Dialog component to display content that complements the main screen."
    >
      <ComponentShowcase
        title="Default"
        description="A default sheet."
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input id="name" value="Pedro Duarte" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          Username
        </Label>
        <Input id="username" value="@peduarte" className="col-span-3" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" defaultValue="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Sheet component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/dialog"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Dialog
          </a>
          .
        </p>

        <h4 className="text-lg font-medium mt-6">Sheet (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the sheet.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
            {
              name: 'defaultOpen',
              type: 'boolean',
              description: 'The open state of the sheet when it is initially rendered.',
            },
            {
              name: 'modal',
              type: 'boolean',
              defaultValue: 'true',
              description: 'The modality of the sheet.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">SheetContent</h4>
        <PropsTable
          props={[
            {
              name: 'side',
              type: '"top" | "bottom" | "left" | "right"',
              defaultValue: '"right"',
              description: 'The side of the screen where the sheet appears.',
            },
            {
              name: 'onOpenAutoFocus',
              type: '(event: Event) => void',
              description: 'Event handler called when focus moves into the component after opening.',
            },
            {
              name: 'onCloseAutoFocus',
              type: '(event: Event) => void',
              description: 'Event handler called when focus moves to the trigger after closing.',
            },
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
            {
              name: 'onInteractOutside',
              type: '(event: PointerDownOutsideEvent | FocusOutsideEvent) => void',
              description:
                'Event handler called when an interaction (pointer or focus) happens outside the bounds of the component.',
            },
            {
              name: 'forceMount',
              type: 'boolean',
              description: 'Used to force mounting when more control is needed.',
            },
          ]}
        />
      </div>
    </ComponentSection>
  );
}
