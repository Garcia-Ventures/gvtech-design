import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVAccordionItemData {
  final String id;
  final String title;
  final Widget content;

  const GVAccordionItemData({
    required this.id,
    required this.title,
    required this.content,
  });
}

class GVAccordion extends StatefulWidget {
  final List<GVAccordionItemData> items;
  final String? initialExpandedId;

  const GVAccordion({
    super.key,
    required this.items,
    this.initialExpandedId,
  });

  @override
  State<GVAccordion> createState() => _GVAccordionState();
}

class _GVAccordionState extends State<GVAccordion> {
  String? _expandedId;

  @override
  void initState() {
    super.initState();
    _expandedId = widget.initialExpandedId;
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Column(
      children: widget.items.map((item) {
        final isExpanded = item.id == _expandedId;

        return Container(
          decoration: BoxDecoration(
            border: Border(
              bottom: BorderSide(
                color: theme.colorScheme.outlineVariant,
                width: 1.0,
              ),
            ),
          ),
          child: Column(
            children: [
              InkWell(
                onTap: () {
                  setState(() {
                    _expandedId = isExpanded ? null : item.id;
                  });
                },
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                    vertical: GVSpacing.s4,
                    horizontal: GVSpacing.s2,
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        item.title,
                        style: TextStyle(
                          fontSize: 15,
                          fontWeight: FontWeight.w600,
                          color: theme.colorScheme.onSurface,
                        ),
                      ),
                      AnimatedRotation(
                        turns: isExpanded ? 0.5 : 0.0,
                        duration: const Duration(milliseconds: 200),
                        child: Icon(
                          Icons.keyboard_arrow_down,
                          size: 20,
                          color: theme.colorScheme.onSurface
                              .withValues(alpha: 0.6),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              AnimatedCrossFade(
                firstChild: const SizedBox(width: double.infinity),
                secondChild: Padding(
                  padding: const EdgeInsets.only(
                    left: GVSpacing.s2,
                    right: GVSpacing.s2,
                    bottom: GVSpacing.s4,
                  ),
                  child: item.content,
                ),
                crossFadeState: isExpanded
                    ? CrossFadeState.showSecond
                    : CrossFadeState.showFirst,
                duration: const Duration(milliseconds: 200),
              ),
            ],
          ),
        );
      }).toList(),
    );
  }
}
