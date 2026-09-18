import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterCalendarDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyCalendarWidget extends StatefulWidget {
  @override
  State<MyCalendarWidget> createState() => _MyCalendarWidgetState();
}

class _MyCalendarWidgetState extends State<MyCalendarWidget> {
  DateTime _date = DateTime.now();

  @override
  Widget build(BuildContext context) {
    return GVCalendar(
      selectedDate: _date,
      onDateSelected: (d) => setState(() => _date = d),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVCalendar widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="calendar" height={420} title="GVCalendar Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVCalendar Props"
        props={[
          {
            name: 'selectedDate',
            type: 'DateTime?',
            default: 'null',
            description: 'Currently selected DateTime value.',
          },
          {
            name: 'onDateSelected',
            type: 'ValueChanged<DateTime>?',
            default: 'null',
            description: 'Callback when user taps a date.',
          },
        ]}
      />
    </>
  );
}
