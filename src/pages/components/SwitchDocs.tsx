import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function SwitchDocs() {
  return (
    <ComponentSection title="Switch" description="A control that allows the user to toggle between two states.">
      <ComponentShowcase title="Default" description="A basic switch component." code={`<Switch />`}>
        <Switch />
      </ComponentShowcase>

      <ComponentShowcase
        title="With Label"
        description="A switch with a label."
        code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </ComponentShowcase>

      <ComponentShowcase title="Disabled" description="A disabled switch." code={`<Switch disabled />`}>
        <Switch disabled />
      </ComponentShowcase>
    </ComponentSection>
  );
}
