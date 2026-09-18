import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterPopoverDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyPopoverWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVPopover(
      trigger: GVButton(label: 'Open Popover', variant: GVButtonVariant.outline),
      content: Text('Popover content panel'),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVPopover widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="popover" height={320} title="GVPopover Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVPopover Props"
        props={[
          {
            name: 'trigger',
            type: 'Widget',
            default: 'required',
            description: 'Button or trigger widget.',
          },
          {
            name: 'content',
            type: 'Widget',
            default: 'required',
            description: 'Overlay popover body widget.',
          },
        ]}
      />
    </>
  );
}
