import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterSkeletonDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MySkeletonWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        GVSkeleton(width: 48, height: 48, borderRadius: 24),
        SizedBox(height: 12),
        GVSkeleton(height: 16),
      ],
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVSkeleton widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="skeleton" height={260} title="GVSkeleton Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVSkeleton Props"
        props={[
          {
            name: 'width',
            type: 'double?',
            default: 'null',
            description: 'Placeholder width in logical pixels. If null, fills horizontal space.',
          },
          {
            name: 'height',
            type: 'double?',
            default: '16.0',
            description: 'Placeholder height in logical pixels.',
          },
          {
            name: 'borderRadius',
            type: 'double',
            default: 'GVRadii.md',
            description: 'Corner rounding radius.',
          },
        ]}
      />
    </>
  );
}
