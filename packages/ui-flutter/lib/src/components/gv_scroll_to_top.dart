import 'package:flutter/material.dart';

class GVScrollToTop extends StatelessWidget {
  final ScrollController controller;

  const GVScrollToTop({
    super.key,
    required this.controller,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return FloatingActionButton.small(
      backgroundColor: theme.colorScheme.primary,
      foregroundColor: theme.colorScheme.onPrimary,
      onPressed: () {
        controller.animateTo(
          0.0,
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeOut,
        );
      },
      child: const Icon(Icons.arrow_upward, size: 18),
    );
  }
}
