import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function ResizableDocs() {
  return (
    <ComponentShowcase
      title="Web only"
      description="Resizable panels are not exported from @gv-tech/ui-native."
      code={`// Drag-to-resize panels are a web pattern.
// On native, lay the regions out at fixed sizes.`}
    >
      <p className="text-muted-foreground text-sm">
        Use a fixed layout on native. The web component stays in @gv-tech/ui-web.
      </p>
    </ComponentShowcase>
  );
}
