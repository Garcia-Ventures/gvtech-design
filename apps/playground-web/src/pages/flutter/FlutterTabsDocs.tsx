import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterTabsDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyTabsWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVTabs(
      initialValue: 'account',
      tabs: const [
        GVTabData(
          value: 'account',
          label: 'Account',
          content: Text('Account settings'),
        ),
        GVTabData(
          value: 'password',
          label: 'Password',
          content: Text('Password settings'),
        ),
      ],
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVTabs widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="tabs" height={320} title="GVTabs Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVTabs Props"
        props={[
          {
            name: 'tabs',
            type: 'List<GVTabData>',
            default: 'required',
            description: 'List of tab items with value, label, optional icon, and content widget.',
          },
          {
            name: 'initialValue',
            type: 'String?',
            default: 'first tab value',
            description: 'Value of the tab selected by default.',
          },
        ]}
      />
    </>
  );
}
