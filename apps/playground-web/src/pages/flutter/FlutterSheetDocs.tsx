import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterSheetDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

void openMySheet(BuildContext context) {
  GVSheet.show(
    context: context,
    title: 'Edit Profile',
    description: 'Make changes to your profile here.',
    child: Text('Sheet content...'),
  );
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVSheet bottom sheet widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="sheet" height={280} title="GVSheet Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVSheet.show Parameters"
        props={[
          {
            name: 'context',
            type: 'BuildContext',
            default: 'required',
            description: 'Flutter build context.',
          },
          {
            name: 'title',
            type: 'String',
            default: 'required',
            description: 'Bottom sheet title.',
          },
          {
            name: 'description',
            type: 'String?',
            default: 'null',
            description: 'Optional body description.',
          },
          {
            name: 'child',
            type: 'Widget',
            default: 'required',
            description: 'Body content widget rendered inside sheet.',
          },
        ]}
      />
    </>
  );
}
