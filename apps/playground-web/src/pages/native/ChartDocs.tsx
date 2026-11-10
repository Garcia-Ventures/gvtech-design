import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function ChartDocs() {
  return (
    <ComponentShowcase
      title="Web only"
      description="Chart is not exported from @gv-tech/ui-native."
      code={`// Chart stays on the web. Recharts measures the DOM.
// Import { ChartContainer } from '@gv-tech/ui-web'.
// A native chart is not in progress. Open one when a product screen needs it.`}
    >
      <p className="text-muted-foreground text-sm">Use the web chart. There is no native substitute in this package.</p>
    </ComponentShowcase>
  );
}
