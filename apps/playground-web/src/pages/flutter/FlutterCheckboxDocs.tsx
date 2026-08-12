import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterCheckboxDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyCheckboxWidget extends StatefulWidget {
  @override
  State<MyCheckboxWidget> createState() => _MyCheckboxWidgetState();
}

class _MyCheckboxWidgetState extends State<MyCheckboxWidget> {
  bool _isChecked = true;

  @override
  Widget build(BuildContext context) {
    return GVCheckbox(
      label: 'Accept terms and conditions',
      value: _isChecked,
      onChanged: (val) => setState(() => _isChecked = val ?? false),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVCheckbox widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="checkbox" height={280} title="GVCheckbox Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVCheckbox Props"
        props={[
          {
            name: 'value',
            type: 'bool',
            default: 'required',
            description: 'Whether the checkbox is checked.',
          },
          {
            name: 'onChanged',
            type: 'ValueChanged<bool?>?',
            default: 'null',
            description: 'Callback when toggle state changes.',
          },
          {
            name: 'label',
            type: 'String?',
            default: 'null',
            description: 'Option label rendered beside checkbox.',
          },
          {
            name: 'disabled',
            type: 'bool',
            default: 'false',
            description: 'Disables tap interaction.',
          },
        ]}
      />
    </>
  );
}
