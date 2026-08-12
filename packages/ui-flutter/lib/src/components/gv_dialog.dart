import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVDialog extends StatelessWidget {
  final String title;
  final String? description;
  final Widget? content;
  final List<Widget>? actions;

  const GVDialog({
    super.key,
    required this.title,
    this.description,
    this.content,
    this.actions,
  });

  static Future<T?> show<T>({
    required BuildContext context,
    required String title,
    String? description,
    Widget? content,
    List<Widget>? actions,
  }) {
    return showDialog<T>(
      context: context,
      builder: (context) => GVDialog(
        title: title,
        description: description,
        content: content,
        actions: actions,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Dialog(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(GVRadii.lg),
      ),
      backgroundColor: theme.colorScheme.surface,
      child: Padding(
        padding: const EdgeInsets.all(GVSpacing.s6),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w600,
                color: theme.colorScheme.onSurface,
              ),
            ),
            if (description != null) ...[
              const SizedBox(height: GVSpacing.s2),
              Text(
                description!,
                style: TextStyle(
                  fontSize: 14,
                  color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
                ),
              ),
            ],
            if (content != null) ...[
              const SizedBox(height: GVSpacing.s4),
              content!,
            ],
            if (actions != null && actions!.isNotEmpty) ...[
              const SizedBox(height: GVSpacing.s6),
              Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: actions!
                    .map((action) => Padding(
                          padding: const EdgeInsets.only(left: GVSpacing.s2),
                          child: action,
                        ))
                    .toList(),
              ),
            ],
          ],
        ),
      ),
    );
  }
}
