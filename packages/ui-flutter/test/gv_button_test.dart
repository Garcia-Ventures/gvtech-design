import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

void main() {
  testWidgets('GVButton renders label correctly', (WidgetTester tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: GVButton(
            label: 'Click Me',
            onPressed: () {},
          ),
        ),
      ),
    );

    expect(find.text('Click Me'), findsOneWidget);
  });

  testWidgets('GVButton invokes onPressed when tapped', (WidgetTester tester) async {
    bool tapped = false;

    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: GVButton(
            label: 'Submit',
            onPressed: () {
              tapped = true;
            },
          ),
        ),
      ),
    );

    await tester.tap(find.text('Submit'));
    expect(tapped, isTrue);
  });

  testWidgets('GVButton shows progress indicator when isLoading is true', (WidgetTester tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: GVButton(
            label: 'Loading',
            isLoading: true,
            onPressed: () {},
          ),
        ),
      ),
    );

    expect(find.byType(CircularProgressIndicator), findsOneWidget);
  });
}
