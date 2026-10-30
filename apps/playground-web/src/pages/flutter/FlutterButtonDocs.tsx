import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterButtonDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVButton(
      label: 'Primary Action',
      variant: GVButtonVariant.primary,
      size: GVButtonSize.defaultSize,
      onPressed: () {
        print('Button tapped!');
      },
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVButton widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="button" height={420} title="GVButton Interactive Preview" />
      </ComponentShowcase>

      <h3 className="mt-6 text-xl font-semibold">GVButton Props (Dart Parameters)</h3>
      <PropsTable
        props={[
          {
            name: 'label',
            type: 'String?',
            defaultValue: 'null',
            description: 'Button text label.',
          },
          {
            name: 'variant',
            type: 'GVButtonVariant',
            defaultValue: 'GVButtonVariant.primary',
            description: 'Visual style: primary, secondary, destructive, outline, ghost, link.',
          },
          {
            name: 'size',
            type: 'GVButtonSize',
            defaultValue: 'GVButtonSize.defaultSize',
            description: 'Size variant: xs, sm, defaultSize, lg, icon.',
          },
          {
            name: 'onPressed',
            type: 'VoidCallback?',
            defaultValue: 'null',
            description: 'Callback when tapped. If null or disabled=true, button enters disabled state.',
          },
          {
            name: 'disabled',
            type: 'bool',
            defaultValue: 'false',
            description: 'Disables tap interaction and lowers opacity.',
          },
          {
            name: 'isLoading',
            type: 'bool',
            defaultValue: 'false',
            description: 'Renders a circular progress indicator.',
          },
        ]}
      />
    </>
  );
}
