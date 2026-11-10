import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function QuestionnaireDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="Questionnaire is not exported from @gv-tech/ui-native yet."
        code={`// Questionnaire is planned for native and is not exported.
// The contract stays in @gv-tech/ui-core. Use @gv-tech/ui-web on the web.`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Status</h3>
        <p className="text-muted-foreground text-sm">
          Questionnaire is planned for native. The web implementation uses @shadcn/react/questionnaire, which has no
          React Native equivalent yet. The component is not part of the public native entry.
        </p>
      </div>
    </>
  );
}
