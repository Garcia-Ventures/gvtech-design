import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVToggleGroupItem<T> {
  final T value;
  final Widget child;

  const GVToggleGroupItem({
    required this.value,
    required this.child,
  });
}

class GVToggleGroup<T> extends StatelessWidget {
  final T? value;
  final ValueChanged<T?>? onChanged;
  final List<GVToggleGroupItem<T>> items;
  final bool disabled;

  const GVToggleGroup({
    super.key,
    required this.value,
    required this.onChanged,
    required this.items,
    this.disabled = false,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Container(
      padding: const EdgeInsets.all(GVSpacing.s1),
      decoration: BoxDecoration(
        color: theme.colorScheme.surfaceContainerHighest,
        borderRadius: BorderRadius.circular(GVRadii.lg),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: items.map((item) {
          final isSelected = item.value == value;

          return InkWell(
            onTap: disabled
                ? null
                : () => onChanged?.call(isSelected ? null : item.value),
            borderRadius: BorderRadius.circular(GVRadii.md),
            child: Container(
              padding: const EdgeInsets.symmetric(
                horizontal: GVSpacing.s3,
                vertical: GVSpacing.s2,
              ),
              decoration: BoxDecoration(
                color: isSelected
                    ? theme.colorScheme.surface
                    : Colors.transparent,
                borderRadius: BorderRadius.circular(GVRadii.md),
                boxShadow: isSelected
                    ? [
                        BoxShadow(
                          color: Colors.black.withValues(alpha: 0.05),
                          blurRadius: 2,
                          offset: const Offset(0, 1),
                        ),
                      ]
                    : [],
              ),
              child: DefaultTextStyle(
                style: TextStyle(
                  fontSize: 13,
                  fontWeight: isSelected ? FontWeight.w600 : FontWeight.w500,
                  color: isSelected
                      ? theme.colorScheme.onSurface
                      : theme.colorScheme.onSurface.withValues(alpha: 0.6),
                ),
                child: IconTheme(
                  data: IconThemeData(
                    size: 16,
                    color: isSelected
                        ? theme.colorScheme.onSurface
                        : theme.colorScheme.onSurface.withValues(alpha: 0.6),
                  ),
                  child: item.child,
                ),
              ),
            ),
          );
        }).toList(),
      ),
    );
  }
}
