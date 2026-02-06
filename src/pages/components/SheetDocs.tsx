import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
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
      description="Extends the Dialog component to display content that complements the main content of the screen."
    >
      <ComponentShowcase
        title="Right (Default)"
        description="A sheet that slides in from the right side."
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>Make changes to your profile here.</SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" className="col-span-3" />
      </div>
    </div>
    <SheetFooter>
      <Button type="submit">Save changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
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
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </ComponentShowcase>

      <ComponentShowcase
        title="Left Side"
        description="A sheet that slides in from the left."
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Left</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
      <SheetDescription>Access your navigation menu.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Left</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>Access your navigation menu.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </ComponentShowcase>
    </ComponentSection>
  );
}
