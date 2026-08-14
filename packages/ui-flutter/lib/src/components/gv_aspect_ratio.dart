import 'package:flutter/material.dart';

class GVAspectRatio extends StatelessWidget {
  final double aspectRatio;
  final Widget child;

  const GVAspectRatio({
    super.key,
    this.aspectRatio = 16 / 9,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: aspectRatio,
      child: child,
    );
  }
}
