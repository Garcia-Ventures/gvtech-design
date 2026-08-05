import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function ToastDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default toast for Native."
        code={`import { useToast, Button, Text } from "@gv-tech/design-system";

export function ToastExample() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onPress={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
    >
      <Text>Show Toast</Text>
    </Button>
  );
}`}
      />

      <ComponentShowcase
        title="Destructive"
        description="A destructive toast for Native."
        code={`import { useToast, Button, Text } from "@gv-tech/design-system";

export function ToastDestructive() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onPress={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      }}
    >
      <Text>Show Toast</Text>
    </Button>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Toast component for Native is built on top of <code>@rn-primitives/toast</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">useToast</h4>
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
