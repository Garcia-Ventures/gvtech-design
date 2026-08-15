import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterRadioGroupDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyRadioGroupWidget extends StatefulWidget {
  @override
  State<MyRadioGroupWidget> createState() => _MyRadioGroupWidgetState();
}

class _MyRadioGroupWidgetState extends State<MyRadioGroupWidget> {
  String _selected = 'all';

  @override
  Widget build(BuildContext context) {
    return GVRadioGroup<String>(
      label: 'Notify me about...',
      value: _selected,
      onChanged: (val) => setState(() => _selected = val!),
      options: const [
        GVRadioOption(value: 'all', label: 'All new messages'),
        GVRadioOption(value: 'direct', label: 'Direct messages only'),
      ],
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVRadioGroup widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="radio-group" height={340} title="GVRadioGroup Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVRadioGroup Props"
        props={[
          {
            name: 'value',
            type: 'T?',
            default: 'null',
            description: 'Currently selected option value.',
          },
          {
            name: 'onChanged',
            type: 'ValueChanged<T?>?',
            default: 'null',
            description: 'Callback fired when an option is selected.',
          },
          {
            name: 'options',
            type: 'List<GVRadioOption<T>>',
            default: 'required',
            description: 'List of radio options with value, label, description, and disabled state.',
          },
          {
            name: 'label',
            type: 'String?',
            default: 'null',
            description: 'Group headline label.',
          },
        ]}
      />
    </>
  );
}
