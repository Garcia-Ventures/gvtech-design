import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function TextareaDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default textarea for Native."
        code={`import { Textarea, Label } from "@gv-tech/design-system";
import { View } from "react-native";

export function TextareaExample() {
  return (
    <View className="grid w-full gap-1.5">
      <Label nativeID="message">Your message</Label>
      <Textarea placeholder="Type your message here." nativeID="message" />
    </View>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Textarea component for Native wraps the standard <code>TextInput</code> with <code>multiline</code>{' '}
          enabled.
        </p>

        <h4 className="mt-6 text-lg font-medium">Textarea</h4>
        <PropsTable
          props={[
            {
              name: 'onChangeText',
              type: '(text: string) => void',
              description: 'Event handler called when the text changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              description: 'The placeholder text.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'Whether the textarea is disabled.',
            },
          ]}
        />
      </div>
    </>
  );
}
