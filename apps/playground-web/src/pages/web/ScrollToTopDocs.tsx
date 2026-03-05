import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Button, toast } from '@gv-tech/ui-web';
import { ArrowUp } from 'lucide-react';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

export function ScrollToTopDocs() {
  return (
    <>
      <ComponentShowcase
        title="Animated Scroll To Top"
        description="A floating action control that appears after scrolling and animates down before returning to the top."
        code={`import { ScrollToTop } from '@gv-tech/ui-web';

export function MyPage() {
  return (
    <div className="min-h-[200vh]">
      <ScrollToTop threshold={120} />
      {/* Page Content */}
    </div>
  );
}`}
      >
        <div className="bg-muted/30 flex flex-col items-center justify-center space-y-8 rounded-xl border py-12">
          <div className="text-center">
            <p className="text-muted-foreground mb-4 text-sm italic">
              Previewing the component in an "Always-On" state:
            </p>
            {/* We use the Button with same styles as ScrollToTop for the demo */}
            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 hover:bg-background h-12 w-12 rounded-full border-2 shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95"
              onClick={() =>
                toast({
                  title: 'Scroll Action Triggered',
                  description: 'In a real scenario, the window would now scroll smoothly to the top.',
                })
              }
            >
              <ArrowUp className="h-6 w-6" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </div>

          <div className="bg-card max-w-md rounded-lg border p-4 text-center text-sm shadow-sm">
            <p>
              The <strong>ScrollToTop</strong> component is currently active globally in these docs. Scroll down this
              page to see the real functional version appear in the bottom right corner.
            </p>
          </div>
        </div>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'threshold',
              type: 'number',
              defaultValue: '240',
              description: 'How far the user must scroll before the control becomes visible.',
            },
            {
              name: 'exitDuration',
              type: 'number',
              defaultValue: '450',
              description: 'Delay before scrolling to top to allow the exit animation to complete.',
            },
            {
              name: 'behavior',
              type: 'ScrollBehavior',
              defaultValue: '"smooth"',
              description: 'Browser-native scroll behavior used when returning to the top.',
            },
            {
              name: 'label',
              type: 'string',
              defaultValue: '"Scroll to top"',
              description: 'Accessible label for screen readers and aria-label.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Use to override position or visual styling.',
            },
            {
              name: 'scrollTarget',
              type: 'Window | HTMLElement | null',
              description: 'Optional scroll container. Defaults to window when omitted.',
            },
          ]}
        />
      </div>
    </>
  );
}
