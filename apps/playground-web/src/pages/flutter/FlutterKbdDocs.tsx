import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterKbdDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyKbdWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: const [
        GVKbd('⌘'),
        SizedBox(width: 4),
        GVKbd('K'),
      ],
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVKbd widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="kbd" height={260} title="GVKbd Interactive Preview" />
      </ComponentShowcase>

      <h3 className="mt-6 text-xl font-semibold">GVKbd Props</h3>
      <PropsTable
        props={[
          {
            name: 'label',
            type: 'String',
            defaultValue: 'required',
            description: 'Keyboard key symbol or text string.',
          },
        ]}
      />
    </>
  );
}
