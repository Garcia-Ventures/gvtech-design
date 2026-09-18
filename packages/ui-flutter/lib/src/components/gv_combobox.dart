import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVComboboxItem<T> {
  final T value;
  final String label;

  const GVComboboxItem({
    required this.value,
    required this.label,
  });
}

class GVCombobox<T> extends StatefulWidget {
  final T? value;
  final ValueChanged<T?>? onChanged;
  final List<GVComboboxItem<T>> items;
  final String? label;
  final String placeholder;

  const GVCombobox({
    super.key,
    required this.value,
    required this.onChanged,
    required this.items,
    this.label,
    this.placeholder = 'Select framework...',
  });

  @override
  State<GVCombobox<T>> createState() => _GVComboboxState<T>();
}

class _GVComboboxState<T> extends State<GVCombobox<T>> {
  final TextEditingController _searchController = TextEditingController();
  List<GVComboboxItem<T>> _filteredItems = [];

  @override
  void initState() {
    super.initState();
    _filteredItems = widget.items;
  }

  void _filter(String query) {
    setState(() {
      _filteredItems = widget.items
          .where(
              (item) => item.label.toLowerCase().contains(query.toLowerCase()))
          .toList();
    });
  }

  void _openDialog() {
    final theme = Theme.of(context);

    showDialog(
      context: context,
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setDialogState) {
            return Dialog(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(GVRadii.lg),
              ),
              backgroundColor: theme.colorScheme.surface,
              child: Container(
                width: 320,
                constraints: const BoxConstraints(maxHeight: 400),
                padding: const EdgeInsets.all(GVSpacing.s4),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    TextField(
                      controller: _searchController,
                      onChanged: (q) {
                        _filter(q);
                        setDialogState(() {});
                      },
                      decoration: InputDecoration(
                        hintText: 'Search framework...',
                        prefixIcon: const Icon(Icons.search, size: 18),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(GVRadii.md),
                        ),
                        contentPadding: const EdgeInsets.symmetric(
                          horizontal: GVSpacing.s3,
                          vertical: GVSpacing.s2,
                        ),
                      ),
                    ),
                    const SizedBox(height: GVSpacing.s3),
                    Flexible(
                      child: _filteredItems.isEmpty
                          ? const Padding(
                              padding: EdgeInsets.all(GVSpacing.s4),
                              child: Text('No framework found.'),
                            )
                          : ListView.builder(
                              shrinkWrap: true,
                              itemCount: _filteredItems.length,
                              itemBuilder: (context, index) {
                                final item = _filteredItems[index];
                                final isSelected = item.value == widget.value;

                                return ListTile(
                                  title: Text(item.label),
                                  trailing: isSelected
                                      ? Icon(
                                          Icons.check,
                                          size: 18,
                                          color: theme.colorScheme.primary,
                                        )
                                      : null,
                                  onTap: () {
                                    widget.onChanged?.call(item.value);
                                    Navigator.of(context).pop();
                                  },
                                );
                              },
                            ),
                    ),
                  ],
                ),
              ),
            );
          },
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final selectedItem = widget.items
        .where((i) => i.value == widget.value)
        .firstOrNull;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        if (widget.label != null) ...[
          Text(
            widget.label!,
            style: TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w500,
              color: theme.colorScheme.onSurface,
            ),
          ),
          const SizedBox(height: GVSpacing.s1),
        ],
        InkWell(
          onTap: _openDialog,
          borderRadius: BorderRadius.circular(GVRadii.md),
          child: Container(
            padding: const EdgeInsets.symmetric(
              horizontal: GVSpacing.s3,
              vertical: GVSpacing.s3,
            ),
            decoration: BoxDecoration(
              color: theme.colorScheme.surface,
              borderRadius: BorderRadius.circular(GVRadii.md),
              border: Border.all(
                color: theme.colorScheme.outlineVariant,
              ),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  selectedItem != null
                      ? selectedItem.label
                      : widget.placeholder,
                  style: TextStyle(
                    fontSize: 14,
                    color: selectedItem != null
                        ? theme.colorScheme.onSurface
                        : theme.colorScheme.onSurface.withValues(alpha: 0.4),
                  ),
                ),
                Icon(
                  Icons.unfold_more,
                  size: 18,
                  color: theme.colorScheme.onSurface.withValues(alpha: 0.6),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
