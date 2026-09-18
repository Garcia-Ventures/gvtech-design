import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function BubbleDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="The Bubble component is currently a stub for Native."
        code={`import { Bubble } from "@gv-tech/design-system";

export function BubbleExample() {
  return <Bubble />;
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Status</h3>
        <p className="text-muted-foreground text-sm">
          The Bubble component for Native is currently a stub. The web implementation is complete. The stub preserves
          the export surface with View semantics until the full native implementation lands.
        </p>
      </div>
    </>
  );
}
