import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function TextareaDocs() {
  return (
    <ComponentSection title="Textarea" description="Displays a form textarea for multi-line text input.">
      <ComponentShowcase
        title="Default"
        description="A basic textarea."
        code={`<Textarea placeholder="Type your message here." />`}
      >
        <Textarea placeholder="Type your message here." className="max-w-md" />
      </ComponentShowcase>

      <ComponentShowcase
        title="With Label"
        description="A textarea with a label."
        code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>`}
      >
        <div className="grid w-full max-w-md gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="With Button"
        description="A textarea with a submit button."
        code={`<div className="grid w-full gap-2">
  <Textarea placeholder="Type your message here." />
  <Button>Send message</Button>
</div>`}
      >
        <div className="grid w-full max-w-md gap-2">
          <Textarea placeholder="Type your message here." />
          <Button>Send message</Button>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="Disabled"
        description="A disabled textarea."
        code={`<Textarea placeholder="Type your message here." disabled />`}
      >
        <Textarea placeholder="Type your message here." disabled className="max-w-md" />
      </ComponentShowcase>
    </ComponentSection>
  );
}
