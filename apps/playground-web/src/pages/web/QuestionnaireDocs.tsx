import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireTitle,
} from '@gv-tech/ui-web';

export function QuestionnaireDocs() {
  return (
    <>
      <ComponentShowcase
        title="Multi-step flow"
        description="A complete questionnaire step with progress, choices, and navigation actions. Backed by the @shadcn/react/questionnaire headless primitive."
        code={`<Questionnaire>
  <QuestionnaireProgress>Step 1 of 3</QuestionnaireProgress>
  <QuestionnaireItem name="contact">
    <QuestionnaireTitle>How should we contact you?</QuestionnaireTitle>
    <QuestionnaireDescription>Pick one option.</QuestionnaireDescription>
    <QuestionnaireChoices>
      <QuestionnaireChoice value="email">Email
        <QuestionnaireChoiceDescription>Replies within a day</QuestionnaireChoiceDescription>
      </QuestionnaireChoice>
      <QuestionnaireChoice value="phone">Phone</QuestionnaireChoice>
    </QuestionnaireChoices>
    <QuestionnaireActions>
      <QuestionnairePrevious variant="outline" size="default" />
      <QuestionnaireSkip variant="outline" size="default" />
      <QuestionnaireNext variant="default" size="default" />
    </QuestionnaireActions>
  </QuestionnaireItem>
</Questionnaire>`}
      >
        <Questionnaire>
          <QuestionnaireProgress>Step 1 of 3</QuestionnaireProgress>
          <QuestionnaireItem name="contact">
            <QuestionnaireTitle>How should we contact you?</QuestionnaireTitle>
            <QuestionnaireDescription>Pick one option.</QuestionnaireDescription>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="email">
                Email
                <QuestionnaireChoiceDescription>Replies within a day</QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
              <QuestionnaireChoice value="phone">Phone</QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireActions>
              <QuestionnairePrevious variant="outline" size="default" />
              <QuestionnaireSkip variant="outline" size="default" />
              <QuestionnaireNext variant="default" size="default" />
            </QuestionnaireActions>
          </QuestionnaireItem>
        </Questionnaire>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'variant',
              type: 'ButtonVariant',
              defaultValue: '"outline" | "default"',
              description: 'Button style. Applies to Previous, Skip, Next, and Submit.',
            },
            {
              name: 'size',
              type: 'ButtonSize',
              defaultValue: '"default"',
              description: 'Button size. Applies to Previous, Skip, Next, and Submit.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes to apply.',
            },
          ]}
        />
      </div>
    </>
  );
}
