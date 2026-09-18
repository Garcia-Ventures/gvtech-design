import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

void main() {
  testWidgets('GVCard renders title, description, content, and footer', (WidgetTester tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: Scaffold(
          body: GVCard(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                GVCardHeader(
                  title: GVCardTitle('Card Title'),
                  description: GVCardDescription('Card Description'),
                ),
                GVCardContent(
                  child: Text('Card Content Body'),
                ),
                GVCardFooter(
                  child: Text('Card Footer Action'),
                ),
              ],
            ),
          ),
        ),
      ),
    );

    expect(find.text('Card Title'), findsOneWidget);
    expect(find.text('Card Description'), findsOneWidget);
    expect(find.text('Card Content Body'), findsOneWidget);
    expect(find.text('Card Footer Action'), findsOneWidget);
  });
}
