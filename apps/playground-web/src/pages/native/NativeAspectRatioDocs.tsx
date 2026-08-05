import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeAspectRatioDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="AspectRatio"
        description="The native implementation of AspectRatio is currently a shim and returns 'Not implemented'."
        code={`import { AspectRatio } from '@gv-tech/ui-native';

export default function App() {
  return <AspectRatio />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
