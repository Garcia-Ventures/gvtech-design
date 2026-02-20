import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
// @ts-nocheck

export function ButtonDocs() {
  return (
    <>
      <ComponentShowcase
        title="Variants"
        description="The button comes in 6 different variants."
        code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
      />

      <ComponentShowcase
        title="Sizes"
        description="Buttons come in default, small, large, and icon sizes."
        code={`import { Button } from "@gv-tech/design-system";

<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><ChevronRight size={18} /></Button>`}
      />

      <ComponentShowcase
        title="With Icon"
        description="You can add icons to buttons for additional context."
        code={`import { Button } from "@gv-tech/design-system";

<Button onPress={() => console.log("Pressed")}>
  <Mail size={18} color="white" />
  <Text className="text-white ml-2">Login with Email</Text>
</Button>`}
      />

      <ComponentShowcase
        title="Loading State"
        description="Use the disabled attribute with a spinner for loading states."
        code={`import { Button } from "@gv-tech/design-system";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isNative = true as boolean;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const platform = 'native' as string;

<Button disabled>
  <Loader2 size={18} className="animate-spin text-white" />
  <Text className="text-white ml-2">Please wait</Text>
</Button>`}
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
              name: 'className',
              type: 'string',
              description: 'Tailwind (NativeWind) classes.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Whether the button is disabled.',
            },
          ]}
        />
      </div>
    </>
  );
}
