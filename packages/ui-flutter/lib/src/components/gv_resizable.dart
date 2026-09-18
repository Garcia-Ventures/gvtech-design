import 'package:flutter/material.dart';

class GVResizable extends StatelessWidget {
  final Widget left;
  final Widget right;

  const GVResizable({
    super.key,
    required this.left,
    required this.right,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(child: left),
        const VerticalDivider(width: 1),
        Expanded(child: right),
      ],
    );
  }
}
