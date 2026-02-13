import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface LabelDocsProps {
  platform?: 'web' | 'native';
}

export function LabelDocs({ platform = 'web' }: LabelDocsProps) {
  const isNative = platform === 'native';

  return (
    <ComponentSection
      title={`Label (${platform === 'web' ? 'Web' : 'Native'})`}
      description="Renders an accessible label associated with a form control."
    >
      <ComponentShowcase
        title="Default"
        description="A default label."
        code={isNative ? '<Label>Your Name</Label>' : '<Label htmlFor="terms">Accept terms and conditions</Label>'}
      >
        <div className="flex items-center space-x-2">
          {!isNative && <Checkbox id="terms" />}
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Label component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/label"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Label
          </a>
          .
        </p>
        <PropsTable
          props={[
            {
              name: 'htmlFor',
              type: 'string',
              description: 'The id of the element the label is associated with.',
            },
            {
              name: 'asChild',
              type: 'boolean',
              description: 'Change the default rendered element for the one passed as a child.',
            },
          ]}
        />
      </div>
    </ComponentSection>
  );
}
