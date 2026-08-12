import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterToastDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

void showMyToast(BuildContext context) {
  GVToast.show(
    context,
    title: 'Event Scheduled',
    description: 'Friday, February 10, 2026 at 5:00 PM',
    variant: GVToastVariant.defaultVariant,
  );
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVToast notification control compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="toast" height={280} title="GVToast Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVToast.show Parameters"
        props={[
          {
            name: 'context',
            type: 'BuildContext',
            default: 'required',
            description: 'Flutter build context.',
          },
          {
            name: 'title',
            type: 'String',
            default: 'required',
            description: 'Toast headline title.',
          },
          {
            name: 'description',
            type: 'String?',
            default: 'null',
            description: 'Optional body description.',
          },
          {
            name: 'variant',
            type: 'GVToastVariant',
            default: 'GVToastVariant.defaultVariant',
            description: 'Toast style: defaultVariant, destructive, success.',
          },
          {
            name: 'duration',
            type: 'Duration',
            default: 'Duration(seconds: 3)',
            description: 'Display duration before auto-hiding.',
          },
        ]}
      />
    </>
  );
}
