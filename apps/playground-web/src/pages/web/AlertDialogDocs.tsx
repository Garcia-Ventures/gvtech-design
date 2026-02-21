import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from '@gv-tech/ui-web';

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

export function AlertDialogDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="An alert dialog for confirming destructive actions."
        code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete Account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our
                servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>

        <h4 className="mt-6 text-lg font-medium">AlertDialog (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the dialog.',
            },
            {
              name: 'defaultOpen',
              type: 'boolean',
              description: 'The default open state when initially rendered.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">AlertDialogTrigger</h4>
        <PropsTable
          props={[
            {
              name: 'asChild',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Change the default rendered element for the one passed as a child.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">AlertDialogContent</h4>
        <PropsTable
          props={[
            {
              name: 'forceMount',
              type: 'boolean',
              description: 'Used to force mounting when more control is needed.',
            },
            {
              name: 'onEscapeKeyDown',
              type: '(event: KeyboardEvent) => void',
              description: 'Event handler called when the escape key is pressed.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">AlertDialogAction</h4>
        <PropsTable
          props={[
            {
              name: 'asChild',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Change the default rendered element for the one passed as a child.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">AlertDialogCancel</h4>
        <PropsTable
          props={[
            {
              name: 'asChild',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Change the default rendered element for the one passed as a child.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes.',
            },
          ]}
        />
      </div>
    </>
  );
}
