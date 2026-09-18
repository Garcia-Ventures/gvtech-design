import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVSidebarItem {
  final String label;
  final IconData icon;
  final bool isSelected;
  final VoidCallback? onTap;

  const GVSidebarItem({
    required this.label,
    required this.icon,
    this.isSelected = false,
    this.onTap,
  });
}

class GVSidebar extends StatelessWidget {
  final String title;
  final List<GVSidebarItem> items;

  const GVSidebar({
    super.key,
    required this.title,
    required this.items,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Container(
      width: 240,
      padding: const EdgeInsets.all(GVSpacing.s4),
      decoration: BoxDecoration(
        color: theme.colorScheme.surface,
        border: Border(
          right: BorderSide(
            color: theme.colorScheme.outlineVariant,
            width: 1.0,
          ),
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: GVSpacing.s2,
              vertical: GVSpacing.s3,
            ),
            child: Text(
              title,
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
                color: theme.colorScheme.onSurface,
              ),
            ),
          ),
          const SizedBox(height: GVSpacing.s2),
          ...items.map((item) {
            return InkWell(
              onTap: item.onTap,
              borderRadius: BorderRadius.circular(GVRadii.md),
              child: Container(
                padding: const EdgeInsets.symmetric(
                  horizontal: GVSpacing.s3,
                  vertical: GVSpacing.s2,
                ),
                decoration: BoxDecoration(
                  color: item.isSelected
                      ? theme.colorScheme.surfaceContainerHighest
                      : Colors.transparent,
                  borderRadius: BorderRadius.circular(GVRadii.md),
                ),
                child: Row(
                  children: [
                    Icon(
                      item.icon,
                      size: 18,
                      color: item.isSelected
                          ? theme.colorScheme.primary
                          : theme.colorScheme.onSurface.withValues(alpha: 0.6),
                    ),
                    const SizedBox(width: GVSpacing.s3),
                    Text(
                      item.label,
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight:
                            item.isSelected ? FontWeight.w600 : FontWeight.w500,
                        color: item.isSelected
                            ? theme.colorScheme.primary
                            : theme.colorScheme.onSurface,
                      ),
                    ),
                  ],
                ),
              ),
            );
          }),
        ],
      ),
    );
  }
}
