import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeMenubarDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="Menubar"
        description="The native implementation of Menubar is currently a shim and returns 'Not implemented'."
        code={`import { Menubar } from '@gv-tech/ui-native';

export default function App() {
  return <Menubar />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
