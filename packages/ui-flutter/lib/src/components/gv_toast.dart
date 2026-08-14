import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

enum GVToastVariant {
  defaultVariant,
  destructive,
  success,
}

class GVToast {
  static void show(
    BuildContext context, {
    required String title,
    String? description,
    GVToastVariant variant = GVToastVariant.defaultVariant,
    Duration duration = const Duration(seconds: 3),
  }) {
    final theme = Theme.of(context);

    Color getBgColor() {
      switch (variant) {
        case GVToastVariant.destructive:
          return theme.colorScheme.error;
        case GVToastVariant.success:
          return GVColors.semanticSuccess;
        case GVToastVariant.defaultVariant:
          return theme.colorScheme.inverseSurface;
      }
    }

    Color getTextColor() {
      switch (variant) {
        case GVToastVariant.destructive:
          return theme.colorScheme.onError;
        case GVToastVariant.success:
          return Colors.white;
        case GVToastVariant.defaultVariant:
          return theme.colorScheme.onInverseSurface;
      }
    }

    final snackBar = SnackBar(
      duration: duration,
      backgroundColor: getBgColor(),
      behavior: SnackBarBehavior.floating,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(GVRadii.lg),
      ),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w600,
              color: getTextColor(),
            ),
          ),
          if (description != null) ...[
            const SizedBox(height: 2),
            Text(
              description,
              style: TextStyle(
                fontSize: 12,
                color: getTextColor().withValues(alpha: 0.8),
              ),
            ),
          ],
        ],
      ),
    );

    ScaffoldMessenger.of(context).hideCurrentSnackBar();
    ScaffoldMessenger.of(context).showSnackBar(snackBar);
  }
}
