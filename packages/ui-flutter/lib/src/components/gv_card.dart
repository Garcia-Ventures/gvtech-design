import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVCard extends StatelessWidget {
  final Widget child;
  final EdgeInsetsGeometry? padding;
  final VoidCallback? onTap;

  const GVCard({
    super.key,
    required this.child,
    this.padding,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final backgroundColor = isDark ? GVColors.darkCard : GVColors.lightCard;
    final borderColor = isDark ? GVColors.darkBorder : GVColors.lightBorder;

    final cardChild = Container(
      padding: padding ?? const EdgeInsets.all(GVSpacing.s6),
      decoration: BoxDecoration(
        color: backgroundColor,
        borderRadius: BorderRadius.circular(GVRadii.lg),
        border: Border.all(color: borderColor, width: 1),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: isDark ? 0.3 : 0.05),
            blurRadius: 4,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: child,
    );

    if (onTap != null) {
      return Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(GVRadii.lg),
          child: cardChild,
        ),
      );
    }

    return cardChild;
  }
}

class GVCardHeader extends StatelessWidget {
  final Widget? title;
  final Widget? description;
  final Widget? child;
  final EdgeInsetsGeometry? padding;

  const GVCardHeader({
    super.key,
    this.title,
    this.description,
    this.child,
    this.padding,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding ?? const EdgeInsets.only(bottom: GVSpacing.s4),
      child: child ??
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              if (title != null) title!,
              if (title != null && description != null)
                const SizedBox(height: GVSpacing.s1),
              if (description != null) description!,
            ],
          ),
    );
  }
}

class GVCardTitle extends StatelessWidget {
  final String text;
  final TextStyle? style;

  const GVCardTitle(
    this.text, {
    super.key,
    this.style,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final defaultColor = isDark ? GVColors.darkCardForeground : GVColors.lightCardForeground;

    return Text(
      text,
      style: TextStyle(
        fontSize: 20,
        fontWeight: FontWeight.w600,
        letterSpacing: -0.5,
        color: defaultColor,
      ).merge(style),
    );
  }
}

class GVCardDescription extends StatelessWidget {
  final String text;
  final TextStyle? style;

  const GVCardDescription(
    this.text, {
    super.key,
    this.style,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final defaultColor = isDark ? GVColors.darkMutedForeground : GVColors.lightMutedForeground;

    return Text(
      text,
      style: TextStyle(
        fontSize: 14,
        color: defaultColor,
      ).merge(style),
    );
  }
}

class GVCardContent extends StatelessWidget {
  final Widget child;
  final EdgeInsetsGeometry? padding;

  const GVCardContent({
    super.key,
    required this.child,
    this.padding,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding ?? EdgeInsets.zero,
      child: child,
    );
  }
}

class GVCardFooter extends StatelessWidget {
  final Widget child;
  final EdgeInsetsGeometry? padding;

  const GVCardFooter({
    super.key,
    required this.child,
    this.padding,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding ?? const EdgeInsets.only(top: GVSpacing.s6),
      child: child,
    );
  }
}
