import 'package:flutter/material.dart';

enum GVSeparatorOrientation {
  horizontal,
  vertical,
}

class GVSeparator extends StatelessWidget {
  final GVSeparatorOrientation orientation;
  final double thickness;
  final Color? color;

  const GVSeparator({
    super.key,
    this.orientation = GVSeparatorOrientation.horizontal,
    this.thickness = 1.0,
    this.color,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final dividerColor = color ?? theme.colorScheme.outlineVariant;

    if (orientation == GVSeparatorOrientation.vertical) {
      return VerticalDivider(
        width: thickness,
        thickness: thickness,
        color: dividerColor,
      );
    }

    return Divider(
      height: thickness,
      thickness: thickness,
      color: dividerColor,
    );
  }
}
