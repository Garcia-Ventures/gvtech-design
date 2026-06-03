import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeSliderDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="Slider"
        description="The native implementation of Slider is currently a shim and returns 'Not implemented'."
        code={`import { Slider } from '@gv-tech/ui-native';

export default function App() {
  return <Slider />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
