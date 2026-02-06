import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export function CheckboxDocs() {
  return (
    <ComponentSection
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
    >
      <ComponentShowcase title="Default" description="A basic checkbox." code={`<Checkbox id="terms" />`}>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="With Label"
        description="A checkbox with a label."
        code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Checkbox id="terms2" />
          <Label htmlFor="terms2">Accept terms and conditions</Label>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="Disabled"
        description="A disabled checkbox."
        code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms-disabled" disabled />
  <Label htmlFor="terms-disabled">Accept terms and conditions</Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Checkbox id="terms-disabled" disabled />
          <Label htmlFor="terms-disabled" className="text-muted-foreground">
            Accept terms and conditions
          </Label>
        </div>
      </ComponentShowcase>
    </ComponentSection>
  );
}
