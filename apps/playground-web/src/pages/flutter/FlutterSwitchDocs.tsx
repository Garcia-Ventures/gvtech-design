import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterSwitchDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MySwitchWidget extends StatefulWidget {
  @override
  State<MySwitchWidget> createState() => _MySwitchWidgetState();
}

class _MySwitchWidgetState extends State<MySwitchWidget> {
  bool _enabled = true;

  @override
  Widget build(BuildContext context) {
    return GVSwitch(
      label: 'Push Notifications',
      value: _enabled,
      onChanged: (val) => setState(() => _enabled = val),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVSwitch widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="switch" height={280} title="GVSwitch Interactive Preview" />
      </ComponentShowcase>

      <h3 className="mt-6 text-xl font-semibold">GVSwitch Props</h3>
      <PropsTable
        props={[
          {
            name: 'value',
            type: 'bool',
            defaultValue: 'required',
            description: 'Whether the switch is toggled on.',
          },
          {
            name: 'onChanged',
            type: 'ValueChanged<bool>?',
            defaultValue: 'null',
            description: 'Callback when toggle state changes.',
          },
          {
            name: 'label',
            type: 'String?',
            defaultValue: 'null',
            description: 'Option label rendered beside switch.',
          },
          {
            name: 'disabled',
            type: 'bool',
            defaultValue: 'false',
            description: 'Disables tap interaction.',
          },
        ]}
      />
    </>
  );
}
