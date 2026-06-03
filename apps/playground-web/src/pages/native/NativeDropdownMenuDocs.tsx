import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeDropdownMenuDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="DropdownMenu"
        description="The native implementation of DropdownMenu is currently a shim and returns 'Not implemented'."
        code={`import { DropdownMenu } from '@gv-tech/ui-native';

export default function App() {
  return <DropdownMenu />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
