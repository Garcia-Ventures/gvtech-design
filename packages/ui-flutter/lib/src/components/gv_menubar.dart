import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';
import 'gv_dropdown_menu.dart';

class GVMenubarMenu {
  final String title;
  final List<GVDropdownMenuItem> items;

  const GVMenubarMenu({
    required this.title,
    required this.items,
  });
}

class GVMenubar extends StatelessWidget {
  final List<GVMenubarMenu> menus;

  const GVMenubar({
    super.key,
    required this.menus,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: GVSpacing.s2),
      decoration: BoxDecoration(
        color: theme.colorScheme.surface,
        borderRadius: BorderRadius.circular(GVRadii.md),
        border: Border.all(
          color: theme.colorScheme.outlineVariant,
          width: 1.0,
        ),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: menus.map((menu) {
          return GVDropdownMenu(
            items: menu.items,
            trigger: Padding(
              padding: const EdgeInsets.symmetric(
                horizontal: GVSpacing.s3,
                vertical: GVSpacing.s2,
              ),
              child: Text(
                menu.title,
                style: TextStyle(
                  fontSize: 13,
                  fontWeight: FontWeight.w500,
                  color: theme.colorScheme.onSurface,
                ),
              ),
            ),
          );
        }).toList(),
      ),
    );
  }
}
