import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVSwitch extends StatelessWidget {
  final bool value;
  final ValueChanged<bool>? onChanged;
  final String? label;
  final bool disabled;

  const GVSwitch({
    super.key,
    required this.value,
    this.onChanged,
    this.label,
    this.disabled = false,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    final switchWidget = Switch(
      value: value,
      onChanged: disabled ? null : onChanged,
      activeThumbColor: theme.colorScheme.primary,
      activeTrackColor: theme.colorScheme.primary.withValues(alpha: 0.4),
      inactiveThumbColor: theme.colorScheme.onSurface.withValues(alpha: 0.6),
      inactiveTrackColor: theme.colorScheme.surfaceContainerHighest,
    );

    if (label == null) {
      return switchWidget;
    }

    return InkWell(
      onTap: disabled || onChanged == null ? null : () => onChanged!(!value),
      borderRadius: BorderRadius.circular(GVRadii.sm),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          switchWidget,
          const SizedBox(width: GVSpacing.s2),
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
    );
  }
}
