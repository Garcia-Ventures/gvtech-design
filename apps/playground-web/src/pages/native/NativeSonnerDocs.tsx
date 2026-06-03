import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeSonnerDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="Sonner"
        description="The native implementation of Sonner is currently a shim and returns 'Not implemented'."
        code={`import { Sonner } from '@gv-tech/ui-native';

export default function App() {
  return <Sonner />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
