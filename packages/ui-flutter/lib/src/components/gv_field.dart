import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVField extends StatelessWidget {
  final String? label;
  final String? description;
  final String? errorText;
  final Widget child;

  const GVField({
    super.key,
    this.label,
    this.description,
    this.errorText,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final hasError = errorText != null && errorText!.isNotEmpty;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        if (label != null) ...[
          Text(
            label!,
            style: TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w500,
              color: theme.colorScheme.onSurface,
            ),
          ),
          const SizedBox(height: GVSpacing.s1),
        ],
        child,
        if (hasError) ...[
          const SizedBox(height: GVSpacing.s1),
          Text(
            errorText!,
            style: TextStyle(
              fontSize: 12,
              color: theme.colorScheme.error,
            ),
          ),
        ] else if (description != null) ...[
          const SizedBox(height: GVSpacing.s1),
          Text(
            description!,
            style: TextStyle(
              fontSize: 12,
              color: theme.colorScheme.onSurface.withValues(alpha: 0.6),
            ),
          ),
        ],
      ],
    );
  }
}
