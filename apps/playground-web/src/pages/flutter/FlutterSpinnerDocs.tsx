import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterSpinnerDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MySpinnerWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVSpinner(
      size: GVSpinnerSize.md,
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVSpinner widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="spinner" height={260} title="GVSpinner Interactive Preview" />
      </ComponentShowcase>

      <h3 className="mt-6 text-xl font-semibold">GVSpinner Props</h3>
      <PropsTable
        props={[
          {
            name: 'size',
            type: 'GVSpinnerSize',
            defaultValue: 'GVSpinnerSize.md',
            description: 'Size variant: sm (16), md (24), lg (36).',
          },
          {
            name: 'color',
            type: 'Color?',
            defaultValue: 'theme.colorScheme.primary',
            description: 'Active stroke color override.',
          },
        ]}
      />
    </>
  );
}
