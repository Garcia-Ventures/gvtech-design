import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Toggle } from '@/components/ui/toggle';
import { Bold, Italic, Underline } from 'lucide-react';

export function ToggleDocs() {
  return (
    <ComponentSection title="Toggle" description="A two-state button that can be either on or off.">
      <ComponentShowcase
        title="Default"
        description="A basic toggle button."
        code={`<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>`}
      >
        <Toggle aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
      </ComponentShowcase>

      <ComponentShowcase
        title="Variants"
        description="Toggle with outline variant."
        code={`<Toggle variant="outline" aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>`}
      >
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </ComponentShowcase>

      <ComponentShowcase
        title="With Text"
        description="Toggle with text content."
        code={`<Toggle aria-label="Toggle underline">
  <Underline className="h-4 w-4 mr-2" />
  Underline
</Toggle>`}
      >
        <Toggle aria-label="Toggle underline">
          <Underline className="h-4 w-4 mr-2" />
          Underline
        </Toggle>
      </ComponentShowcase>

      <ComponentShowcase
        title="Disabled"
        description="A disabled toggle."
        code={`<Toggle disabled aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>`}
      >
        <Toggle disabled aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
      </ComponentShowcase>
    </ComponentSection>
  );
}
