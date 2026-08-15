import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterProgressDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyProgressWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVProgress(
      value: 0.75, // 75% complete
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVProgress widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="progress" height={260} title="GVProgress Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVProgress Props"
        props={[
          {
            name: 'value',
            type: 'double?',
            default: 'null',
            description: 'Progress value from 0.0 to 1.0. If null, renders indeterminate loading animation.',
          },
          {
            name: 'height',
            type: 'double',
            default: '6.0',
            description: 'Progress bar height in logical pixels.',
          },
          {
            name: 'color',
            type: 'Color?',
            default: 'theme.colorScheme.primary',
            description: 'Active fill color override.',
          },
        ]}
      />
    </>
  );
}
