import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Button, toast } from '@gv-tech/ui-web';
import { Coffee } from 'lucide-react';
/*   @typescript-eslint/ban-ts-comment */

const isNative = false as boolean;

const platform = 'web' as string;

export function SupportFabDocs() {
  return (
    <>
      <ComponentShowcase
        title="Support FAB"
        description="A floating action button that opens an embedded support panel for donations and contributions."
        code={`import { SupportFab } from '@gv-tech/ui-web';

export function MyPage() {
  return (
    <div>
      <SupportFab
        supportUrl="https://www.buymeacoffee.com"
        creatorId="eng618"
      />
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
            {/* We use the Button with same styles as SupportFab for the demo */}
            <Button
              variant="outline"
              size="icon"
              className="h-14 w-14 rounded-full border border-black/15 bg-[#ffdd00] shadow-lg transition-all hover:scale-105 hover:bg-[#ffe347] active:scale-95"
              onClick={() =>
                toast({
                  title: 'Support Panel Opened',
                  description: 'In a real scenario, this would open a modal with the Buy Me a Coffee embed.',
                })
              }
            >
              <Coffee className="h-6 w-6" />
              <span className="sr-only">Support this project</span>
            </Button>
          </div>

          <div className="bg-card max-w-md rounded-lg border p-4 text-center text-sm shadow-sm">
            <p>
              The <strong>SupportFab</strong> component is currently active globally in these docs. Click the coffee
              button in the bottom right corner to see the real functional version with the embedded support panel.
            </p>
          </div>
        </div>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'supportUrl',
              type: 'string',
              defaultValue: '"https://www.buymeacoffee.com"',
              description: 'The base URL for the support platform.',
            },
            {
              name: 'creatorId',
              type: 'string',
              required: true,
              description: 'The creator identifier for the support page (e.g., "eng618").',
            },
            {
              name: 'title',
              type: 'string',
              defaultValue: '"Buy me a coffee"',
              description: 'Title displayed in the support panel header.',
            },
            {
              name: 'description',
              type: 'string',
              defaultValue: '"Support the project directly from this panel."',
              description: 'Description text shown in the support panel.',
            },
            {
              name: 'iframeTitle',
              type: 'string',
              defaultValue: '"Buy Me a Coffee support form"',
              description: 'Accessible title for the embedded iframe.',
            },
            {
              name: 'open',
              type: 'boolean',
              description: 'Controls the open state of the support panel (controlled mode).',
            },
            {
              name: 'defaultOpen',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Initial open state for uncontrolled mode.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Callback fired when the panel open state changes.',
            },
            {
              name: 'positionClassName',
              type: 'string',
              description: 'Additional CSS classes for the FAB container positioning.',
            },
            {
              name: 'buttonClassName',
              type: 'string',
              description: 'Additional CSS classes for the FAB button styling.',
            },
            {
              name: 'panelClassName',
              type: 'string',
              description: 'Additional CSS classes for the support panel container.',
            },
          ]}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Responsive Behavior</h3>
        <div className="prose prose-sm max-w-none">
          <p>The SupportFab automatically adapts to different screen sizes:</p>
          <ul>
            <li>
              <strong>Desktop (≥768px):</strong> Opens a centered modal dialog with the embedded support form.
            </li>
            <li>
              <strong>Mobile (&lt;768px):</strong> Opens a bottom sheet drawer for better mobile UX.
            </li>
          </ul>
          <p>
            If the embedded iframe is blocked or unavailable, users can still access support through the fallback
            external link that opens the support page in a new tab.
          </p>
        </div>
      </div>
    </>
  );
}
