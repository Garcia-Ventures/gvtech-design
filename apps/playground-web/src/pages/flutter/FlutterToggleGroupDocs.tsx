import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterToggleGroupDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyToggleGroupWidget extends StatefulWidget {
  @override
  State<MyToggleGroupWidget> createState() => _MyToggleGroupWidgetState();
}

class _MyToggleGroupWidgetState extends State<MyToggleGroupWidget> {
  String? _val = 'center';

  @override
  Widget build(BuildContext context) {
    return GVToggleGroup<String>(
      value: _val,
      onChanged: (val) => setState(() => _val = val),
      items: const [
        GVToggleGroupItem(value: 'left', child: Icon(Icons.format_align_left)),
        GVToggleGroupItem(value: 'center', child: Icon(Icons.format_align_center)),
        GVToggleGroupItem(value: 'right', child: Icon(Icons.format_align_right)),
      ],
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVToggleGroup widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="toggle-group" height={280} title="GVToggleGroup Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVToggleGroup Props"
        props={[
          {
            name: 'value',
            type: 'T?',
            default: 'null',
            description: 'Currently selected item value.',
          },
          {
            name: 'onChanged',
            type: 'ValueChanged<T?>?',
            default: 'null',
            description: 'Callback when selected segment item changes.',
          },
          {
            name: 'items',
            type: 'List<GVToggleGroupItem<T>>',
            default: 'required',
            description: 'List of toggle group segment items.',
          },
        ]}
      />
    </>
  );
}
