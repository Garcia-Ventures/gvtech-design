import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Label, Textarea } from '@gv-tech/ui-web';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

export function TextareaDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default textarea."
        code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>`}
      >
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Textarea component accepts all standard HTML textarea attributes.
        </p>

        <h4 className="mt-6 text-lg font-medium">Textarea</h4>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'Additional class names to apply.',
            },
            {
              name: 'placeholder',
              type: 'string',
              description: 'The placeholder object.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'Whether the textarea is disabled.',
            },
            {
              name: 'required',
              type: 'boolean',
              description: 'Whether the textarea is required.',
            },
          ]}
        />
      </div>
    </>
  );
}
