import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterToggleDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyToggleWidget extends StatefulWidget {
  @override
  State<MyToggleWidget> createState() => _MyToggleWidgetState();
}

class _MyToggleWidgetState extends State<MyToggleWidget> {
  bool _pressed = false;

  @override
  Widget build(BuildContext context) {
    return GVToggle(
      isPressed: _pressed,
      onPressed: (val) => setState(() => _pressed = val),
      child: Text('Bold'),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVToggle widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="toggle" height={260} title="GVToggle Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVToggle Props"
        props={[
          {
            name: 'isPressed',
            type: 'bool',
            default: 'required',
            description: 'Whether the toggle button is active.',
          },
          {
            name: 'onPressed',
            type: 'ValueChanged<bool>?',
            default: 'null',
            description: 'Callback when toggle state changes.',
          },
          {
            name: 'child',
            type: 'Widget',
            default: 'required',
            description: 'Content widget rendered inside button.',
          },
        ]}
      />
    </>
  );
}
