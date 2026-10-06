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

      <h3 className="mt-6 text-xl font-semibold">GVAlert Props</h3>
      <PropsTable
        props={[
          {
            name: 'title',
            type: 'String',
            defaultValue: 'required',
            description: 'Alert headline title text.',
          },
          {
            name: 'description',
            type: 'String?',
            defaultValue: 'null',
            description: 'Optional body description text.',
          },
          {
            name: 'icon',
            type: 'Widget?',
            defaultValue: 'null',
            description: 'Optional leading icon widget.',
          },
          {
            name: 'variant',
            type: 'GVAlertVariant',
            defaultValue: 'GVAlertVariant.defaultVariant',
            description: 'Visual style: defaultVariant, destructive, info, success, warning.',
          },
        ]}
      />
    </>
  );
}
