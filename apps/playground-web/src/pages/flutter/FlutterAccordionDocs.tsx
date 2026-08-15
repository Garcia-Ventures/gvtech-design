import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterAccordionDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyAccordionWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVAccordion(
      initialExpandedId: 'item-1',
      items: const [
        GVAccordionItemData(
          id: 'item-1',
          title: 'Is it accessible?',
          content: Text('Yes. It adheres to WAI-ARIA standards.'),
        ),
      ],
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVAccordion widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="accordion" height={360} title="GVAccordion Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVAccordion Props"
        props={[
          {
            name: 'items',
            type: 'List<GVAccordionItemData>',
            default: 'required',
            description: 'List of accordion items containing id, title, and content widget.',
          },
          {
            name: 'initialExpandedId',
            type: 'String?',
            default: 'null',
            description: 'ID of the item that should be open on initial render.',
          },
        ]}
      />
    </>
  );
}
