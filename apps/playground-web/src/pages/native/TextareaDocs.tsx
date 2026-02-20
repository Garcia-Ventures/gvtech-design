import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

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
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Textarea component accepts all standard HTML textarea attributes.
        </p>

        <h4 className="text-lg font-medium mt-6">Textarea</h4>
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
