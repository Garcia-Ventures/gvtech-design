import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function QuestionnaireDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="The Questionnaire component is currently a stub for Native."
        code={`import { Questionnaire } from "@gv-tech/design-system";

export function QuestionnaireExample() {
  return <Questionnaire />;
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Status</h3>
        <p className="text-muted-foreground text-sm">
          The Questionnaire component for Native is currently a stub. The web implementation is backed by the
          @shadcn/react/questionnaire headless primitive, which has no React Native equivalent. The stub preserves the
          export surface with basic View and Pressable semantics.
        </p>
      </div>
    </>
  );
}
