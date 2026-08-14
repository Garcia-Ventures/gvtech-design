import 'package:flutter/material.dart';

class GVButtonGroup extends StatelessWidget {
  final List<Widget> children;

  const GVButtonGroup({
    super.key,
    required this.children,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: children,
    );
  }
}
