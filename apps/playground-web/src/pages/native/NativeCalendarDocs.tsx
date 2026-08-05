import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeCalendarDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="Calendar"
        description="The native implementation of Calendar is currently a shim and returns 'Not implemented'."
        code={`import { Calendar } from '@gv-tech/ui-native';

export default function App() {
  return <Calendar />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
