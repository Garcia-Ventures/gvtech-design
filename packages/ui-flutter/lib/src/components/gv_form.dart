import 'package:flutter/material.dart';

class GVForm extends StatelessWidget {
  final GlobalKey<FormState>? formKey;
  final Widget child;
  final VoidCallback? onSubmit;

  const GVForm({
    super.key,
    this.formKey,
    required this.child,
    this.onSubmit,
  });

  @override
  Widget build(BuildContext context) {
    return Form(
      key: formKey,
      child: child,
    );
  }
}
