import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';
import 'gv_button.dart';

class GVAlertDialog extends StatelessWidget {
  final String title;
  final String description;
  final String cancelLabel;
  final String actionLabel;
  final VoidCallback? onAction;
  final bool isDestructive;

  const GVAlertDialog({
    super.key,
    required this.title,
    required this.description,
    this.cancelLabel = 'Cancel',
    this.actionLabel = 'Continue',
    this.onAction,
    this.isDestructive = false,
  });

  static Future<void> show(
    BuildContext context, {
    required String title,
    required String description,
    String cancelLabel = 'Cancel',
    String actionLabel = 'Continue',
    VoidCallback? onAction,
    bool isDestructive = false,
  }) {
    return showDialog<void>(
      context: context,
      builder: (context) => GVAlertDialog(
        title: title,
        description: description,
        cancelLabel: cancelLabel,
        actionLabel: actionLabel,
        onAction: onAction,
        isDestructive: isDestructive,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Dialog(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(GVRadii.lg),
      ),
      backgroundColor: theme.colorScheme.surface,
      child: Container(
        width: 360,
        padding: const EdgeInsets.all(GVSpacing.s6),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w600,
                color: theme.colorScheme.onSurface,
              ),
            ),
            const SizedBox(height: GVSpacing.s2),
            Text(
              description,
              style: TextStyle(
                fontSize: 14,
                color: theme.colorScheme.onSurface.withValues(alpha: 0.6),
              ),
            ),
            const SizedBox(height: GVSpacing.s6),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                GVButton(
                  label: cancelLabel,
                  variant: GVButtonVariant.outline,
                  onPressed: () => Navigator.of(context).pop(),
                ),
                const SizedBox(width: GVSpacing.s2),
                GVButton(
                  label: actionLabel,
                  variant: isDestructive
                      ? GVButtonVariant.destructive
                      : GVButtonVariant.primary,
                  onPressed: () {
                    Navigator.of(context).pop();
                    onAction?.call();
                  },
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
