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

      <h3 className="mt-6 text-xl font-semibold">GVAlertDialog Props</h3>
      <PropsTable
        props={[
          {
            name: 'title',
            type: 'String',
            defaultValue: 'required',
            description: 'Alert dialog title string.',
          },
          {
            name: 'description',
            type: 'String',
            defaultValue: 'required',
            description: 'Alert body explanation.',
          },
          {
            name: 'cancelLabel',
            type: 'String',
            defaultValue: 'Cancel',
            description: 'Cancel button label.',
          },
          {
            name: 'actionLabel',
            type: 'String',
            defaultValue: 'Continue',
            description: 'Confirm action button label.',
          },
        ]}
      />
    </>
  );
}
