import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from '@gv-tech/ui-web';

export function BubbleDocs() {
  return (
    <>
      <ComponentShowcase
        title="Variants"
        description="Bubbles come in 7 variants for incoming, outgoing, and system content."
        code={`<Bubble variant="default"><BubbleContent>Hey, are we still on?</BubbleContent></Bubble>
<Bubble variant="secondary"><BubbleContent>Yep — 3pm works.</BubbleContent></Bubble>
<Bubble variant="muted"><BubbleContent>Typing…</BubbleContent></Bubble>
<Bubble variant="outline"><BubbleContent>Quoted reply</BubbleContent></Bubble>
<Bubble variant="ghost"><BubbleContent>System notice</BubbleContent></Bubble>
<Bubble variant="tinted"><BubbleContent>Highlighted update</BubbleContent></Bubble>
<Bubble variant="destructive"><BubbleContent>Failed to send. Retry?</BubbleContent></Bubble>`}
      >
        <BubbleGroup>
          <Bubble variant="default">
            <BubbleContent>Hey, are we still on?</BubbleContent>
          </Bubble>
          <Bubble variant="secondary">
            <BubbleContent>Yep — 3pm works.</BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>Typing…</BubbleContent>
          </Bubble>
          <Bubble variant="outline">
            <BubbleContent>Quoted reply</BubbleContent>
          </Bubble>
          <Bubble variant="ghost">
            <BubbleContent>System notice</BubbleContent>
          </Bubble>
          <Bubble variant="tinted">
            <BubbleContent>Highlighted update</BubbleContent>
          </Bubble>
          <Bubble variant="destructive">
            <BubbleContent>Failed to send. Retry?</BubbleContent>
          </Bubble>
        </BubbleGroup>
      </ComponentShowcase>

      <ComponentShowcase
        title="Alignment and reactions"
        description="Use align for message side and BubbleReactions for emoji-style reactions."
        code={`<Bubble align="end">
  <BubbleContent>That demo was great</BubbleContent>
  <BubbleReactions>👏 2</BubbleReactions>
</Bubble>`}
      >
        <BubbleGroup>
          <Bubble align="end">
            <BubbleContent>That demo was great</BubbleContent>
            <BubbleReactions>👏 2</BubbleReactions>
          </Bubble>
        </BubbleGroup>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'variant',
              type: '"default" | "secondary" | "muted" | "tinted" | "outline" | "ghost" | "destructive"',
              defaultValue: '"default"',
              description: 'The visual style of the bubble. Applies to Bubble only.',
            },
            {
              name: 'align',
              type: '"start" | "end"',
              defaultValue: '"start"',
              description: 'Which side the bubble aligns to. Applies to Bubble only.',
            },
            {
              name: 'side',
              type: '"top" | "bottom"',
              defaultValue: '"bottom"',
              description: 'Where reactions sit relative to the bubble. Applies to BubbleReactions only.',
            },
            {
              name: 'asChild',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Render BubbleContent as its child element. Applies to BubbleContent only.',
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
