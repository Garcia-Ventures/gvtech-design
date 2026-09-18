import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVDropdownMenuItem {
  final String label;
  final IconData? icon;
  final VoidCallback? onTap;
  final bool isDestructive;

  const GVDropdownMenuItem({
    required this.label,
    this.icon,
    this.onTap,
    this.isDestructive = false,
  });
}

class GVDropdownMenu extends StatelessWidget {
  final Widget trigger;
  final List<GVDropdownMenuItem> items;

  const GVDropdownMenu({
    super.key,
    required this.trigger,
    required this.items,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return PopupMenuButton<GVDropdownMenuItem>(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(GVRadii.md),
        side: BorderSide(
          color: theme.colorScheme.outlineVariant,
          width: 1.0,
        ),
      ),
      color: theme.colorScheme.surface,
      itemBuilder: (context) {
        return items.map((item) {
          final color = item.isDestructive
              ? theme.colorScheme.error
              : theme.colorScheme.onSurface;

          return PopupMenuItem<GVDropdownMenuItem>(
            value: item,
            onTap: item.onTap,
            child: Row(
              children: [
                if (item.icon != null) ...[
                  Icon(item.icon, size: 16, color: color),
                  const SizedBox(width: GVSpacing.s2),
                ],
                Text(
                  item.label,
                  style: TextStyle(
                    fontSize: 13,
                    fontWeight: FontWeight.w500,
                    color: color,
                  ),
                ),
              ],
            ),
          );
        }).toList();
      },
      child: trigger,
    );
  }
}
