import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function ChartDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="The Chart component is currently a stub for Native."
        code={`import { ChartContainer } from "@gv-tech/design-system";

export function ChartExample() {
  return <ChartContainer config={{}} />;
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Status</h3>
        <p className="text-muted-foreground text-sm">
          The Chart component for Native is currently a stub. Web charting (Recharts) relies on SVG and DOM APIs that do
          not map directly to mobile. A <code>victory-native</code> integration is planned.
        </p>
      </div>
    </>
  );
}
