import 'package:flutter/material.dart';

class GVLabel extends StatelessWidget {
  final String text;
  final bool required;
  final TextStyle? style;

  const GVLabel(
    this.text, {
    super.key,
    this.required = false,
    this.style,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          text,
          style: style ??
              TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.w500,
                color: theme.colorScheme.onSurface,
              ),
        ),
        if (required) ...[
          const SizedBox(width: 4),
          Text(
            '*',
            style: TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w500,
              color: theme.colorScheme.error,
            ),
          ),
        ],
      ],
    );
  }
}
