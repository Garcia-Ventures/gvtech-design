import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@gv-tech/ui-web';

export function MessageScrollerDocs() {
  return (
    <>
      <ComponentShowcase
        title="Auto-scrolling thread"
        description="Provider plus viewport, content, items, and a scroll-to-end button. Backed by the @shadcn/react/message-scroller headless primitive."
        code={`<MessageScrollerProvider>
  <MessageScroller>
    <MessageScrollerViewport>
      <MessageScrollerContent>
        <MessageScrollerItem>First message</MessageScrollerItem>
        <MessageScrollerItem scrollAnchor>Latest message</MessageScrollerItem>
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
</MessageScrollerProvider>`}
      >
        <MessageScrollerProvider>
          <MessageScroller>
            <MessageScrollerViewport>
              <MessageScrollerContent>
                <MessageScrollerItem>First message</MessageScrollerItem>
                <MessageScrollerItem scrollAnchor>Latest message</MessageScrollerItem>
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </MessageScrollerProvider>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'scrollAnchor',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Pin the viewport to this item. Applies to MessageScrollerItem only.',
            },
            {
              name: 'direction',
              type: '"start" | "end"',
              defaultValue: '"end"',
              description: 'Scroll target of the button. Applies to MessageScrollerButton only.',
            },
            {
              name: 'variant',
              type: 'ButtonVariant',
              defaultValue: '"secondary"',
              description: 'Button style. Applies to MessageScrollerButton only.',
            },
            {
              name: 'size',
              type: 'ButtonSize',
              defaultValue: '"icon-sm"',
              description: 'Button size. Applies to MessageScrollerButton only.',
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
