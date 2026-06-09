import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function InputDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default text input for Native."
        code={`import { Input } from "@gv-tech/design-system";

export function InputExample() {
  const [value, setValue] = React.useState("");

  return (
    <Input 
      placeholder="Email" 
      value={value} 
      onChangeText={setValue} 
    />
  );
}`}
      />

      <ComponentShowcase
        title="Disabled"
        description="A disabled input field."
        code={`import { Input } from "@gv-tech/design-system";

export function InputDisabled() {
  return <Input disabled placeholder="Disabled input" />;
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Input component for Native wraps the standard <code>TextInput</code> from React Native.
        </p>
        <PropsTable
          props={[
            {
              name: 'onChangeText',
              type: '(text: string) => void',
              description: 'Event handler called when the text changes.',
            },
            {
              name: 'value',
              type: 'string',
              description: 'The value of the input.',
            },
            {
              name: 'placeholder',
              type: 'string',
              description: 'The placeholder text.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'Whether the input is disabled.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'NativeWind classes.',
            },
          ]}
        />
      </div>
    </>
  );
}
