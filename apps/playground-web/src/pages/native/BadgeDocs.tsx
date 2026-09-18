import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function BadgeDocs() {
  return (
    <>
      <ComponentShowcase
        title="Variants"
        description="Badges come in 4 different variants on Native."
        code={`import { Badge, Text } from "@gv-tech/design-system";

export function BadgeVariants() {
  return (
    <>
      <Badge><Text>Default</Text></Badge>
      <Badge variant="secondary"><Text>Secondary</Text></Badge>
      <Badge variant="destructive"><Text>Destructive</Text></Badge>
      <Badge variant="outline"><Text>Outline</Text></Badge>
    </>
  );
}`}
      />

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
              description: 'NativeWind classes for the container.',
            },
            {
              name: 'textClassName',
              type: 'string',
              description: 'NativeWind classes for the inner Text component.',
            },
          ]}
        />
      </div>
    </>
  );
}
