import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVTooltip extends StatelessWidget {
  final String message;
  final Widget child;

  const GVTooltip({
    super.key,
    required this.message,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Tooltip(
      message: message,
      padding: const EdgeInsets.symmetric(
        horizontal: GVSpacing.s3,
        vertical: GVSpacing.s2,
      ),
      decoration: BoxDecoration(
        color: theme.colorScheme.inverseSurface,
        borderRadius: BorderRadius.circular(GVRadii.md),
      ),
      textStyle: TextStyle(
        fontSize: 12,
        fontWeight: FontWeight.w500,
        color: theme.colorScheme.onInverseSurface,
      ),
      child: child,
    );
  }
}
