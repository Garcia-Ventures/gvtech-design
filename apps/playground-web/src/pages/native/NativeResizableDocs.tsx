import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeResizableDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="Resizable"
        description="The native implementation of Resizable is currently a shim and returns 'Not implemented'."
        code={`import { Resizable } from '@gv-tech/ui-native';

export default function App() {
  return <Resizable />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
