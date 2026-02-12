import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function SonnerDocs() {
  return (
    <ComponentSection title="Sonner" description="An opinionated toast component for React.">
      <div className="bg-muted/50 border rounded-lg p-6 space-y-4 mb-8">
        <h3 className="text-lg font-semibold">Which to use?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h4 className="font-medium text-primary">Sonner</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Designed for modern applications. It stacks automatically, looks great by default, and uses a very simple
              function call (<code>toast()</code>) that can be used anywhere—no hooks required.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-primary">Toast (Radix UI)</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Traditional Radix UI based toasts. Use this if you need deep programmatic control over the toast lifecycle
              or if you require specific accessibility patterns not covered by Sonner.
            </p>
          </div>
        </div>
      </div>

      <ComponentShowcase
        title="Default"
        description="A default toast."
        code={`<Button
  variant="outline"
  onClick={() =>
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }
>
  Show Toast
</Button>`}
      >
        <Button
          variant="outline"
          onClick={() =>
            toast('Event has been created', {
              description: 'Sunday, December 03, 2023 at 9:00 AM',
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo'),
              },
            })
          }
        >
          Show Toast
        </Button>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Sonner component is based on{' '}
          <a href="https://sonner.emilkowal.ski/" className="underline" target="_blank" rel="noreferrer">
            Sonner
          </a>
          .
        </p>

        <h4 className="text-lg font-medium mt-6">Toaster</h4>
        <PropsTable
          props={[
            {
              name: 'theme',
              type: '"light" | "dark" | "system"',
              description: 'The theme of the toast.',
            },
            {
              name: 'richColors',
              type: 'boolean',
              description: 'Makes the toast colorful based on the type.',
            },
            {
              name: 'expand',
              type: 'boolean',
              description: 'Expands the toast to show the full content.',
            },
            {
              name: 'duration',
              type: 'number',
              description: 'Duration in milliseconds.',
            },
            {
              name: 'visibleToasts',
              type: 'number',
              description: 'Number of visible toasts.',
            },
            {
              name: 'closeButton',
              type: 'boolean',
              description: 'Shows a close button.',
            },
            {
              name: 'position',
              type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"',
              defaultValue: '"bottom-right"',
              description: 'Position of the toast.',
            },
          ]}
        />
      </div>
    </ComponentSection>
  );
}
