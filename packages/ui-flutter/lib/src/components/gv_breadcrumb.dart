import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVBreadcrumbItem {
  final String label;
  final VoidCallback? onTap;

  const GVBreadcrumbItem({
    required this.label,
    this.onTap,
  });
}

class GVBreadcrumb extends StatelessWidget {
  final List<GVBreadcrumbItem> items;
  final Widget? separator;

  const GVBreadcrumb({
    super.key,
    required this.items,
    this.separator,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final sep = separator ??
        Icon(
          Icons.chevron_right,
          size: 16,
          color: theme.colorScheme.onSurface.withValues(alpha: 0.4),
        );

    final List<Widget> children = [];
    for (int i = 0; i < items.length; i++) {
      final item = items[i];
      final isLast = i == items.length - 1;

      children.add(
        InkWell(
          onTap: isLast ? null : item.onTap,
          borderRadius: BorderRadius.circular(GVRadii.sm),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 2.0),
            child: Text(
              item.label,
              style: TextStyle(
                fontSize: 13,
                fontWeight: isLast ? FontWeight.w600 : FontWeight.w400,
                color: isLast
                    ? theme.colorScheme.onSurface
                    : theme.colorScheme.onSurface.withValues(alpha: 0.6),
              ),
            ),
          ),
        ),
      );

      if (!isLast) {
        children.add(
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: GVSpacing.s1),
            child: sep,
          ),
        );
      }
    }

    return Wrap(
      crossAxisAlignment: WrapCrossAlignment.center,
      children: children,
    );
  }
}
