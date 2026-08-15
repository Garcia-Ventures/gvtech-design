import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterPaginationDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyPaginationWidget extends StatefulWidget {
  @override
  State<MyPaginationWidget> createState() => _MyPaginationWidgetState();
}

class _MyPaginationWidgetState extends State<MyPaginationWidget> {
  int _page = 1;

  @override
  Widget build(BuildContext context) {
    return GVPagination(
      currentPage: _page,
      totalPages: 5,
      onPageChanged: (p) => setState(() => _page = p),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVPagination widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="pagination" height={280} title="GVPagination Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVPagination Props"
        props={[
          {
            name: 'currentPage',
            type: 'int',
            default: 'required',
            description: 'Current 1-indexed active page.',
          },
          {
            name: 'totalPages',
            type: 'int',
            default: 'required',
            description: 'Total number of pages.',
          },
          {
            name: 'onPageChanged',
            type: 'ValueChanged<int>?',
            default: 'null',
            description: 'Callback when user selects a page.',
          },
        ]}
      />
    </>
  );
}
