import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Progress } from '@/components/ui/progress';

export function ProgressDocs() {
  return (
    <ComponentSection title="Progress" description="Displays an indicator showing the completion progress of a task.">
      <ComponentShowcase
        title="Default"
        description="A basic progress bar."
        code={`<Progress value={33} className="w-[60%]" />`}
      >
        <Progress value={33} className="w-full max-w-md" />
      </ComponentShowcase>

      <ComponentShowcase
        title="Various Values"
        description="Progress bars with different completion values."
        code={`<Progress value={0} />
<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />`}
      >
        <div className="space-y-4 w-full max-w-md">
          <Progress value={0} />
          <Progress value={25} />
          <Progress value={50} />
          <Progress value={75} />
          <Progress value={100} />
        </div>
      </ComponentShowcase>
    </ComponentSection>
  );
}
