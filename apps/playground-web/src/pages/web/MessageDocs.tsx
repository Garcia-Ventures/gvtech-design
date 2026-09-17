import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Message, MessageAvatar, MessageContent, MessageFooter, MessageGroup, MessageHeader } from '@gv-tech/ui-web';

export function MessageDocs() {
  return (
    <>
      <ComponentShowcase
        title="Conversation thread"
        description="Messages align start (incoming) or end (outgoing) with optional avatar, header, and footer slots."
        code={`<MessageGroup>
  <Message>
    <MessageAvatar>AI</MessageAvatar>
    <MessageContent>
      <MessageHeader>Assistant · 9:41 AM</MessageHeader>
      <p>Here is the summary you asked for.</p>
      <MessageFooter>Delivered</MessageFooter>
    </MessageContent>
  </Message>
  <Message align="end">
    <MessageContent>
      <p>Thanks! Can you shorten it?</p>
    </MessageContent>
  </Message>
</MessageGroup>`}
      >
        <MessageGroup>
          <Message>
            <MessageAvatar>AI</MessageAvatar>
            <MessageContent>
              <MessageHeader>Assistant · 9:41 AM</MessageHeader>
              <p>Here is the summary you asked for.</p>
              <MessageFooter>Delivered</MessageFooter>
            </MessageContent>
          </Message>
          <Message align="end">
            <MessageContent>
              <p>Thanks! Can you shorten it?</p>
            </MessageContent>
          </Message>
        </MessageGroup>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'align',
              type: '"start" | "end"',
              defaultValue: '"start"',
              description: 'Which side the message aligns to. Applies to Message only.',
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
