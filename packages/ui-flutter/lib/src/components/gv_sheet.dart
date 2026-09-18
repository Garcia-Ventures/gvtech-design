import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVSheet extends StatelessWidget {
  final String title;
  final String? description;
  final Widget child;

  const GVSheet({
    super.key,
    required this.title,
    this.description,
    required this.child,
  });

  static Future<T?> show<T>({
    required BuildContext context,
    required String title,
    String? description,
    required Widget child,
  }) {
    return showModalBottomSheet<T>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => GVSheet(
        title: title,
        description: description,
        child: child,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Container(
      decoration: BoxDecoration(
        color: theme.colorScheme.surface,
        borderRadius: const BorderRadius.vertical(
          top: Radius.circular(GVRadii.xl),
        ),
      ),
      padding: EdgeInsets.only(
        left: GVSpacing.s6,
        right: GVSpacing.s6,
        top: GVSpacing.s4,
        bottom: MediaQuery.of(context).viewInsets.bottom + GVSpacing.s6,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Center(
            child: Container(
              width: 36,
              height: 4,
              decoration: BoxDecoration(
                color: theme.colorScheme.onSurface.withValues(alpha: 0.2),
                borderRadius: BorderRadius.circular(2),
              ),
            ),
          ),
          const SizedBox(height: GVSpacing.s4),
          Text(
            title,
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.w600,
              color: theme.colorScheme.onSurface,
            ),
          ),
          if (description != null) ...[
            const SizedBox(height: GVSpacing.s1),
            Text(
              description!,
              style: TextStyle(
                fontSize: 14,
                color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
              ),
            ),
          ],
          const SizedBox(height: GVSpacing.s4),
          child,
        ],
      ),
    );
  }
}
