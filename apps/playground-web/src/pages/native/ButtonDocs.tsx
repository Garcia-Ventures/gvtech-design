import { buttonSizeValues, buttonVariantValues } from '@gv-tech/ui-core';

import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { buttonSizeLabel, buttonSizeType, buttonVariantType, isIconButtonSize } from '@/lib/button-contract-docs';

const sizeExample = buttonSizeValues
  .map((size) =>
    isIconButtonSize(size)
      ? `      <Button size="${size}" accessibilityLabel="${buttonSizeLabel(size)}"><ChevronRight size={16} /></Button>`
      : `      <Button size="${size}"><Text>${buttonSizeLabel(size)}</Text></Button>`,
  )
  .join('\n');

export function ButtonDocs() {
  return (
    <>
      <ComponentShowcase
        title="Variants"
        description="Buttons come in 6 different variants on Native."
        code={`import { Button, Text } from "@gv-tech/ui-native";

export function ButtonVariants() {
  return (
    <>
      <Button variant="default"><Text className="text-white">Default</Text></Button>
      <Button variant="secondary"><Text>Secondary</Text></Button>
      <Button variant="destructive"><Text className="text-white">Destructive</Text></Button>
      <Button variant="outline"><Text>Outline</Text></Button>
      <Button variant="ghost"><Text>Ghost</Text></Button>
      <Button variant="link"><Text>Link</Text></Button>
    </>
  );
}`}
      />

      <ComponentShowcase
        title="Sizes"
        description="Every size declared on the shared button contract."
        code={`import { Button, Text } from "@gv-tech/ui-native";
import { ChevronRight } from "lucide-react-native";

export function ButtonSizes() {
  return (
    <>
${sizeExample}
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
              type: buttonVariantType,
              defaultValue: '"default"',
              description: `The visual style of the button. Values: ${buttonVariantValues.join(', ')}.`,
            },
            {
              name: 'size',
              type: buttonSizeType,
              defaultValue: '"default"',
              description: `The size of the button. Values: ${buttonSizeValues.join(', ')}.`,
            },
            {
              name: 'onPress',
              type: '() => void',
              description: 'Native press event handler.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Whether the button is disabled.',
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
