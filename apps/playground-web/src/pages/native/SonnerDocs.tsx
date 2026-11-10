import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function SonnerDocs() {
  return (
    <ComponentShowcase
      title="Web only"
      description="Sonner is not exported from @gv-tech/ui-native. Use Toast."
      code={`import { Toast } from '@gv-tech/ui-native';

export function Notify() {
  return <Toast />;
}`}
    >
      <p className="text-muted-foreground text-sm">
        Sonner is the web toast. Transient feedback on native goes through Toast.
      </p>
    </ComponentShowcase>
  );
}
