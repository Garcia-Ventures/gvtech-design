import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function ComboboxDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="The Combobox component is currently a stub for Native."
        code={`import { Combobox } from "@gv-tech/design-system";

export function ComboboxExample() {
  return <Combobox />;
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Status</h3>
        <p className="text-muted-foreground text-sm">
          The Combobox component is currently not implemented for Native. For similar functionality, please use the{' '}
          <code>Search</code> or <code>Select</code> components.
        </p>
      </div>
    </>
  );
}
