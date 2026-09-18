import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeDrawerDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="Drawer"
        description="The native implementation of Drawer is currently a shim and returns 'Not implemented'."
        code={`import { Drawer } from '@gv-tech/ui-native';

export default function App() {
  return <Drawer />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
