import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Button } from '@gv-tech/ui-web';
import { ChevronRight, Loader2, Mail } from 'lucide-react';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

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
      >
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="Sizes"
        description="Buttons come in default, small, large, and icon sizes."
        code={`<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><ChevronRight className="h-4 w-4" /></Button>`}
      >
        <Button size="default">Default</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="With Icon"
        description="You can add icons to buttons for additional context."
        code={`<Button>
  <Mail className="mr-2 h-4 w-4" /> Login with Email
</Button>`}
      >
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="Loading State"
        description="Use the disabled attribute with a spinner for loading states."
        code={`<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`}
      >
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="Disabled"
        description="Buttons can be disabled to prevent interaction."
        code={`<Button disabled>Disabled</Button>`}
      >
        <Button disabled>Disabled</Button>
      </ComponentShowcase>

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
              name: 'asChild',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Whether to render as a child component (delegation).',
            },
            {
              name: 'onClick',
              type: 'MouseEventHandler',
              description: 'Web click event handler.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes to apply.',
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
