import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVTableColumn {
  final String title;
  final double? width;

  const GVTableColumn({
    required this.title,
    this.width,
  });
}

class GVTable extends StatelessWidget {
  final List<GVTableColumn> columns;
  final List<List<Widget>> rows;

  const GVTable({
    super.key,
    required this.columns,
    required this.rows,
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
      child: Table(
        border: TableBorder(
          horizontalInside: BorderSide(
            color: theme.colorScheme.outlineVariant,
            width: 1.0,
          ),
        ),
        children: [
          TableRow(
            decoration: BoxDecoration(
              color: theme.colorScheme.surfaceContainerHighest,
            ),
            children: columns.map((col) {
              return Padding(
                padding: const EdgeInsets.all(GVSpacing.s3),
                child: Text(
                  col.title,
                  style: TextStyle(
                    fontSize: 13,
                    fontWeight: FontWeight.w600,
                    color: theme.colorScheme.onSurface,
                  ),
                ),
              );
            }).toList(),
          ),
          ...rows.map((row) {
            return TableRow(
              children: row.map((cell) {
                return Padding(
                  padding: const EdgeInsets.all(GVSpacing.s3),
                  child: cell,
                );
              }).toList(),
            );
          }),
        ],
      ),
    );
  }
}
