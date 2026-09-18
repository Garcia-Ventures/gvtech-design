import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterContextMenuDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyContextMenuWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVContextMenu(
      items: const [
        GVDropdownMenuItem(label: 'Back', icon: Icons.arrow_back),
        GVDropdownMenuItem(label: 'Reload', icon: Icons.refresh),
      ],
      child: GVCard(title: 'Right-click or Long-press Me'),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVContextMenu widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="context-menu" height={320} title="GVContextMenu Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVContextMenu Props"
        props={[
          {
            name: 'child',
            type: 'Widget',
            default: 'required',
            description: 'Target surface container widget.',
          },
          {
            name: 'items',
            type: 'List<GVDropdownMenuItem>',
            default: 'required',
            description: 'List of context menu option items.',
          },
        ]}
      />
    </>
  );
}
