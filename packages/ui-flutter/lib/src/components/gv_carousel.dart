import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVCarousel extends StatefulWidget {
  final List<Widget> items;
  final double height;

  const GVCarousel({
    super.key,
    required this.items,
    this.height = 200,
  });

  @override
  State<GVCarousel> createState() => _GVCarouselState();
}

class _GVCarouselState extends State<GVCarousel> {
  final PageController _pageController = PageController();
  int _currentPage = 0;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        SizedBox(
          height: widget.height,
          child: PageView.builder(
            controller: _pageController,
            itemCount: widget.items.length,
            onPageChanged: (page) => setState(() => _currentPage = page),
            itemBuilder: (context, index) {
              return Padding(
                padding: const EdgeInsets.symmetric(horizontal: GVSpacing.s2),
                child: widget.items[index],
              );
            },
          ),
        ),
        const SizedBox(height: GVSpacing.s3),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: List.generate(widget.items.length, (index) {
            final isSelected = index == _currentPage;

            return AnimatedContainer(
              duration: const Duration(milliseconds: 200),
              width: isSelected ? 16 : 8,
              height: 8,
              margin: const EdgeInsets.symmetric(horizontal: 3),
              decoration: BoxDecoration(
                color: isSelected
                    ? theme.colorScheme.primary
                    : theme.colorScheme.outlineVariant,
                borderRadius: BorderRadius.circular(GVRadii.full),
              ),
            );
          }),
        ),
      ],
    );
  }
}
