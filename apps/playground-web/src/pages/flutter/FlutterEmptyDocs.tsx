import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterEmptyDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyEmptyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVEmpty(
      title: 'No projects found',
      description: 'You haven\'t created any projects yet.',
      icon: Icon(Icons.folder_open),
      action: GVButton(
        label: 'Create Project',
        onPressed: () {},
      ),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVEmpty widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="empty" height={360} title="GVEmpty Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVEmpty Props"
        props={[
          {
            name: 'title',
            type: 'String',
            default: 'required',
            description: 'Empty state headline title.',
          },
          {
            name: 'description',
            type: 'String?',
            default: 'null',
            description: 'Optional body description.',
          },
          {
            name: 'icon',
            type: 'Widget?',
            default: 'null',
            description: 'Optional graphic icon widget.',
          },
          {
            name: 'action',
            type: 'Widget?',
            default: 'null',
            description: 'Optional action button widget.',
          },
        ]}
      />
    </>
  );
}
