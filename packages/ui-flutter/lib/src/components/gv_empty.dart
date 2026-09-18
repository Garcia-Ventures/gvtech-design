import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVEmpty extends StatelessWidget {
  final String title;
  final String? description;
  final Widget? icon;
  final Widget? action;

  const GVEmpty({
    super.key,
    required this.title,
    this.description,
    this.icon,
    this.action,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Container(
      padding: const EdgeInsets.all(GVSpacing.s8),
      alignment: Alignment.center,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          if (icon != null) ...[
            Container(
              padding: const EdgeInsets.all(GVSpacing.s4),
              decoration: BoxDecoration(
                color: theme.colorScheme.surfaceContainerHighest,
                shape: BoxShape.circle,
              ),
              child: IconTheme(
                data: IconThemeData(
                  size: 32,
                  color: theme.colorScheme.onSurface.withValues(alpha: 0.6),
                ),
                child: icon!,
              ),
            ),
            const SizedBox(height: GVSpacing.s4),
          ],
          Text(
            title,
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.w600,
              color: theme.colorScheme.onSurface,
            ),
          ),
          if (description != null) ...[
            const SizedBox(height: GVSpacing.s2),
            Text(
              description!,
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 14,
                color: theme.colorScheme.onSurface.withValues(alpha: 0.6),
              ),
            ),
          ],
          if (action != null) ...[
            const SizedBox(height: GVSpacing.s6),
            action!,
          ],
        ],
      ),
    );
  }
}
