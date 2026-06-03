import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeFormDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="Form"
        description="The native implementation of Form is currently a shim and returns 'Not implemented'."
        code={`import { Form } from '@gv-tech/ui-native';

export default function App() {
  return <Form />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
