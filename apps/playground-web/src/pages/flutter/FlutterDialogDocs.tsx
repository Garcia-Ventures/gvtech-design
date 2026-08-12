import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterDialogDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

void openMyDialog(BuildContext context) {
  GVDialog.show(
    context: context,
    title: 'Edit Profile',
    description: 'Make changes to your profile here.',
    content: Text('Profile fields...'),
    actions: [
      GVButton(
        label: 'Save',
        onPressed: () => Navigator.of(context).pop(),
      ),
    ],
  );
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVDialog modal widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="dialog" height={280} title="GVDialog Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVDialog.show Parameters"
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
            description: 'Modal header title.',
          },
          {
            name: 'description',
            type: 'String?',
            default: 'null',
            description: 'Optional modal body description.',
          },
          {
            name: 'content',
            type: 'Widget?',
            default: 'null',
            description: 'Body content widget.',
          },
          {
            name: 'actions',
            type: 'List<Widget>?',
            default: 'null',
            description: 'Footer action buttons.',
          },
        ]}
      />
    </>
  );
}
