import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Underline } from 'lucide-react';

export function ToggleGroupDocs() {
  return (
    <ComponentSection title="Toggle Group" description="A set of two-state buttons that can be toggled on or off.">
      <ComponentShowcase
        title="Single"
        description="Only one item can be pressed at a time."
        code={`<ToggleGroup type="single">
  <ToggleGroupItem value="left" aria-label="Left aligned">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Center aligned">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Right aligned">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="single">
          <ToggleGroupItem value="left" aria-label="Left aligned">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center aligned">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right aligned">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </ComponentShowcase>

      <ComponentShowcase
        title="Multiple"
        description="Multiple items can be pressed at the same time."
        code={`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </ComponentShowcase>

      <ComponentShowcase
        title="Outline Variant"
        description="Toggle group with outline styling."
        code={`<ToggleGroup variant="outline" type="single">
  <ToggleGroupItem value="left" aria-label="Left aligned">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Center aligned">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Right aligned">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup variant="outline" type="single">
          <ToggleGroupItem value="left" aria-label="Left aligned">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center aligned">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right aligned">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </ComponentShowcase>
    </ComponentSection>
  );
}
