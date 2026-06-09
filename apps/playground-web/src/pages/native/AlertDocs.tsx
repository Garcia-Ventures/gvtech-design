import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function AlertDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="The default alert style on Native."
        code={`import { Alert, AlertTitle, AlertDescription } from "@gv-tech/design-system";
import { Terminal } from "lucide-react-native";

export function AlertExample() {
  return (
    <Alert>
      <Terminal size={16} className="text-foreground" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}`}
      />

      <ComponentShowcase
        title="Destructive"
        description="Use the destructive variant for error messages on Native."
        code={`import { Alert, AlertTitle, AlertDescription } from "@gv-tech/design-system";
import { AlertCircle } from "lucide-react-native";

export function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertCircle size={16} className="text-destructive" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  );
}`}
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
              description: 'NativeWind classes.',
            },
          ]}
        />
      </div>
    </>
  );
}
