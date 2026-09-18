import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterTooltipDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyTooltipWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVTooltip(
      message: 'Add to library',
      child: GVButton(
        label: 'Hover or Long Press Me',
        variant: GVButtonVariant.outline,
      ),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVTooltip widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="tooltip" height={260} title="GVTooltip Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVTooltip Props"
        props={[
          {
            name: 'message',
            type: 'String',
            default: 'required',
            description: 'Tooltip message text displayed on hover or long press.',
          },
          {
            name: 'child',
            type: 'Widget',
            default: 'required',
            description: 'Child target widget.',
          },
        ]}
      />
    </>
  );
}
