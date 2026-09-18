import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function ProgressDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default progress bar for Native."
        code={`import { Progress } from "@gv-tech/design-system";

export function ProgressExample() {
  return <Progress value={33} />;
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Progress component for Native is implemented using a <code>View</code>-based container and indicator.
        </p>

        <h4 className="mt-6 text-lg font-medium">Progress (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'number',
              description: 'The progress value (0 to 100).',
            },
            {
              name: 'className',
              type: 'string',
              description: 'NativeWind classes for the container.',
            },
          ]}
        />
      </div>
    </>
  );
}
