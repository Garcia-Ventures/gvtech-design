import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function FormDocs() {
  return (
    <ComponentSection title="Form" description="Building forms with React Hook Form and Zod validation.">
      <ComponentShowcase
        title="Basic Form"
        description="A simple form layout with labels and inputs."
        code={`<form className="space-y-4 w-full max-w-sm">
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" placeholder="Enter your email" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="password">Password</Label>
    <Input type="password" id="password" placeholder="Enter your password" />
  </div>
  <Button type="submit" className="w-full">Submit</Button>
</form>`}
      >
        <form className="space-y-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Enter your password" />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </ComponentShowcase>

      <ComponentShowcase
        title="Inline Form"
        description="A horizontal form layout for compact displays."
        code={`<form className="flex gap-2 items-end w-full max-w-md">
  <div className="flex-1 space-y-2">
    <Label htmlFor="inline-email">Email</Label>
    <Input type="email" id="inline-email" placeholder="Enter your email" />
  </div>
  <Button type="submit">Subscribe</Button>
</form>`}
      >
        <form className="flex gap-2 items-end w-full max-w-md">
          <div className="flex-1 space-y-2">
            <Label htmlFor="inline-email">Email</Label>
            <Input type="email" id="inline-email" placeholder="Enter your email" />
          </div>
          <Button type="submit">Subscribe</Button>
        </form>
      </ComponentShowcase>

      <ComponentShowcase
        title="Form with Description"
        description="Form fields with helper text below."
        code={`<form className="space-y-4 w-full max-w-sm">
  <div className="space-y-2">
    <Label htmlFor="username">Username</Label>
    <Input id="username" placeholder="johndoe" />
    <p className="text-sm text-muted-foreground">
      This is your public display name.
    </p>
  </div>
  <Button type="submit">Save changes</Button>
</form>`}
      >
        <form className="space-y-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="johndoe" />
            <p className="text-sm text-muted-foreground">This is your public display name.</p>
          </div>
          <Button type="submit">Save changes</Button>
        </form>
      </ComponentShowcase>
    </ComponentSection>
  );
}
