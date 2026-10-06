import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterBreadcrumbDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyBreadcrumbWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVBreadcrumb(
      items: const [
        GVBreadcrumbItem(label: 'Home'),
        GVBreadcrumbItem(label: 'Components'),
        GVBreadcrumbItem(label: 'Breadcrumb'),
      ],
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVBreadcrumb widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="breadcrumb" height={260} title="GVBreadcrumb Interactive Preview" />
      </ComponentShowcase>

      <h3 className="mt-6 text-xl font-semibold">GVBreadcrumb Props</h3>
      <PropsTable
        props={[
          {
            name: 'items',
            type: 'List<GVBreadcrumbItem>',
            defaultValue: 'required',
            description: 'List of breadcrumb items with label and optional onTap handler.',
          },
          {
            name: 'separator',
            type: 'Widget?',
            defaultValue: 'Icon(Icons.chevron_right)',
            description: 'Custom separator widget override.',
          },
        ]}
      />
    </>
  );
}
