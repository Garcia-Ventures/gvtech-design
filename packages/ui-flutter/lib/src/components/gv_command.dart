import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVCommandItem {
  final String label;
  final IconData icon;
  final VoidCallback? onSelect;

  const GVCommandItem({
    required this.label,
    required this.icon,
    this.onSelect,
  });
}

class GVCommand extends StatelessWidget {
  final String placeholder;
  final List<GVCommandItem> items;

  const GVCommand({
    super.key,
    this.placeholder = 'Type a command or search...',
    required this.items,
  });

  static Future<void> show(BuildContext context, List<GVCommandItem> items) {
    return showDialog<void>(
      context: context,
      builder: (context) => Dialog(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(GVRadii.lg),
        ),
        child: SizedBox(
          width: 400,
          child: GVCommand(items: items),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Container(
      padding: const EdgeInsets.all(GVSpacing.s4),
      decoration: BoxDecoration(
        color: theme.colorScheme.surface,
        borderRadius: BorderRadius.circular(GVRadii.lg),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          TextField(
            decoration: InputDecoration(
              hintText: placeholder,
              prefixIcon: const Icon(Icons.search, size: 18),
              border: InputBorder.none,
            ),
          ),
          const Divider(),
          Flexible(
            child: ListView.builder(
              shrinkWrap: true,
              itemCount: items.length,
              itemBuilder: (context, index) {
                final item = items[index];
                return ListTile(
                  leading: Icon(item.icon, size: 18),
                  title: Text(item.label, style: const TextStyle(fontSize: 14)),
                  onTap: () {
                    Navigator.of(context).pop();
                    item.onSelect?.call();
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
