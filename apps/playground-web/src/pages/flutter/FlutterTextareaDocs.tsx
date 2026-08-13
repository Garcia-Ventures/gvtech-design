import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterTextareaDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyTextareaWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVTextarea(
      label: 'Bio / Notes',
      placeholder: 'Tell us a little bit about yourself...',
      minLines: 3,
      maxLines: 6,
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVTextarea widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="textarea" height={320} title="GVTextarea Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVTextarea Props"
        props={[
          {
            name: 'label',
            type: 'String?',
            default: 'null',
            description: 'Field title label.',
          },
          {
            name: 'placeholder',
            type: 'String?',
            default: 'null',
            description: 'Placeholder hint text.',
          },
          {
            name: 'minLines',
            type: 'int',
            default: '3',
            description: 'Minimum line height.',
          },
          {
            name: 'maxLines',
            type: 'int',
            default: '6',
            description: 'Maximum expandable lines.',
          },
        ]}
      />
    </>
  );
}
