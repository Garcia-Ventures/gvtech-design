import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function MessageDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="Message is not exported from @gv-tech/ui-native yet."
        code={`// Message is planned for native and is not exported.
// The contract stays in @gv-tech/ui-core. Use @gv-tech/ui-web on the web.`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Status</h3>
        <p className="text-muted-foreground text-sm">
          Message is planned for native. It is not part of the public native entry, so an import cannot succeed and
          render an empty view. The web implementation is the one to use until the native behavior lands.
        </p>
      </div>
    </>
  );
}
