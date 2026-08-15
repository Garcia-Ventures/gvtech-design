import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVDrawer extends StatelessWidget {
  final String title;
  final String? description;
  final Widget child;

  const GVDrawer({
    super.key,
    required this.title,
    this.description,
    required this.child,
  });

  static Future<void> show(
    BuildContext context, {
    required String title,
    String? description,
    required Widget child,
  }) {
    return showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => GVDrawer(
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
      margin: const EdgeInsets.all(GVSpacing.s4),
      decoration: BoxDecoration(
        color: theme.colorScheme.surface,
        borderRadius: BorderRadius.circular(GVRadii.x2l),
        border: Border.all(
          color: theme.colorScheme.outlineVariant,
          width: 1.0,
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.all(GVSpacing.s6),
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
                  borderRadius: BorderRadius.circular(GVRadii.full),
                ),
              ),
            ),
            const SizedBox(height: GVSpacing.s4),
            Text(
              title,
              style: TextStyle(
                fontSize: 16,
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
                  color: theme.colorScheme.onSurface.withValues(alpha: 0.6),
                ),
              ),
            ],
            const SizedBox(height: GVSpacing.s4),
            child,
          ],
        ),
      ),
    );
  }
}
