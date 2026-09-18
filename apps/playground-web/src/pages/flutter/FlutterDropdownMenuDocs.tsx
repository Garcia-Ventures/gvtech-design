import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterDropdownMenuDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyDropdownMenuWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVDropdownMenu(
      trigger: GVButton(label: 'Open Menu', variant: GVButtonVariant.outline),
      items: const [
        GVDropdownMenuItem(label: 'Profile', icon: Icons.person),
        GVDropdownMenuItem(label: 'Settings', icon: Icons.settings),
      ],
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVDropdownMenu widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="dropdown-menu" height={320} title="GVDropdownMenu Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVDropdownMenu Props"
        props={[
          {
            name: 'trigger',
            type: 'Widget',
            default: 'required',
            description: 'Trigger element widget.',
          },
          {
            name: 'items',
            type: 'List<GVDropdownMenuItem>',
            default: 'required',
            description: 'List of menu option items.',
          },
        ]}
      />
    </>
  );
}
