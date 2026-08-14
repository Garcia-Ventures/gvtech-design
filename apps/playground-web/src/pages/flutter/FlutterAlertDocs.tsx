import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterAlertDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyAlertWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVAlert(
      title: 'System Information',
      description: 'A new version of the design system is available.',
      variant: GVAlertVariant.info,
      icon: Icon(Icons.info_outline, size: 20),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVAlert widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="alert" height={420} title="GVAlert Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVAlert Props"
        props={[
          {
            name: 'title',
            type: 'String',
            default: 'required',
            description: 'Alert headline title text.',
          },
          {
            name: 'description',
            type: 'String?',
            default: 'null',
            description: 'Optional body description text.',
          },
          {
            name: 'icon',
            type: 'Widget?',
            default: 'null',
            description: 'Optional leading icon widget.',
          },
          {
            name: 'variant',
            type: 'GVAlertVariant',
            default: 'GVAlertVariant.defaultVariant',
            description: 'Visual style: defaultVariant, destructive, info, success, warning.',
          },
        ]}
      />
    </>
  );
}
