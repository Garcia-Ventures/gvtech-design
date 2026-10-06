import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterSeparatorDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MySeparatorWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVSeparator(
      orientation: GVSeparatorOrientation.horizontal,
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVSeparator widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="separator" height={260} title="GVSeparator Interactive Preview" />
      </ComponentShowcase>

      <h3 className="mt-6 text-xl font-semibold">GVSeparator Props</h3>
      <PropsTable
        props={[
          {
            name: 'orientation',
            type: 'GVSeparatorOrientation',
            defaultValue: 'GVSeparatorOrientation.horizontal',
            description: 'Divider direction: horizontal or vertical.',
          },
          {
            name: 'thickness',
            type: 'double',
            defaultValue: '1.0',
            description: 'Line thickness in logical pixels.',
          },
          {
            name: 'color',
            type: 'Color?',
            defaultValue: 'theme.colorScheme.outlineVariant',
            description: 'Custom divider color override.',
          },
        ]}
      />
    </>
  );
}
