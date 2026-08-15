import 'package:flutter/material.dart';

enum GVSpinnerSize {
  sm(16.0, 2.0),
  md(24.0, 2.5),
  lg(36.0, 3.0);

  final double dimension;
  final double strokeWidth;
  const GVSpinnerSize(this.dimension, this.strokeWidth);
}

class GVSpinner extends StatelessWidget {
  final GVSpinnerSize size;
  final Color? color;

  const GVSpinner({
    super.key,
    this.size = GVSpinnerSize.md,
    this.color,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final spinnerColor = color ?? theme.colorScheme.primary;

    return SizedBox(
      width: size.dimension,
      height: size.dimension,
      child: CircularProgressIndicator(
        strokeWidth: size.strokeWidth,
        valueColor: AlwaysStoppedAnimation<Color>(spinnerColor),
      ),
    );
  }
}
