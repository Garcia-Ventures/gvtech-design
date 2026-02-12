import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function ToastDocs() {
  const { toast } = useToast();

  return (
    <ComponentSection title="Toast" description="A succinct message that is displayed temporarily.">
      <ComponentShowcase
        title="Default"
        description="A default toast."
        code={`const { toast } = useToast()

<Button
  variant="outline"
  onClick={() => {
    toast({
      description: "Your message has been sent.",
    })
  }}
>
  Show Toast
</Button>`}
      >
        <Button
          variant="outline"
          onClick={() => {
            toast({
              description: 'Your message has been sent.',
            });
          }}
        >
          Show Toast
        </Button>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Toast component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/toast"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Toast
          </a>
          .
        </p>

        <h4 className="text-lg font-medium mt-6">Toast (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'variant',
              type: '"default" | "destructive"',
              defaultValue: '"default"',
              description: 'The visual variant of the toast.',
            },
            {
              name: 'duration',
              type: 'number',
              defaultValue: '5000',
              description: 'The time in milliseconds that the toast should remain visible for.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">Toaster</h4>
        <p className="text-sm text-muted-foreground">The Toaster component renders all active toasts.</p>

        <h4 className="text-lg font-medium mt-6">useToast</h4>
        <p className="text-sm text-muted-foreground">The `useToast` hook is used to trigger toasts.</p>
        <PropsTable
          props={[
            {
              name: 'toast',
              type: 'function',
              description: 'Function to trigger a new toast. Returns an object with `id`, `dismiss`, and `update`.',
            },
          ]}
        />
      </div>
    </ComponentSection>
  );
}
