import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVCollapsible extends StatefulWidget {
  final Widget title;
  final Widget child;
  final bool initiallyExpanded;

  const GVCollapsible({
    super.key,
    required this.title,
    required this.child,
    this.initiallyExpanded = false,
  });

  @override
  State<GVCollapsible> createState() => _GVCollapsibleState();
}

class _GVCollapsibleState extends State<GVCollapsible> {
  late bool _isExpanded;

  @override
  void initState() {
    super.initState();
    _isExpanded = widget.initiallyExpanded;
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        InkWell(
          onTap: () => setState(() => _isExpanded = !_isExpanded),
          borderRadius: BorderRadius.circular(GVRadii.md),
          child: Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: GVSpacing.s2,
              vertical: GVSpacing.s2,
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                widget.title,
                Icon(
                  _isExpanded
                      ? Icons.keyboard_arrow_up
                      : Icons.keyboard_arrow_down,
                  size: 18,
                  color: theme.colorScheme.onSurface.withValues(alpha: 0.6),
                ),
              ],
            ),
          ),
        ),
        if (_isExpanded) ...[
          const SizedBox(height: GVSpacing.s2),
          widget.child,
        ],
      ],
    );
  }
}
