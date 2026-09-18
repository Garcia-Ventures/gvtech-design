import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeHoverCardDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="HoverCard"
        description="The native implementation of HoverCard is currently a shim and returns 'Not implemented'."
        code={`import { HoverCard } from '@gv-tech/ui-native';

export default function App() {
  return <HoverCard />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
