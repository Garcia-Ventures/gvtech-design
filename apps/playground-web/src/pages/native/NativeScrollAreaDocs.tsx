import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeScrollAreaDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="ScrollArea"
        description="The native implementation of ScrollArea is currently a shim and returns 'Not implemented'."
        code={`import { ScrollArea } from '@gv-tech/ui-native';

export default function App() {
  return <ScrollArea />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
