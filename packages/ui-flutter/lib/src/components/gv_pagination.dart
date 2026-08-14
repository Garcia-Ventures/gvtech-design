import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVPagination extends StatelessWidget {
  final int currentPage;
  final int totalPages;
  final ValueChanged<int>? onPageChanged;

  const GVPagination({
    super.key,
    required this.currentPage,
    required this.totalPages,
    this.onPageChanged,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        IconButton(
          icon: const Icon(Icons.chevron_left, size: 20),
          onPressed: currentPage > 1
              ? () => onPageChanged?.call(currentPage - 1)
              : null,
        ),
        const SizedBox(width: GVSpacing.s2),
        ...List.generate(totalPages, (index) {
          final page = index + 1;
          final isSelected = page == currentPage;

          return InkWell(
            onTap: () => onPageChanged?.call(page),
            borderRadius: BorderRadius.circular(GVRadii.md),
            child: Container(
              width: 32,
              height: 32,
              margin: const EdgeInsets.symmetric(horizontal: 2),
              alignment: Alignment.center,
              decoration: BoxDecoration(
                color: isSelected
                    ? theme.colorScheme.primary
                    : Colors.transparent,
                borderRadius: BorderRadius.circular(GVRadii.md),
                border: Border.all(
                  color: isSelected
                      ? theme.colorScheme.primary
                      : theme.colorScheme.outlineVariant,
                  width: 1.0,
                ),
              ),
              child: Text(
                '$page',
                style: TextStyle(
                  fontSize: 13,
                  fontWeight: isSelected ? FontWeight.w600 : FontWeight.w400,
                  color: isSelected
                      ? theme.colorScheme.onPrimary
                      : theme.colorScheme.onSurface,
                ),
              ),
            ),
          );
        }),
        const SizedBox(width: GVSpacing.s2),
        IconButton(
          icon: const Icon(Icons.chevron_right, size: 20),
          onPressed: currentPage < totalPages
              ? () => onPageChanged?.call(currentPage + 1)
              : null,
        ),
      ],
    );
  }
}
