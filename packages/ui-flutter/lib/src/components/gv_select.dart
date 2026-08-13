import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVSelectItem<T> {
  final T value;
  final String label;

  const GVSelectItem({
    required this.value,
    required this.label,
  });
}

class GVSelect<T> extends StatelessWidget {
  final T? value;
  final ValueChanged<T?>? onChanged;
  final List<GVSelectItem<T>> items;
  final String? label;
  final String? placeholder;
  final bool disabled;

  const GVSelect({
    super.key,
    required this.value,
    required this.onChanged,
    required this.items,
    this.label,
    this.placeholder = 'Select an option',
    this.disabled = false,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

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
              color: disabled
                  ? theme.colorScheme.onSurface.withValues(alpha: 0.5)
                  : theme.colorScheme.onSurface,
            ),
          ),
          const SizedBox(height: GVSpacing.s1),
        ],
        DropdownButtonFormField<T>(
          initialValue: value,
          onChanged: disabled ? null : onChanged,
          icon: Icon(
            Icons.unfold_more,
            size: 18,
            color: theme.colorScheme.onSurface.withValues(alpha: 0.6),
          ),
          decoration: InputDecoration(
            hintText: placeholder,
            hintStyle: TextStyle(
              fontSize: 14,
              color: theme.colorScheme.onSurface.withValues(alpha: 0.4),
            ),
            contentPadding: const EdgeInsets.symmetric(
              horizontal: GVSpacing.s3,
              vertical: GVSpacing.s2,
            ),
            filled: true,
            fillColor: disabled
                ? theme.colorScheme.surface.withValues(alpha: 0.5)
                : theme.colorScheme.surface,
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(GVRadii.md),
              borderSide: BorderSide(
                color: theme.colorScheme.outlineVariant,
              ),
            ),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(GVRadii.md),
              borderSide: BorderSide(
                color: theme.colorScheme.outlineVariant,
              ),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(GVRadii.md),
              borderSide: BorderSide(
                color: theme.colorScheme.primary,
                width: 2,
              ),
            ),
          ),
          items: items
              .map(
                (item) => DropdownMenuItem<T>(
                  value: item.value,
                  child: Text(
                    item.label,
                    style: TextStyle(
                      fontSize: 14,
                      color: theme.colorScheme.onSurface,
                    ),
                  ),
                ),
              )
              .toList(),
        ),
      ],
    );
  }
}
