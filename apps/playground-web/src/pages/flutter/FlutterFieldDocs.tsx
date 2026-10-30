import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterFieldDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyFieldWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVField(
      label: 'Username',
      description: 'This is your public display name.',
      child: GVInput(placeholder: 'johndoe'),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVField widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="field" height={300} title="GVField Interactive Preview" />
      </ComponentShowcase>

      <h3 className="mt-6 text-xl font-semibold">GVField Props</h3>
      <PropsTable
        props={[
          {
            name: 'label',
            type: 'String?',
            defaultValue: 'null',
            description: 'Label title text.',
          },
          {
            name: 'description',
            type: 'String?',
            defaultValue: 'null',
            description: 'Body helper description text.',
          },
          {
            name: 'errorText',
            type: 'String?',
            defaultValue: 'null',
            description: 'Validation error text.',
          },
          {
            name: 'child',
            type: 'Widget',
            defaultValue: 'required',
            description: 'Form control input widget.',
          },
        ]}
      />
    </>
  );
}
