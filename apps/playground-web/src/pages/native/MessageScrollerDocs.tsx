import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function MessageScrollerDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="The MessageScroller component is currently a stub for Native."
        code={`import { MessageScroller } from "@gv-tech/design-system";

export function MessageScrollerExample() {
  return <MessageScroller />;
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Status</h3>
        <p className="text-muted-foreground text-sm">
          The MessageScroller component for Native is currently a stub. The web implementation is backed by the
          @shadcn/react/message-scroller headless primitive, which has no React Native equivalent. The stub preserves
          the export surface with ScrollView semantics.
        </p>
      </div>
    </>
  );
}
