import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function LabelDocs() {
  return (
    <ComponentSection title="Label" description="Renders an accessible label associated with form controls.">
      <ComponentShowcase
        title="Default"
        description="A basic label with an input."
        code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email-label">Email</Label>
          <Input type="email" id="email-label" placeholder="Email" />
        </div>
      </ComponentShowcase>
    </ComponentSection>
  );
}
