import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterSliderDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MySliderWidget extends StatefulWidget {
  @override
  State<MySliderWidget> createState() => _MySliderWidgetState();
}

class _MySliderWidgetState extends State<MySliderWidget> {
  double _val = 50.0;

  @override
  Widget build(BuildContext context) {
    return GVSlider(
      label: 'Volume',
      value: _val,
      min: 0,
      max: 100,
      onChanged: (val) => setState(() => _val = val),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVSlider widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="slider" height={280} title="GVSlider Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVSlider Props"
        props={[
          {
            name: 'value',
            type: 'double',
            default: 'required',
            description: 'Current slider value.',
          },
          {
            name: 'onChanged',
            type: 'ValueChanged<double>?',
            default: 'null',
            description: 'Callback when slider thumb position changes.',
          },
          {
            name: 'min',
            type: 'double',
            default: '0.0',
            description: 'Minimum value bound.',
          },
          {
            name: 'max',
            type: 'double',
            default: '100.0',
            description: 'Maximum value bound.',
          },
        ]}
      />
    </>
  );
}
