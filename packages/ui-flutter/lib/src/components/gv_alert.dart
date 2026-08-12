import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

enum GVAlertVariant {
  defaultVariant,
  destructive,
  info,
  success,
  warning,
}

class GVAlert extends StatelessWidget {
  final String title;
  final String? description;
  final Widget? icon;
  final GVAlertVariant variant;

  const GVAlert({
    super.key,
    required this.title,
    this.description,
    this.icon,
    this.variant = GVAlertVariant.defaultVariant,
  });

  Color _getBorderColor(ThemeData theme) {
    switch (variant) {
      case GVAlertVariant.destructive:
        return theme.colorScheme.error;
      case GVAlertVariant.info:
        return theme.colorScheme.primary;
      case GVAlertVariant.success:
        return GVColors.semanticSuccess;
      case GVAlertVariant.warning:
        return Colors.orange;
      case GVAlertVariant.defaultVariant:
        return theme.colorScheme.outlineVariant;
    }
  }

  Color _getBackgroundColor(ThemeData theme) {
    switch (variant) {
      case GVAlertVariant.destructive:
        return theme.colorScheme.error.withValues(alpha: 0.08);
      case GVAlertVariant.info:
        return theme.colorScheme.primary.withValues(alpha: 0.08);
      case GVAlertVariant.success:
        return GVColors.semanticSuccess.withValues(alpha: 0.08);
      case GVAlertVariant.warning:
        return Colors.orange.withValues(alpha: 0.08);
      case GVAlertVariant.defaultVariant:
        return theme.colorScheme.surface;
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final borderColor = _getBorderColor(theme);
    final backgroundColor = _getBackgroundColor(theme);

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(GVSpacing.s4),
      decoration: BoxDecoration(
        color: backgroundColor,
        borderRadius: BorderRadius.circular(GVRadii.lg),
        border: Border.all(color: borderColor, width: 1.0),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (icon != null) ...[
            Padding(
              padding: const EdgeInsets.only(top: 2.0),
              child: icon!,
            ),
            const SizedBox(width: GVSpacing.s3),
          ],
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w600,
                    color: theme.colorScheme.onSurface,
                  ),
                ),
                if (description != null) ...[
                  const SizedBox(height: GVSpacing.s1),
                  Text(
                    description!,
                    style: TextStyle(
                      fontSize: 13,
                      color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
                    ),
                  ),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}
