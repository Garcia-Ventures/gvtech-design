import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function CalendarDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="The Calendar component is currently a stub for Native."
        code={`import { Calendar } from "@gv-tech/design-system";

export function CalendarExample() {
  return <Calendar />;
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Status</h3>
        <p className="text-muted-foreground text-sm">
          The Calendar component is currently not implemented for Native. Date picking is complex on mobile and usually
          requires a bottom sheet or modal pattern which is currently in development.
        </p>
      </div>
    </>
  );
}
