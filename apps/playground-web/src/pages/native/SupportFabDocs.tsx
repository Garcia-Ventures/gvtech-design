import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
// @ts-nocheck

export function SupportFabDocs() {
  return (
    <>
      <ComponentShowcase
        title="Support FAB (Native)"
        description="A floating action button for React Native that opens a support dialog for donations and contributions."
        code={`import { SupportFab } from '@gv-tech/ui-native';
import { View } from 'react-native';

export function MyScreen() {
  return (
    <View style={{ flex: 1 }}>
      {/* Your app content */}
      <View style={{ height: 2000 }} />

      <SupportFab
        supportUrl="https://www.buymeacoffee.com"
        creatorId="eng618"
      />
    </View>
  );
}`}
      />

      <ComponentShowcase
        title="Custom Configuration"
        description="Configure the support platform and creator details."
        code={`<SupportFab
  supportUrl="https://www.buymeacoffee.com"
  creatorId="your-creator-id"
  title="Support My Work"
  description="Help keep this project going!"
/>`}
      />

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
              description: 'Title displayed in the support dialog header.',
            },
            {
              name: 'description',
              type: 'string',
              defaultValue: '"Support the project directly from this panel."',
              description: 'Description text shown in the support dialog.',
            },
            {
              name: 'open',
              type: 'boolean',
              description: 'Controls the open state of the support dialog (controlled mode).',
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
              description: 'Callback fired when the dialog open state changes.',
            },
            {
              name: 'positionClassName',
              type: 'string',
              description: 'Additional NativeWind classes for the FAB container positioning.',
            },
            {
              name: 'buttonClassName',
              type: 'string',
              description: 'Additional NativeWind classes for the FAB button styling.',
            },
            {
              name: 'panelClassName',
              type: 'string',
              description: 'Additional NativeWind classes for the support dialog container.',
            },
          ]}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Platform Behavior</h3>
        <div className="prose prose-sm max-w-none">
          <p>The SupportFab adapts to the native platform:</p>
          <ul>
            <li>
              <strong>iOS/Android:</strong> Opens a native modal dialog. The embedded support form is not available on
              mobile, so users are directed to open the external support page in their browser.
            </li>
            <li>
              <strong>Web (React Native Web):</strong> Opens a modal dialog with an embedded iframe when possible,
              falling back to external link.
            </li>
          </ul>
          <p>
            On mobile platforms, tapping the "Open Buy Me a Coffee" button will open the support page in the device's
            default browser using React Native's Linking API.
          </p>
        </div>
      </div>
    </>
  );
}
