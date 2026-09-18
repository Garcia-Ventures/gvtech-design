import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterItemDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyItemWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVItem(
      title: 'Two-Factor Authentication',
      subtitle: 'Secure your account with 2FA.',
      leading: Icon(Icons.shield),
      trailing: Icon(Icons.chevron_right),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVItem widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="item" height={280} title="GVItem Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVItem Props"
        props={[
          {
            name: 'title',
            type: 'String',
            default: 'required',
            description: 'Item primary title label.',
          },
          {
            name: 'subtitle',
            type: 'String?',
            default: 'null',
            description: 'Item secondary subtitle text.',
          },
          {
            name: 'leading',
            type: 'Widget?',
            default: 'null',
            description: 'Leading icon or widget slot.',
          },
          {
            name: 'trailing',
            type: 'Widget?',
            default: 'null',
            description: 'Trailing action icon or widget slot.',
          },
        ]}
      />
    </>
  );
}
