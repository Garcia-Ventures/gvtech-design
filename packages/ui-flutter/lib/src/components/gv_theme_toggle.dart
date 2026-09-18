import 'package:flutter/material.dart';

class GVThemeToggle extends StatelessWidget {
  final VoidCallback? onToggle;

  const GVThemeToggle({
    super.key,
    this.onToggle,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return IconButton(
      icon: Icon(isDark ? Icons.light_mode : Icons.dark_mode, size: 20),
      onPressed: onToggle,
    );
  }
}
