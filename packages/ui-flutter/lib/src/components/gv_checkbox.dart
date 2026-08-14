import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVCheckbox extends StatelessWidget {
  final bool value;
  final ValueChanged<bool?>? onChanged;
  final String? label;
  final bool disabled;
  final String? errorText;

  const GVCheckbox({
    super.key,
    required this.value,
    this.onChanged,
    this.label,
    this.disabled = false,
    this.errorText,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final hasError = errorText != null && errorText!.isNotEmpty;

    final checkboxWidget = Checkbox(
      value: value,
      onChanged: disabled ? null : onChanged,
      activeColor: theme.colorScheme.primary,
      checkColor: theme.colorScheme.onPrimary,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(GVRadii.sm),
      ),
      side: BorderSide(
        color: hasError
            ? theme.colorScheme.error
            : theme.colorScheme.outlineVariant,
        width: 1.5,
      ),
    );

    if (label == null) {
      return checkboxWidget;
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        InkWell(
          onTap: disabled || onChanged == null
              ? null
              : () => onChanged!(!value),
          borderRadius: BorderRadius.circular(GVRadii.sm),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              checkboxWidget,
              const SizedBox(width: GVSpacing.s1),
              Text(
                label!,
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                  color: disabled
                      ? theme.colorScheme.onSurface.withValues(alpha: 0.5)
                      : theme.colorScheme.onSurface,
                ),
              ),
            ],
          ),
        ),
        if (hasError) ...[
          const SizedBox(height: GVSpacing.s1),
          Text(
            errorText!,
            style: TextStyle(
              fontSize: 12,
              color: theme.colorScheme.error,
            ),
          ),
        ],
      ],
    );
  }
}
