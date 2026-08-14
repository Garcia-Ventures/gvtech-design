import 'package:flutter/material.dart';

class GVScrollArea extends StatelessWidget {
  final Widget child;
  final double? height;

  const GVScrollArea({
    super.key,
    required this.child,
    this.height,
  });

  @override
  Widget build(BuildContext context) {
    final scrollChild = Scrollbar(
      thumbVisibility: true,
      child: SingleChildScrollView(
        child: child,
      ),
    );

    if (height != null) {
      return SizedBox(
        height: height,
        child: scrollChild,
      );
    }

    return scrollChild;
  }
}
