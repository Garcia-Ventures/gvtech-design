import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function MarkerDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="The Marker component is currently a stub for Native."
        code={`import { Marker } from "@gv-tech/design-system";

export function MarkerExample() {
  return <Marker />;
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Status</h3>
        <p className="text-muted-foreground text-sm">
          The Marker component for Native is currently a stub. The web implementation is complete. The stub preserves
          the export surface with View semantics until the full native implementation lands.
        </p>
      </div>
    </>
  );
}
