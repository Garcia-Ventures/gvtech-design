import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVHoverCard extends StatefulWidget {
  final Widget trigger;
  final Widget content;

  const GVHoverCard({
    super.key,
    required this.trigger,
    required this.content,
  });

  @override
  State<GVHoverCard> createState() => _GVHoverCardState();
}

class _GVHoverCardState extends State<GVHoverCard> {
  final LayerLink _layerLink = LayerLink();
  OverlayEntry? _overlayEntry;

  void _showHoverCard() {
    if (_overlayEntry != null) return;
    final theme = Theme.of(context);

    _overlayEntry = OverlayEntry(
      builder: (context) => Positioned(
        width: 280,
        child: CompositedTransformFollower(
          link: _layerLink,
          offset: const Offset(0, 36),
          child: Material(
            color: Colors.transparent,
            child: Container(
              padding: const EdgeInsets.all(GVSpacing.s4),
              decoration: BoxDecoration(
                color: theme.colorScheme.surface,
                borderRadius: BorderRadius.circular(GVRadii.lg),
                border: Border.all(
                  color: theme.colorScheme.outlineVariant,
                  width: 1.0,
                ),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withValues(alpha: 0.1),
                    blurRadius: 10,
                    offset: const Offset(0, 4),
                  ),
                ],
              ),
              child: widget.content,
            ),
          ),
        ),
      ),
    );

    Overlay.of(context).insert(_overlayEntry!);
  }

  void _hideHoverCard() {
    _overlayEntry?.remove();
    _overlayEntry = null;
  }

  @override
  void dispose() {
    _hideHoverCard();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return CompositedTransformTarget(
      link: _layerLink,
      child: MouseRegion(
        onEnter: (_) => _showHoverCard(),
        onExit: (_) => _hideHoverCard(),
        child: widget.trigger,
      ),
    );
  }
}
