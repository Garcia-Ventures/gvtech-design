import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterCardDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyCardWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          GVCardHeader(
            title: GVCardTitle('Card Title'),
            description: GVCardDescription('Card Description'),
          ),
          GVCardContent(
            child: Text('Card body text'),
          ),
          GVCardFooter(
            child: GVButton(
              label: 'Action',
              onPressed: () {},
            ),
          ),
        ],
      ),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVCard widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="card" height={360} title="GVCard Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVCard Props"
        props={[
          {
            name: 'child',
            type: 'Widget',
            default: 'required',
            description: 'Child widget contained within the card body.',
          },
          {
            name: 'padding',
            type: 'EdgeInsetsGeometry?',
            default: 'EdgeInsets.all(GVSpacing.s6)',
            description: 'Custom padding around card content.',
          },
          {
            name: 'onTap',
            type: 'VoidCallback?',
            default: 'null',
            description: 'Optional tap gesture handler for interactive cards.',
          },
        ]}
      />
    </>
  );
}
