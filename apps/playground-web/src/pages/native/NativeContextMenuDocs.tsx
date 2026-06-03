import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeContextMenuDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="ContextMenu"
        description="The native implementation of ContextMenu is currently a shim and returns 'Not implemented'."
        code={`import { ContextMenu } from '@gv-tech/ui-native';

export default function App() {
  return <ContextMenu />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
