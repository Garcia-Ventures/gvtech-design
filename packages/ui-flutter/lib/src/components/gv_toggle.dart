import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVToggle extends StatelessWidget {
  final bool isPressed;
  final ValueChanged<bool>? onPressed;
  final Widget child;
  final bool disabled;

  const GVToggle({
    super.key,
    required this.isPressed,
    this.onPressed,
    required this.child,
    this.disabled = false,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: disabled || onPressed == null
            ? null
            : () => onPressed!(!isPressed),
        borderRadius: BorderRadius.circular(GVRadii.md),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 150),
          padding: const EdgeInsets.symmetric(
            horizontal: GVSpacing.s3,
            vertical: GVSpacing.s2,
          ),
          decoration: BoxDecoration(
            color: isPressed
                ? theme.colorScheme.primaryContainer
                : Colors.transparent,
            borderRadius: BorderRadius.circular(GVRadii.md),
            border: Border.all(
              color: isPressed
                  ? theme.colorScheme.primary
                  : theme.colorScheme.outlineVariant,
              width: 1.0,
            ),
          ),
          child: DefaultTextStyle(
            style: TextStyle(
              fontSize: 13,
              fontWeight: FontWeight.w500,
              color: isPressed
                  ? theme.colorScheme.onPrimaryContainer
                  : theme.colorScheme.onSurface,
            ),
            child: IconTheme(
              data: IconThemeData(
                size: 16,
                color: isPressed
                    ? theme.colorScheme.onPrimaryContainer
                    : theme.colorScheme.onSurface,
              ),
              child: child,
            ),
          ),
        ),
      ),
    );
  }
}
