import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVInputGroup extends StatelessWidget {
  final Widget? prefixAddon;
  final Widget? suffixAddon;
  final Widget child;

  const GVInputGroup({
    super.key,
    this.prefixAddon,
    this.suffixAddon,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Container(
      decoration: BoxDecoration(
        color: theme.colorScheme.surface,
        borderRadius: BorderRadius.circular(GVRadii.md),
        border: Border.all(
          color: theme.colorScheme.outlineVariant,
          width: 1.0,
        ),
      ),
      child: Row(
        children: [
          if (prefixAddon != null) ...[
            Container(
              padding: const EdgeInsets.symmetric(
                horizontal: GVSpacing.s3,
                vertical: GVSpacing.s2,
              ),
              decoration: BoxDecoration(
                color: theme.colorScheme.surfaceContainerHighest,
                borderRadius: const BorderRadius.only(
                  topLeft: Radius.circular(GVRadii.md),
                  bottomLeft: Radius.circular(GVRadii.md),
                ),
                border: Border(
                  right: BorderSide(
                    color: theme.colorScheme.outlineVariant,
                  ),
                ),
              ),
              child: prefixAddon!,
            ),
          ],
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: GVSpacing.s2),
              child: child,
            ),
          ),
          if (suffixAddon != null) ...[
            Container(
              padding: const EdgeInsets.symmetric(
                horizontal: GVSpacing.s3,
                vertical: GVSpacing.s2,
              ),
              decoration: BoxDecoration(
                color: theme.colorScheme.surfaceContainerHighest,
                borderRadius: const BorderRadius.only(
                  topRight: Radius.circular(GVRadii.md),
                  bottomRight: Radius.circular(GVRadii.md),
                ),
                border: Border(
                  left: BorderSide(
                    color: theme.colorScheme.outlineVariant,
                  ),
                ),
              ),
              child: suffixAddon!,
            ),
          ],
        ],
      ),
    );
  }
}
