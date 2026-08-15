import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

enum GVBadgeVariant {
  defaultVariant,
  secondary,
  destructive,
  outline,
}

class GVBadge extends StatelessWidget {
  final String? label;
  final Widget? child;
  final GVBadgeVariant variant;
  final IconData? icon;

  const GVBadge({
    super.key,
    this.label,
    this.child,
    this.variant = GVBadgeVariant.defaultVariant,
    this.icon,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final colors = _resolveColors(isDark);

    Widget content = child ??
        Text(
          label ?? '',
          style: TextStyle(
            color: colors.foreground,
            fontSize: 12,
            fontWeight: FontWeight.w600,
          ),
        );

    if (icon != null) {
      content = Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 12, color: colors.foreground),
          const SizedBox(width: 4),
          content,
        ],
      );
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 2),
      decoration: BoxDecoration(
        color: colors.background,
        borderRadius: BorderRadius.circular(GVRadii.full),
        border: colors.border != null
            ? Border.all(color: colors.border!, width: 1)
            : null,
      ),
      child: content,
    );
  }

  _BadgeColors _resolveColors(bool isDark) {
    switch (variant) {
      case GVBadgeVariant.defaultVariant:
        return _BadgeColors(
          background: isDark ? GVColors.darkPrimary : GVColors.lightPrimary,
          foreground: isDark ? GVColors.darkPrimaryForeground : GVColors.lightPrimaryForeground,
        );
      case GVBadgeVariant.secondary:
        return _BadgeColors(
          background: isDark ? GVColors.darkSecondary : GVColors.lightSecondary,
          foreground: isDark ? GVColors.darkSecondaryForeground : GVColors.lightSecondaryForeground,
        );
      case GVBadgeVariant.destructive:
        return _BadgeColors(
          background: isDark ? GVColors.darkDestructive : GVColors.lightDestructive,
          foreground: isDark ? GVColors.darkDestructiveForeground : GVColors.lightDestructiveForeground,
        );
      case GVBadgeVariant.outline:
        return _BadgeColors(
          background: Colors.transparent,
          foreground: isDark ? GVColors.darkForeground : GVColors.lightForeground,
          border: isDark ? GVColors.darkBorder : GVColors.lightBorder,
        );
    }
  }
}

class _BadgeColors {
  final Color background;
  final Color foreground;
  final Color? border;

  const _BadgeColors({
    required this.background,
    required this.foreground,
    this.border,
  });
}
