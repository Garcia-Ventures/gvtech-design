import 'package:flutter/material.dart';

class GVDirection extends StatelessWidget {
  final TextDirection direction;
  final Widget child;

  const GVDirection({
    super.key,
    this.direction = TextDirection.ltr,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return Directionality(
      textDirection: direction,
      child: child,
    );
  }
}
