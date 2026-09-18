import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterAlertDialogDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyAlertDialogWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVButton(
      label: 'Show Alert Dialog',
      onPressed: () {
        GVAlertDialog.show(
          context,
          title: 'Are you sure?',
          description: 'This action cannot be undone.',
          actionLabel: 'Delete',
          isDestructive: true,
        );
      },
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVAlertDialog widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="alert-dialog" height={320} title="GVAlertDialog Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVAlertDialog Props"
        props={[
          {
            name: 'title',
            type: 'String',
            default: 'required',
            description: 'Alert dialog title string.',
          },
          {
            name: 'description',
            type: 'String',
            default: 'required',
            description: 'Alert body explanation.',
          },
          {
            name: 'cancelLabel',
            type: 'String',
            default: 'Cancel',
            description: 'Cancel button label.',
          },
          {
            name: 'actionLabel',
            type: 'String',
            default: 'Continue',
            description: 'Confirm action button label.',
          },
        ]}
      />
    </>
  );
}
