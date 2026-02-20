import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Alert, AlertDescription, AlertTitle } from '@gv-tech/ui-web';
import { AlertCircle, Info, Terminal } from 'lucide-react';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

export function AlertDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="The default alert style."
        code={`<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
      >
        <Alert className="max-w-lg">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>You can add components to your app using the cli.</AlertDescription>
        </Alert>
      </ComponentShowcase>

      <ComponentShowcase
        title="Destructive"
        description="Use the destructive variant for error messages."
        code={`<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}
      >
        <Alert variant="destructive" className="max-w-lg">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
        </Alert>
      </ComponentShowcase>

      <ComponentShowcase
        title="Warning"
        description="Use the warning variant for important notes or warnings."
        code={`<Alert variant="warning">
  <Info className="h-4 w-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    This action cannot be undone. Please proceed with caution.
  </AlertDescription>
</Alert>`}
      >
        <Alert variant="warning" className="max-w-lg">
          <Info className="h-4 w-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>This action cannot be undone. Please proceed with caution.</AlertDescription>
        </Alert>
      </ComponentShowcase>

      <ComponentShowcase
        title="Info"
        description="Use the info variant for informational messages."
        code={`<Alert variant="info">
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    A new software update is available. Please update as soon as possible.
  </AlertDescription>
</Alert>`}
      >
        <Alert variant="info" className="max-w-lg">
          <Info className="h-4 w-4" />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>A new software update is available. Please update as soon as possible.</AlertDescription>
        </Alert>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'variant',
              type: '"default" | "destructive" | "warning" | "info"',
              defaultValue: '"default"',
              description: 'The visual style of the alert.',
            },
            {
              name: 'className',
              type: 'string',
              description: isNative ? 'Tailwind (NativeWind) classes.' : 'Additional CSS classes to apply.',
            },
          ]}
        />
      </div>
    </>
  );
}
