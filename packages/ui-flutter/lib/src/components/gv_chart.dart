import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVChartDataPoint {
  final String label;
  final double value;

  const GVChartDataPoint({
    required this.label,
    required this.value,
  });
}

class GVChart extends StatelessWidget {
  final List<GVChartDataPoint> data;
  final double height;

  const GVChart({
    super.key,
    required this.data,
    this.height = 180,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final maxValue = data.fold<double>(
      0.0,
      (max, p) => p.value > max ? p.value : max,
    );

    return Container(
      height: height,
      padding: const EdgeInsets.all(GVSpacing.s4),
      decoration: BoxDecoration(
        color: theme.colorScheme.surface,
        borderRadius: BorderRadius.circular(GVRadii.md),
        border: Border.all(
          color: theme.colorScheme.outlineVariant,
        ),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: data.map((point) {
          final pct = maxValue > 0 ? (point.value / maxValue) : 0.0;

          return Column(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              Expanded(
                child: Align(
                  alignment: Alignment.bottomCenter,
                  child: Container(
                    width: 24,
                    height: (height - 60) * pct,
                    decoration: BoxDecoration(
                      color: theme.colorScheme.primary,
                      borderRadius: const BorderRadius.only(
                        topLeft: Radius.circular(GVRadii.sm),
                        topRight: Radius.circular(GVRadii.sm),
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: GVSpacing.s2),
              Text(
                point.label,
                style: TextStyle(
                  fontSize: 12,
                  color: theme.colorScheme.onSurface.withValues(alpha: 0.6),
                ),
              ),
            ],
          );
        }).toList(),
      ),
    );
  }
}
