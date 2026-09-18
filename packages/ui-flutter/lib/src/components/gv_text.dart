import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

enum GVTextVariant {
  h1,
  h2,
  h3,
  h4,
  p,
  blockquote,
  lead,
  large,
  small,
  muted,
}

class GVText extends StatelessWidget {
  final String text;
  final GVTextVariant variant;
  final Color? color;
  final TextAlign? textAlign;
  final int? maxLines;
  final TextOverflow? overflow;

  const GVText(
    this.text, {
    super.key,
    this.variant = GVTextVariant.p,
    this.color,
    this.textAlign,
    this.maxLines,
    this.overflow,
  });

  TextStyle _getStyle(ThemeData theme) {
    final baseColor = color ?? theme.colorScheme.onSurface;

    switch (variant) {
      case GVTextVariant.h1:
        return TextStyle(
          fontSize: 36.0,
          fontWeight: FontWeight.w800,
          letterSpacing: -0.8,
          height: 1.2,
          color: baseColor,
        );
      case GVTextVariant.h2:
        return TextStyle(
          fontSize: 30.0,
          fontWeight: FontWeight.w700,
          letterSpacing: -0.6,
          height: 1.25,
          color: baseColor,
        );
      case GVTextVariant.h3:
        return TextStyle(
          fontSize: 24.0,
          fontWeight: FontWeight.w600,
          letterSpacing: -0.4,
          height: 1.3,
          color: baseColor,
        );
      case GVTextVariant.h4:
        return TextStyle(
          fontSize: 20.0,
          fontWeight: FontWeight.w600,
          letterSpacing: -0.2,
          height: 1.35,
          color: baseColor,
        );
      case GVTextVariant.p:
        return TextStyle(
          fontSize: 16.0,
          fontWeight: FontWeight.w400,
          height: 1.5,
          color: baseColor,
        );
      case GVTextVariant.blockquote:
        return TextStyle(
          fontSize: 16.0,
          fontStyle: FontStyle.italic,
          height: 1.5,
          color: baseColor.withValues(alpha: 0.8),
        );
      case GVTextVariant.lead:
        return TextStyle(
          fontSize: 20.0,
          fontWeight: FontWeight.w400,
          height: 1.5,
          color: baseColor.withValues(alpha: 0.8),
        );
      case GVTextVariant.large:
        return TextStyle(
          fontSize: 18.0,
          fontWeight: FontWeight.w600,
          height: 1.4,
          color: baseColor,
        );
      case GVTextVariant.small:
        return TextStyle(
          fontSize: 14.0,
          fontWeight: FontWeight.w500,
          height: 1.4,
          color: baseColor,
        );
      case GVTextVariant.muted:
        return TextStyle(
          fontSize: 14.0,
          fontWeight: FontWeight.w400,
          height: 1.4,
          color: theme.colorScheme.onSurface.withValues(alpha: 0.6),
        );
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    if (variant == GVTextVariant.blockquote) {
      return Container(
        padding: const EdgeInsets.only(left: GVSpacing.s4),
        decoration: BoxDecoration(
          border: Border(
            left: BorderSide(
              color: theme.colorScheme.outlineVariant,
              width: 3.0,
            ),
          ),
        ),
        child: Text(
          text,
          style: _getStyle(theme),
          textAlign: textAlign,
          maxLines: maxLines,
          overflow: overflow,
        ),
      );
    }

    return Text(
      text,
      style: _getStyle(theme),
      textAlign: textAlign,
      maxLines: maxLines,
      overflow: overflow,
    );
  }
}
