import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

enum GVButtonVariant {
  primary,
  secondary,
  destructive,
  outline,
  ghost,
  link,
}

enum GVButtonSize {
  xs,
  sm,
  defaultSize,
  lg,
  icon,
}

class GVButton extends StatelessWidget {
  final String? label;
  final Widget? child;
  final VoidCallback? onPressed;
  final GVButtonVariant variant;
  final GVButtonSize size;
  final bool disabled;
  final bool isLoading;
  final IconData? prefixIcon;
  final IconData? suffixIcon;

  const GVButton({
    super.key,
    this.label,
    this.child,
    this.onPressed,
    this.variant = GVButtonVariant.primary,
    this.size = GVButtonSize.defaultSize,
    this.disabled = false,
    this.isLoading = false,
    this.prefixIcon,
    this.suffixIcon,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;

    final isEffectiveDisabled = disabled || isLoading || onPressed == null;

    final colors = _resolveColors(isDark);
    final padding = _resolvePadding();
    final height = _resolveHeight();

    Widget content = child ??
        Text(
          label ?? '',
          style: TextStyle(
            color: isEffectiveDisabled
                ? colors.foreground.withValues(alpha: 0.5)
                : colors.foreground,
            fontSize: size == GVButtonSize.xs ? 12 : (size == GVButtonSize.lg ? 16 : 14),
            fontWeight: FontWeight.w500,
            decoration: variant == GVButtonVariant.link
                ? TextDecoration.underline
                : TextDecoration.none,
          ),
        );

    if (isLoading) {
      content = Row(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          SizedBox(
            width: 16,
            height: 16,
            child: CircularProgressIndicator(
              strokeWidth: 2,
              valueColor: AlwaysStoppedAnimation<Color>(colors.foreground),
            ),
          ),
          if (label != null || child != null) ...[
            const SizedBox(width: GVSpacing.s2),
            content,
          ],
        ],
      );
    } else if (prefixIcon != null || suffixIcon != null) {
      content = Row(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          if (prefixIcon != null) ...[
            Icon(prefixIcon, size: 16, color: colors.foreground),
            const SizedBox(width: GVSpacing.s2),
          ],
          content,
          if (suffixIcon != null) ...[
            const SizedBox(width: GVSpacing.s2),
            Icon(suffixIcon, size: 16, color: colors.foreground),
          ],
        ],
      );
    }

    return AnimatedOpacity(
      duration: const Duration(milliseconds: 150),
      opacity: isEffectiveDisabled ? 0.6 : 1.0,
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: isEffectiveDisabled ? null : onPressed,
          borderRadius: BorderRadius.circular(GVRadii.md),
          child: Ink(
            height: height,
            padding: padding,
            decoration: BoxDecoration(
              color: isEffectiveDisabled ? colors.disabledBackground : colors.background,
              borderRadius: BorderRadius.circular(GVRadii.md),
              border: colors.border != null
                  ? Border.all(color: colors.border!, width: 1)
                  : null,
            ),
            child: Center(
              widthFactor: 1.0,
              heightFactor: 1.0,
              child: content,
            ),
          ),
        ),
      ),
    );
  }

  double? _resolveHeight() {
    switch (size) {
      case GVButtonSize.xs:
        return 28;
      case GVButtonSize.sm:
        return 36;
      case GVButtonSize.defaultSize:
        return 40;
      case GVButtonSize.lg:
        return 44;
      case GVButtonSize.icon:
        return 40;
    }
  }

  EdgeInsets _resolvePadding() {
    if (size == GVButtonSize.icon) {
      return const EdgeInsets.all(GVSpacing.s2);
    }
    switch (size) {
      case GVButtonSize.xs:
        return const EdgeInsets.symmetric(horizontal: GVSpacing.s2, vertical: 4);
      case GVButtonSize.sm:
        return const EdgeInsets.symmetric(horizontal: GVSpacing.s3, vertical: GVSpacing.s1);
      case GVButtonSize.defaultSize:
        return const EdgeInsets.symmetric(horizontal: GVSpacing.s4, vertical: GVSpacing.s2);
      case GVButtonSize.lg:
        return const EdgeInsets.symmetric(horizontal: GVSpacing.s6, vertical: GVSpacing.s3);
      case GVButtonSize.icon:
        return const EdgeInsets.all(GVSpacing.s2);
    }
  }

  _ButtonColors _resolveColors(bool isDark) {
    switch (variant) {
      case GVButtonVariant.primary:
        return _ButtonColors(
          background: isDark ? GVColors.darkPrimary : GVColors.lightPrimary,
          foreground: isDark ? GVColors.darkPrimaryForeground : GVColors.lightPrimaryForeground,
          disabledBackground: (isDark ? GVColors.darkPrimary : GVColors.lightPrimary).withValues(alpha: 0.4),
        );
      case GVButtonVariant.secondary:
        return _ButtonColors(
          background: isDark ? GVColors.darkSecondary : GVColors.lightSecondary,
          foreground: isDark ? GVColors.darkSecondaryForeground : GVColors.lightSecondaryForeground,
          disabledBackground: (isDark ? GVColors.darkSecondary : GVColors.lightSecondary).withValues(alpha: 0.4),
        );
      case GVButtonVariant.destructive:
        return _ButtonColors(
          background: isDark ? GVColors.darkDestructive : GVColors.lightDestructive,
          foreground: isDark ? GVColors.darkDestructiveForeground : GVColors.lightDestructiveForeground,
          disabledBackground: (isDark ? GVColors.darkDestructive : GVColors.lightDestructive).withValues(alpha: 0.4),
        );
      case GVButtonVariant.outline:
        return _ButtonColors(
          background: Colors.transparent,
          foreground: isDark ? GVColors.darkForeground : GVColors.lightForeground,
          border: isDark ? GVColors.darkBorder : GVColors.lightBorder,
          disabledBackground: Colors.transparent,
        );
      case GVButtonVariant.ghost:
        return _ButtonColors(
          background: Colors.transparent,
          foreground: isDark ? GVColors.darkForeground : GVColors.lightForeground,
          disabledBackground: Colors.transparent,
        );
      case GVButtonVariant.link:
        return _ButtonColors(
          background: Colors.transparent,
          foreground: isDark ? GVColors.darkPrimary : GVColors.lightPrimary,
          disabledBackground: Colors.transparent,
        );
    }
  }
}

class _ButtonColors {
  final Color background;
  final Color foreground;
  final Color disabledBackground;
  final Color? border;

  const _ButtonColors({
    required this.background,
    required this.foreground,
    required this.disabledBackground,
    this.border,
  });
}
