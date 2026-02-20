import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function ToastDocs() {
  return (
    <>
      <div className="bg-muted/50 border rounded-lg p-6 space-y-4 mb-8">
        <h3 className="text-lg font-semibold">Which to use?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h4 className="font-medium text-primary">Toast (Radix UI)</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based on Radix UI. Provides more granular control over individual toast elements. Uses the{' '}
              <code>useToast</code> hook and is best for situations requiring manual state management or complex, custom
              toast behavior.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-primary">Sonner</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An opinionated, modern alternative. Features automatic stacking, swipe-to-dismiss, and a simpler API (
              <code>toast("message")</code>). Best for general feedback and high-quality UX with minimal effort.
            </p>
          </div>
        </div>
      </div>

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
      />

      <ComponentShowcase
        title="Destructive"
        description="A destructive toast."
        code={`const { toast } = useToast()
 
 <Button
   variant="outline"
   onClick={() => {
     toast({
       variant: "destructive",
       title: "Uh oh! Something went wrong.",
       description: "There was a problem with your request.",
     })
   }}
 >
   Show Toast
 </Button>`}
      />
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
    </>
  );
}
