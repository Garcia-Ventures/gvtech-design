import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterTextDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyTextWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: const [
        GVText('Heading 1', variant: GVTextVariant.h1),
        GVText('Body text styled with design tokens.', variant: GVTextVariant.p),
      ],
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVText widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="text" height={380} title="GVText Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVText Props"
        props={[
          {
            name: 'text',
            type: 'String',
            default: 'required',
            description: 'Text string content.',
          },
          {
            name: 'variant',
            type: 'GVTextVariant',
            default: 'GVTextVariant.p',
            description: 'Typography style: h1, h2, h3, h4, p, blockquote, lead, large, small, muted.',
          },
          {
            name: 'color',
            type: 'Color?',
            default: 'theme.colorScheme.onSurface',
            description: 'Custom text color override.',
          },
        ]}
      />
    </>
  );
}
