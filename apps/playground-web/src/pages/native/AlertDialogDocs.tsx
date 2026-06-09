import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function AlertDialogDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="An alert dialog for confirming destructive actions on Native."
        code={`import { 
  AlertDialog, 
  AlertDialogTrigger, 
  AlertDialogContent, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogCancel, 
  AlertDialogAction,
  Button,
  Text
} from "@gv-tech/design-system";

export function AlertDialogExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Text className="text-white">Delete Account</Text>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">
              <Text>Cancel</Text>
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
             <Button>
              <Text className="text-white">Continue</Text>
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The AlertDialog component for Native is built on top of <code>@rn-primitives/alert-dialog</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">AlertDialog (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the dialog.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">AlertDialogContent</h4>
        <PropsTable
          props={[
            {
              name: 'portalHost',
              type: 'string',
              description: 'Optional portal host to render into.',
            },
          ]}
        />
      </div>
    </>
  );
}
