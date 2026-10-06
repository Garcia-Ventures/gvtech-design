import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterCollapsibleDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyCollapsibleWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVCollapsible(
      title: Text('Starred Repositories'),
      child: Text('@radix-ui/primitives'),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVCollapsible widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="collapsible" height={280} title="GVCollapsible Interactive Preview" />
      </ComponentShowcase>

      <h3 className="mt-6 text-xl font-semibold">GVCollapsible Props</h3>
      <PropsTable
        props={[
          {
            name: 'title',
            type: 'Widget',
            defaultValue: 'required',
            description: 'Trigger title widget.',
          },
          {
            name: 'child',
            type: 'Widget',
            defaultValue: 'required',
            description: 'Collapsible content panel body.',
          },
        ]}
      />
    </>
  );
}
