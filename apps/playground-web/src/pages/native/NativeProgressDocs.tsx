import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeProgressDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="Progress"
        description="The native implementation of Progress is currently a shim and returns 'Not implemented'."
        code={`import { Progress } from '@gv-tech/ui-native';

export default function App() {
  return <Progress />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
