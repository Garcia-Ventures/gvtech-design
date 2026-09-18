import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVRadioOption<T> {
  final T value;
  final String label;
  final String? description;
  final bool disabled;

  const GVRadioOption({
    required this.value,
    required this.label,
    this.description,
    this.disabled = false,
  });
}

class GVRadioGroup<T> extends StatelessWidget {
  final T? value;
  final ValueChanged<T?>? onChanged;
  final List<GVRadioOption<T>> options;
  final String? label;
  final bool disabled;

  const GVRadioGroup({
    super.key,
    required this.value,
    required this.onChanged,
    required this.options,
    this.label,
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
          const SizedBox(height: GVSpacing.s2),
        ],
        Column(
          children: options.map((option) {
            final isOptionDisabled = disabled || option.disabled;
            final isSelected = option.value == value;

            return InkWell(
              onTap: isOptionDisabled
                  ? null
                  : () => onChanged?.call(option.value),
              borderRadius: BorderRadius.circular(GVRadii.md),
              child: Padding(
                padding: const EdgeInsets.symmetric(
                  vertical: GVSpacing.s2,
                  horizontal: GVSpacing.s1,
                ),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      margin: const EdgeInsets.only(top: 2),
                      width: 18,
                      height: 18,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        border: Border.all(
                          color: isOptionDisabled
                              ? theme.colorScheme.outlineVariant
                              : (isSelected
                                  ? theme.colorScheme.primary
                                  : theme.colorScheme.outlineVariant),
                          width: 2,
                        ),
                      ),
                      padding: const EdgeInsets.all(3),
                      child: isSelected
                          ? Container(
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                color: isOptionDisabled
                                    ? theme.colorScheme.onSurface
                                        .withValues(alpha: 0.4)
                                    : theme.colorScheme.primary,
                              ),
                            )
                          : null,
                    ),
                    const SizedBox(width: GVSpacing.s3),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            option.label,
                            style: TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.w500,
                              color: isOptionDisabled
                                  ? theme.colorScheme.onSurface
                                      .withValues(alpha: 0.5)
                                  : theme.colorScheme.onSurface,
                            ),
                          ),
                          if (option.description != null) ...[
                            const SizedBox(height: GVSpacing.s1),
                            Text(
                              option.description!,
                              style: TextStyle(
                                fontSize: 12,
                                color: theme.colorScheme.onSurface
                                    .withValues(alpha: 0.6),
                              ),
                            ),
                          ],
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            );
          }).toList(),
        ),
      ],
    );
  }
}
