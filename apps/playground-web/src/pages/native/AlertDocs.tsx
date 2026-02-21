import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Info } from 'lucide-react';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Alert as WebAlert,
  AlertDescription as WebAlertDescription,
  AlertTitle as WebAlertTitle,
} from '@gv-tech/ui-web';

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function AlertDocs() {
  return (
    <>
      <WebAlert variant="warning" className="mb-6">
        <Info className="h-4 w-4 text-amber-600 dark:text-amber-400" />
        <WebAlertTitle>Native Preview</WebAlertTitle>
        <WebAlertDescription>
          This preview renders the actual <code className="bg-background rounded px-1">.native.tsx</code> component
          using <code className="bg-background rounded px-1">react-native-web</code>.
        </WebAlertDescription>
      </WebAlert>

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
      />

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
      />

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
      />

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
