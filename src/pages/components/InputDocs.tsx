import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function InputDocs() {
  return (
    <ComponentSection title="Input" description="Displays a form input field for collecting user text input.">
      <ComponentShowcase
        title="Default"
        description="The default input field."
        code={`<Input type="text" placeholder="Enter text..." />`}
      >
        <Input type="text" placeholder="Enter text..." className="max-w-xs" />
      </ComponentShowcase>

      <ComponentShowcase
        title="With Label"
        description="Pair inputs with labels for accessibility."
        code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="File Input"
        description="Input for file uploads."
        code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="picture">Picture</Label>
  <Input id="picture" type="file" />
</div>`}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="Disabled"
        description="Disabled state prevents user interaction."
        code={`<Input disabled type="text" placeholder="Disabled" />`}
      >
        <Input disabled type="text" placeholder="Disabled" className="max-w-xs" />
      </ComponentShowcase>

      <ComponentShowcase
        title="With Button"
        description="Combine input with a button for search patterns."
        code={`<div className="flex w-full max-w-sm items-center space-x-2">
  <Input type="email" placeholder="Email" />
  <Button type="submit">Subscribe</Button>
</div>`}
      >
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </ComponentShowcase>
    </ComponentSection>
  );
}
