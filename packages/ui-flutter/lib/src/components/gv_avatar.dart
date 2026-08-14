import 'package:flutter/material.dart';

enum GVAvatarSize {
  xs,
  sm,
  md,
  lg,
  xl,
}

class GVAvatar extends StatelessWidget {
  final ImageProvider? imageProvider;
  final String? initials;
  final GVAvatarSize size;
  final VoidCallback? onTap;

  const GVAvatar({
    super.key,
    this.imageProvider,
    this.initials,
    this.size = GVAvatarSize.md,
    this.onTap,
  });

  double _getDimension() {
    switch (size) {
      case GVAvatarSize.xs:
        return 24.0;
      case GVAvatarSize.sm:
        return 32.0;
      case GVAvatarSize.md:
        return 40.0;
      case GVAvatarSize.lg:
        return 48.0;
      case GVAvatarSize.xl:
        return 64.0;
    }
  }

  double _getFontSize() {
    switch (size) {
      case GVAvatarSize.xs:
        return 10.0;
      case GVAvatarSize.sm:
        return 12.0;
      case GVAvatarSize.md:
        return 14.0;
      case GVAvatarSize.lg:
        return 18.0;
      case GVAvatarSize.xl:
        return 24.0;
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final dimension = _getDimension();
    final fontSize = _getFontSize();

    Widget avatarChild;
    if (imageProvider != null) {
      avatarChild = CircleAvatar(
        radius: dimension / 2,
        backgroundImage: imageProvider,
        backgroundColor: theme.colorScheme.surfaceContainerHighest,
      );
    } else {
      avatarChild = CircleAvatar(
        radius: dimension / 2,
        backgroundColor: theme.colorScheme.surfaceContainerHighest,
        child: Text(
          (initials ?? '?').toUpperCase(),
          style: TextStyle(
            fontSize: fontSize,
            fontWeight: FontWeight.bold,
            color: theme.colorScheme.onSurface,
          ),
        ),
      );
    }

    if (onTap != null) {
      return GestureDetector(
        onTap: onTap,
        child: avatarChild,
      );
    }

    return avatarChild;
  }
}
