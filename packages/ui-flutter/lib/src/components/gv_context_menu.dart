import 'package:flutter/material.dart';
import 'gv_dropdown_menu.dart';

class GVContextMenu extends StatelessWidget {
  final Widget child;
  final List<GVDropdownMenuItem> items;

  const GVContextMenu({
    super.key,
    required this.child,
    required this.items,
  });

  @override
  Widget build(BuildContext context) {
    return GVDropdownMenu(
      trigger: child,
      items: items,
    );
  }
}
