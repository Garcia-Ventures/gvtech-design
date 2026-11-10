import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function ScrollAreaDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default scroll area."
        code={`import { ScrollArea, Text } from '@gv-tech/ui-native';

export function ScrollAreaExample() {
  return (
    <ScrollArea className="h-72">
      <Text>Long content</Text>
    </ScrollArea>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The ScrollArea component is built on top of the native{' '}
          <a href="https://reactnative.dev/docs/scrollview" className="underline" target="_blank" rel="noreferrer">
            React Native ScrollView
          </a>{' '}
          primitive and shows the platform scroll indicators. The web props <code>type</code>,{' '}
          <code>scrollHideDelay</code>, and <code>dir</code> stay on the shared contract. This wrapper does not apply
          them. <code>ScrollBar</code> renders nothing, because the platform draws the indicator.
        </p>

        <h4 className="mt-6 text-lg font-medium">ScrollArea (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'type',
              type: '"auto" | "always" | "scroll" | "hover"',
              defaultValue: '"hover"',
              description: 'Web scrollbar visibility. The native wrapper does not apply this.',
            },
            {
              name: 'scrollHideDelay',
              type: 'number',
              defaultValue: '600',
              description: 'Web hide delay. The native wrapper does not apply this.',
            },
            {
              name: 'dir',
              type: '"ltr" | "rtl"',
              description: 'Web reading direction. The native wrapper does not apply this.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">ScrollBar</h4>
        <PropsTable
          props={[
            {
              name: 'orientation',
              type: '"horizontal" | "vertical"',
              defaultValue: '"vertical"',
              description: 'Web scrollbar orientation. Native ScrollBar renders nothing.',
            },
            {
              name: 'forceMount',
              type: 'boolean',
              description: 'Used to force mounting when more control is needed.',
            },
          ]}
        />
      </div>
    </>
  );
}
