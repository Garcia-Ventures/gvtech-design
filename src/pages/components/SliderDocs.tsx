import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Slider } from '@/components/ui/slider';

export function SliderDocs() {
  return (
    <ComponentSection title="Slider" description="An input where the user selects a value from within a given range.">
      <ComponentShowcase
        title="Default"
        description="A basic slider."
        code={`<Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />`}
      >
        <Slider defaultValue={[50]} max={100} step={1} className="w-full max-w-md" />
      </ComponentShowcase>

      <ComponentShowcase
        title="Range"
        description="A slider with multiple thumbs for selecting a range."
        code={`<Slider defaultValue={[25, 75]} max={100} step={1} className="w-[60%]" />`}
      >
        <Slider defaultValue={[25, 75]} max={100} step={1} className="w-full max-w-md" />
      </ComponentShowcase>
    </ComponentSection>
  );
}
