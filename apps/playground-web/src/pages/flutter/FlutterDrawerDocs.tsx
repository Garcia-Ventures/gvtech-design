import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterDrawerDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyDrawerWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVButton(
      label: 'Open Drawer',
      onPressed: () {
        GVDrawer.show(
          context,
          title: 'Move Goal',
          child: Text('Goal details content.'),
        );
      },
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVDrawer widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="drawer" height={320} title="GVDrawer Interactive Preview" />
      </ComponentShowcase>

      <h3 className="mt-6 text-xl font-semibold">GVDrawer Props</h3>
      <PropsTable
        props={[
          {
            name: 'title',
            type: 'String',
            defaultValue: 'required',
            description: 'Drawer header title.',
          },
          {
            name: 'description',
            type: 'String?',
            defaultValue: 'null',
            description: 'Optional drawer description subtitle.',
          },
          {
            name: 'child',
            type: 'Widget',
            defaultValue: 'required',
            description: 'Drawer body content widget.',
          },
        ]}
      />
    </>
  );
}
