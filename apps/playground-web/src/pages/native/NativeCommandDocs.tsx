import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeCommandDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="Command"
        description="The native implementation of Command is currently a shim and returns 'Not implemented'."
        code={`import { Command } from '@gv-tech/ui-native';

export default function App() {
  return <Command />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
