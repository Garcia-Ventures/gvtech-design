import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterMenubarDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyMenubarWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVMenubar(
      menus: const [
        GVMenubarMenu(
          title: 'File',
          items: [GVDropdownMenuItem(label: 'New Tab')],
        ),
      ],
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVMenubar widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="menubar" height={280} title="GVMenubar Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVMenubar Props"
        props={[
          {
            name: 'menus',
            type: 'List<GVMenubarMenu>',
            default: 'required',
            description: 'List of desktop top-level menu definitions.',
          },
        ]}
      />
    </>
  );
}
