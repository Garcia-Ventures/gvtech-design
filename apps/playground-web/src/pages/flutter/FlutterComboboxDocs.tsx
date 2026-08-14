import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterComboboxDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyComboboxWidget extends StatefulWidget {
  @override
  State<MyComboboxWidget> createState() => _MyComboboxWidgetState();
}

class _MyComboboxWidgetState extends State<MyComboboxWidget> {
  String? _val = 'next';

  @override
  Widget build(BuildContext context) {
    return GVCombobox<String>(
      label: 'Framework',
      value: _val,
      onChanged: (val) => setState(() => _val = val),
      items: const [
        GVComboboxItem(value: 'next', label: 'Next.js'),
        GVComboboxItem(value: 'react', label: 'React'),
      ],
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVCombobox widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="combobox" height={320} title="GVCombobox Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVCombobox Props"
        props={[
          {
            name: 'value',
            type: 'T?',
            default: 'null',
            description: 'Selected value.',
          },
          {
            name: 'onChanged',
            type: 'ValueChanged<T?>?',
            default: 'null',
            description: 'Callback when selected item changes.',
          },
          {
            name: 'items',
            type: 'List<GVComboboxItem<T>>',
            default: 'required',
            description: 'List of combobox items with search filter.',
          },
        ]}
      />
    </>
  );
}
