import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function BadgeDocs() {
  return (
    <>
      <ComponentShowcase
        title="Variants"
        description="Badges come in 4 different variants."
        code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
      />

      <ComponentShowcase
        title="Use Cases"
        description="Common use cases for badges."
        code={`<Badge>New</Badge>
<Badge variant="secondary">Beta</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">v1.0.0</Badge>`}
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
              description: isNative ? 'Tailwind (NativeWind) classes.' : 'Additional CSS classes to apply.',
            },
            ...[
              {
                name: 'textClassName',
                type: 'string',
                description: 'Classes for the inner Text component (NativeWind).',
              },
            ],
          ]}
        />
      </div>
    </>
  );
}
