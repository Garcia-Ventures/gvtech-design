import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVTabData {
  final String value;
  final String label;
  final Widget? icon;
  final Widget content;

  const GVTabData({
    required this.value,
    required this.label,
    this.icon,
    required this.content,
  });
}

class GVTabs extends StatefulWidget {
  final List<GVTabData> tabs;
  final String? initialValue;

  const GVTabs({
    super.key,
    required this.tabs,
    this.initialValue,
  });

  @override
  State<GVTabs> createState() => _GVTabsState();
}

class _GVTabsState extends State<GVTabs> {
  late String _activeValue;

  @override
  void initState() {
    super.initState();
    _activeValue = widget.initialValue ?? widget.tabs.first.value;
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          padding: const EdgeInsets.all(GVSpacing.s1),
          decoration: BoxDecoration(
            color: theme.colorScheme.surfaceContainerHighest,
            borderRadius: BorderRadius.circular(GVRadii.lg),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: widget.tabs.map((tab) {
              final isActive = tab.value == _activeValue;

              return Expanded(
                child: GestureDetector(
                  onTap: () => setState(() => _activeValue = tab.value),
                  child: Container(
                    padding: const EdgeInsets.symmetric(
                      vertical: GVSpacing.s2,
                      horizontal: GVSpacing.s3,
                    ),
                    decoration: BoxDecoration(
                      color: isActive
                          ? theme.colorScheme.surface
                          : Colors.transparent,
                      borderRadius: BorderRadius.circular(GVRadii.md),
                      boxShadow: isActive
                          ? [
                              BoxShadow(
                                color: Colors.black.withValues(alpha: 0.05),
                                blurRadius: 4,
                                offset: const Offset(0, 2),
                              )
                            ]
                          : [],
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        if (tab.icon != null) ...[
                          tab.icon!,
                          const SizedBox(width: GVSpacing.s2),
                        ],
                        Text(
                          tab.label,
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontSize: 13,
                            fontWeight: isActive
                                ? FontWeight.w600
                                : FontWeight.w500,
                            color: isActive
                                ? theme.colorScheme.onSurface
                                : theme.colorScheme.onSurface
                                    .withValues(alpha: 0.6),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              );
            }).toList(),
          ),
        ),
        const SizedBox(height: GVSpacing.s4),
        widget.tabs.firstWhere((t) => t.value == _activeValue).content,
      ],
    );
  }
}
