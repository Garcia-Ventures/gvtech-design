import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterHoverCardDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyHoverCardWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVHoverCard(
      trigger: Text('@nextjs'),
      content: Text('The React Framework for the Web'),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVHoverCard widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="hover-card" height={300} title="GVHoverCard Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVHoverCard Props"
        props={[
          {
            name: 'trigger',
            type: 'Widget',
            default: 'required',
            description: 'Trigger text or widget.',
          },
          {
            name: 'content',
            type: 'Widget',
            default: 'required',
            description: 'Hover card popover body.',
          },
        ]}
      />
    </>
  );
}
