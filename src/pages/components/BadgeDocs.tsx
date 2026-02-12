import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Badge } from '@/components/ui/badge';

export function BadgeDocs() {
  return (
    <ComponentSection title="Badge" description="Displays a badge or a component that looks like a badge.">
      <ComponentShowcase
        title="Variants"
        description="Badges come in 4 different variants."
        code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
      >
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </ComponentShowcase>

      <ComponentShowcase
        title="Use Cases"
        description="Common use cases for badges."
        code={`<Badge>New</Badge>
<Badge variant="secondary">Beta</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">v1.0.0</Badge>`}
      >
        <Badge>New</Badge>
        <Badge variant="secondary">Beta</Badge>
        <Badge variant="destructive">Error</Badge>
        <Badge variant="outline">v1.0.0</Badge>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'variant',
              type: '"default" | "secondary" | "destructive" | "outline"',
              defaultValue: '"default"',
              description: 'The visual style of the badge.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes to apply.',
            },
          ]}
        />
      </div>
    </ComponentSection>
  );
}
