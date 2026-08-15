import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterBadgeDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyBadgeWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVBadge(
      label: 'New Feature',
      variant: GVBadgeVariant.defaultVariant,
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVBadge widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="badge" height={360} title="GVBadge Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVBadge Props"
        props={[
          {
            name: 'label',
            type: 'String?',
            default: 'null',
            description: 'Badge text content.',
          },
          {
            name: 'variant',
            type: 'GVBadgeVariant',
            default: 'GVBadgeVariant.defaultVariant',
            description: 'Visual style: defaultVariant, secondary, destructive, outline.',
          },
          {
            name: 'icon',
            type: 'IconData?',
            default: 'null',
            description: 'Optional leading icon.',
          },
        ]}
      />
    </>
  );
}
