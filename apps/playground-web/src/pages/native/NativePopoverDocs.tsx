import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativePopoverDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="Popover"
        description="The native implementation of Popover is currently a shim and returns 'Not implemented'."
        code={`import { Popover } from '@gv-tech/ui-native';

export default function App() {
  return <Popover />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
