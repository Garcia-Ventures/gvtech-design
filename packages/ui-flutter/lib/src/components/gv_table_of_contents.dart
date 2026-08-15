import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVTableOfContentsItem {
  final String title;
  final VoidCallback? onTap;

  const GVTableOfContentsItem({
    required this.title,
    this.onTap,
  });
}

class GVTableOfContents extends StatelessWidget {
  final List<GVTableOfContentsItem> items;

  const GVTableOfContents({
    super.key,
    required this.items,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          'On This Page',
          style: TextStyle(
            fontSize: 13,
            fontWeight: FontWeight.bold,
            color: theme.colorScheme.onSurface,
          ),
        ),
        const SizedBox(height: GVSpacing.s2),
        ...items.map((item) {
          return InkWell(
            onTap: item.onTap,
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: 3),
              child: Text(
                item.title,
                style: TextStyle(
                  fontSize: 13,
                  color: theme.colorScheme.onSurface.withValues(alpha: 0.6),
                ),
              ),
            ),
          );
        }),
      ],
    );
  }
}
