import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVProgress extends StatelessWidget {
  final double? value; // 0.0 to 1.0, null for indeterminate
  final double height;
  final Color? color;
  final Color? backgroundColor;

  const GVProgress({
    super.key,
    this.value,
    this.height = 6.0,
    this.color,
    this.backgroundColor,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final activeColor = color ?? theme.colorScheme.primary;
    final trackColor =
        backgroundColor ?? theme.colorScheme.surfaceContainerHighest;

    return ClipRRect(
      borderRadius: BorderRadius.circular(GVRadii.full),
      child: SizedBox(
        height: height,
        child: LinearProgressIndicator(
          value: value,
          color: activeColor,
          backgroundColor: trackColor,
        ),
      ),
    );
  }
}
