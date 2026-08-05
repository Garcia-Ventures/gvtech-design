import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeChartDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="Chart"
        description="The native implementation of Chart is currently a shim and returns 'Not implemented'."
        code={`import { Chart } from '@gv-tech/ui-native';

export default function App() {
  return <Chart />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
