import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function ButtonDocs() {
  return (
    <>
      <ComponentShowcase
        title="Variants"
        description="Buttons come in 6 different variants on Native."
        code={`import { Button, Text } from "@gv-tech/design-system";

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
        description="Buttons come in default, small, large, and icon sizes."
        code={`import { Button, Text } from "@gv-tech/design-system";
import { ChevronRight } from "lucide-react-native";

export function ButtonSizes() {
  return (
    <>
      <Button size="sm"><Text className="text-white">Small</Text></Button>
      <Button size="default"><Text className="text-white">Default</Text></Button>
      <Button size="lg"><Text className="text-white">Large</Text></Button>
      <Button size="icon"><ChevronRight size={18} className="text-white" /></Button>
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
              type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
              defaultValue: '"default"',
              description: 'The visual style of the button.',
            },
            {
              name: 'size',
              type: '"default" | "sm" | "lg" | "icon"',
              defaultValue: '"default"',
              description: 'The size of the button.',
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
