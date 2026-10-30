import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterInputGroupDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyInputGroupWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVInputGroup(
      prefixAddon: Text('https://'),
      child: TextField(
        decoration: InputDecoration(hintText: 'example.com', border: InputBorder.none),
      ),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVInputGroup widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="input-group" height={280} title="GVInputGroup Interactive Preview" />
      </ComponentShowcase>

      <h3 className="mt-6 text-xl font-semibold">GVInputGroup Props</h3>
      <PropsTable
        props={[
          {
            name: 'prefixAddon',
            type: 'Widget?',
            defaultValue: 'null',
            description: 'Addon widget attached to the left of input.',
          },
          {
            name: 'suffixAddon',
            type: 'Widget?',
            defaultValue: 'null',
            description: 'Addon widget attached to the right of input.',
          },
          {
            name: 'child',
            type: 'Widget',
            defaultValue: 'required',
            description: 'Input widget container.',
          },
        ]}
      />
    </>
  );
}
