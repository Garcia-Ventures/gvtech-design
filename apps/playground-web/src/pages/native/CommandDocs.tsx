import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function CommandDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="The command palette is currently a stub for Native."
        code={`import { Command } from "@gv-tech/design-system";

export function CommandExample() {
  return <Command />;
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Status</h3>
        <p className="text-muted-foreground text-sm">
          The Command component is currently not implemented for Native. It is recommended to use the{' '}
          <code>Search</code> component instead for similar patterns on mobile.
        </p>
      </div>
    </>
  );
}
