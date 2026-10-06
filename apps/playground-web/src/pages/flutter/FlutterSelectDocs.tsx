import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterSelectDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MySelectWidget extends StatefulWidget {
  @override
  State<MySelectWidget> createState() => _MySelectWidgetState();
}

class _MySelectWidgetState extends State<MySelectWidget> {
  String? _selected = 'apple';

  @override
  Widget build(BuildContext context) {
    return GVSelect<String>(
      label: 'Favorite Fruit',
      value: _selected,
      onChanged: (val) => setState(() => _selected = val),
      items: const [
        GVSelectItem(value: 'apple', label: 'Apple'),
        GVSelectItem(value: 'banana', label: 'Banana'),
      ],
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVSelect widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="select" height={300} title="GVSelect Interactive Preview" />
      </ComponentShowcase>

      <h3 className="mt-6 text-xl font-semibold">GVSelect Props</h3>
      <PropsTable
        props={[
          {
            name: 'value',
            type: 'T?',
            defaultValue: 'null',
            description: 'Currently selected option value.',
          },
          {
            name: 'onChanged',
            type: 'ValueChanged<T?>?',
            defaultValue: 'null',
            description: 'Callback fired when selected value changes.',
          },
          {
            name: 'items',
            type: 'List<GVSelectItem<T>>',
            defaultValue: 'required',
            description: 'List of dropdown options.',
          },
          {
            name: 'label',
            type: 'String?',
            defaultValue: 'null',
            description: 'Option label.',
          },
        ]}
      />
    </>
  );
}
