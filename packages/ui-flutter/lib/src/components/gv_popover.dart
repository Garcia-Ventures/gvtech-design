import 'package:flutter/material.dart';
import '../tokens/gv_tokens.g.dart';

class GVPopover extends StatefulWidget {
  final Widget trigger;
  final Widget content;

  const GVPopover({
    super.key,
    required this.trigger,
    required this.content,
  });

  @override
  State<GVPopover> createState() => _GVPopoverState();
}

class _GVPopoverState extends State<GVPopover> {
  final LayerLink _layerLink = LayerLink();
  OverlayEntry? _overlayEntry;

  void _togglePopover() {
    if (_overlayEntry != null) {
      _closePopover();
    } else {
      _openPopover();
    }
  }

  void _openPopover() {
    final theme = Theme.of(context);

    _overlayEntry = OverlayEntry(
      builder: (context) => Stack(
        children: [
          ModalBarrier(
            onDismiss: _closePopover,
          ),
          CompositedTransformFollower(
            link: _layerLink,
            offset: const Offset(0, 44),
            child: Material(
              color: Colors.transparent,
              child: Container(
                width: 280,
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
        ],
      ),
    );

    Overlay.of(context).insert(_overlayEntry!);
  }

  void _closePopover() {
    _overlayEntry?.remove();
    _overlayEntry = null;
  }

  @override
  void dispose() {
    _closePopover();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return CompositedTransformTarget(
      link: _layerLink,
      child: GestureDetector(
        onTap: _togglePopover,
        child: widget.trigger,
      ),
    );
  }
}
