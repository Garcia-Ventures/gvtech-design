import 'dart:js_interop';
import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';
import 'package:web/web.dart' as web;

@JS()
@anonymous
extension type ThemeMessage._(JSObject _) implements JSObject {
  external String? get type;
  external String? get theme;
}

void main() {
  runApp(const GVShowcaseApp());
}

class GVShowcaseApp extends StatefulWidget {
  const GVShowcaseApp({super.key});

  @override
  State<GVShowcaseApp> createState() => _GVShowcaseAppState();
}

class _GVShowcaseAppState extends State<GVShowcaseApp> {
  ThemeMode _themeMode = ThemeMode.light;

  @override
  void initState() {
    super.initState();
    _initThemeFromUri();
    _listenForHostThemeMessages();
  }

  void _initThemeFromUri() {
    try {
      final href = web.window.location.href.toLowerCase();
      if (href.contains('theme=dark')) {
        _themeMode = ThemeMode.dark;
      } else if (href.contains('theme=light')) {
        _themeMode = ThemeMode.light;
      }
    } catch (_) {}
  }

  void _listenForHostThemeMessages() {
    try {
      web.window.addEventListener(
        'message',
        (web.Event event) {
          if (event.isA<web.MessageEvent>()) {
            final msgEvent = event as web.MessageEvent;
            final data = msgEvent.data;
            if (data != null && data.isA<JSObject>()) {
              final msg = data as ThemeMessage;
              if (msg.type == 'gv-set-theme') {
                final themeStr = msg.theme;
                if (themeStr == 'dark' && _themeMode != ThemeMode.dark) {
                  setState(() => _themeMode = ThemeMode.dark);
                } else if (themeStr == 'light' &&
                    _themeMode != ThemeMode.light) {
                  setState(() => _themeMode = ThemeMode.light);
                }
              }
            }
          }
        }.toJS,
      );
    } catch (_) {}
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'GV Tech Design System - Flutter Showcase',
      debugShowCheckedModeBanner: false,
      theme: GVThemeData.light(),
      darkTheme: GVThemeData.dark(),
      themeMode: _themeMode,
      home: const ShowcaseHomePage(),
    );
  }
}

class ShowcaseHomePage extends StatelessWidget {
  const ShowcaseHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    final rawUri = Uri.base.toString().toLowerCase();
    final fragment = Uri.base.fragment.toLowerCase();
    final path = Uri.base.path.toLowerCase();
    final fullTarget = '$rawUri $fragment $path';

    Widget innerContent;
    if (fullTarget.contains('button')) {
      innerContent = const ButtonShowcase();
    } else if (fullTarget.contains('card')) {
      innerContent = const CardShowcase();
    } else if (fullTarget.contains('badge')) {
      innerContent = const BadgeShowcase();
    } else if (fullTarget.contains('input')) {
      innerContent = const InputShowcase();
    } else if (fullTarget.contains('checkbox')) {
      innerContent = const CheckboxShowcase();
    } else if (fullTarget.contains('switch')) {
      innerContent = const SwitchShowcase();
    } else if (fullTarget.contains('avatar')) {
      innerContent = const AvatarShowcase();
    } else if (fullTarget.contains('separator')) {
      innerContent = const SeparatorShowcase();
    } else if (fullTarget.contains('alert')) {
      innerContent = const AlertShowcase();
    } else if (fullTarget.contains('progress')) {
      innerContent = const ProgressShowcase();
    } else if (fullTarget.contains('skeleton')) {
      innerContent = const SkeletonShowcase();
    } else if (fullTarget.contains('spinner')) {
      innerContent = const SpinnerShowcase();
    } else if (fullTarget.contains('radio-group')) {
      innerContent = const RadioGroupShowcase();
    } else if (fullTarget.contains('accordion')) {
      innerContent = const AccordionShowcase();
    } else if (fullTarget.contains('tabs')) {
      innerContent = const TabsShowcase();
    } else if (fullTarget.contains('dialog')) {
      innerContent = const DialogShowcase();
    } else if (fullTarget.contains('sheet')) {
      innerContent = const SheetShowcase();
    } else if (fullTarget.contains('toast') || fullTarget.contains('sonner')) {
      innerContent = const ToastShowcase();
    } else if (fullTarget.contains('tooltip')) {
      innerContent = const TooltipShowcase();
    } else {
      innerContent = const Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ButtonShowcase(),
          SizedBox(height: GVSpacing.s8),
          CardShowcase(),
          SizedBox(height: GVSpacing.s8),
          BadgeShowcase(),
          SizedBox(height: GVSpacing.s8),
          InputShowcase(),
          SizedBox(height: GVSpacing.s8),
          CheckboxShowcase(),
          SizedBox(height: GVSpacing.s8),
          SwitchShowcase(),
          SizedBox(height: GVSpacing.s8),
          AvatarShowcase(),
          SizedBox(height: GVSpacing.s8),
          SeparatorShowcase(),
          SizedBox(height: GVSpacing.s8),
          AlertShowcase(),
          SizedBox(height: GVSpacing.s8),
          ProgressShowcase(),
          SizedBox(height: GVSpacing.s8),
          SkeletonShowcase(),
          SizedBox(height: GVSpacing.s8),
          SpinnerShowcase(),
          SizedBox(height: GVSpacing.s8),
          RadioGroupShowcase(),
          SizedBox(height: GVSpacing.s8),
          AccordionShowcase(),
          SizedBox(height: GVSpacing.s8),
          TabsShowcase(),
          SizedBox(height: GVSpacing.s8),
          DialogShowcase(),
          SizedBox(height: GVSpacing.s8),
          SheetShowcase(),
          SizedBox(height: GVSpacing.s8),
          ToastShowcase(),
          SizedBox(height: GVSpacing.s8),
          TooltipShowcase(),
        ],
      );
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'GVTech Flutter Showcase',
          style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
        ),
      ),
      body: SizedBox.expand(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(GVSpacing.s6),
          child: Container(
            width: double.infinity,
            alignment: Alignment.topLeft,
            child: innerContent,
          ),
        ),
      ),
    );
  }
}

class ButtonShowcase extends StatefulWidget {
  const ButtonShowcase({super.key});

  @override
  State<ButtonShowcase> createState() => _ButtonShowcaseState();
}

class _ButtonShowcaseState extends State<ButtonShowcase> {
  int _counter = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Button Showcase (Taps: $_counter)',
          style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        Wrap(
          spacing: GVSpacing.s3,
          runSpacing: GVSpacing.s3,
          children: [
            GVButton(
              label: 'Primary Button',
              variant: GVButtonVariant.primary,
              onPressed: () => setState(() => _counter++),
            ),
            GVButton(
              label: 'Secondary',
              variant: GVButtonVariant.secondary,
              onPressed: () => setState(() => _counter++),
            ),
            GVButton(
              label: 'Destructive',
              variant: GVButtonVariant.destructive,
              onPressed: () => setState(() => _counter++),
            ),
            GVButton(
              label: 'Outline',
              variant: GVButtonVariant.outline,
              onPressed: () => setState(() => _counter++),
            ),
            GVButton(
              label: 'Ghost',
              variant: GVButtonVariant.ghost,
              onPressed: () => setState(() => _counter++),
            ),
            GVButton(
              label: 'Link',
              variant: GVButtonVariant.link,
              onPressed: () => setState(() => _counter++),
            ),
          ],
        ),
        const SizedBox(height: GVSpacing.s6),
        Wrap(
          spacing: GVSpacing.s3,
          runSpacing: GVSpacing.s3,
          crossAxisAlignment: WrapCrossAlignment.center,
          children: [
            GVButton(
              label: 'Extra Small',
              size: GVButtonSize.xs,
              onPressed: () {},
            ),
            GVButton(
              label: 'Small',
              size: GVButtonSize.sm,
              onPressed: () {},
            ),
            GVButton(
              label: 'Default',
              size: GVButtonSize.defaultSize,
              onPressed: () {},
            ),
            GVButton(
              label: 'Large',
              size: GVButtonSize.lg,
              onPressed: () {},
            ),
            GVButton(
              label: 'Loading...',
              isLoading: true,
              onPressed: () {},
            ),
            GVButton(
              label: 'Disabled',
              disabled: true,
              onPressed: () {},
            ),
          ],
        ),
      ],
    );
  }
}

class CardShowcase extends StatelessWidget {
  const CardShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Card Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVCard(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const GVCardHeader(
                title: GVCardTitle('Flutter Card Component'),
                description: GVCardDescription(
                  'Platform-agnostic component design pattern implemented for Flutter.',
                ),
              ),
              const GVCardContent(
                child: Text(
                  'This card component is driven by GV Tech Design System tokens (colors, border radii, elevation shadows, and spacing grid).',
                ),
              ),
              GVCardFooter(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    GVButton(
                      label: 'Cancel',
                      variant: GVButtonVariant.outline,
                      size: GVButtonSize.sm,
                      onPressed: () {},
                    ),
                    const SizedBox(width: GVSpacing.s2),
                    GVButton(
                      label: 'Action',
                      variant: GVButtonVariant.primary,
                      size: GVButtonSize.sm,
                      onPressed: () {},
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

class BadgeShowcase extends StatelessWidget {
  const BadgeShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Badge Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        Wrap(
          spacing: GVSpacing.s3,
          runSpacing: GVSpacing.s3,
          children: [
            GVBadge(
              label: 'Default Badge',
              variant: GVBadgeVariant.defaultVariant,
            ),
            GVBadge(
              label: 'Secondary',
              variant: GVBadgeVariant.secondary,
            ),
            GVBadge(
              label: 'Destructive',
              variant: GVBadgeVariant.destructive,
            ),
            GVBadge(
              label: 'Outline',
              variant: GVBadgeVariant.outline,
            ),
          ],
        ),
      ],
    );
  }
}

class InputShowcase extends StatefulWidget {
  const InputShowcase({super.key});

  @override
  State<InputShowcase> createState() => _InputShowcaseState();
}

class _InputShowcaseState extends State<InputShowcase> {
  final TextEditingController _controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Input Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVInput(
          label: 'Default Input',
          placeholder: 'Email',
          controller: _controller,
        ),
        const SizedBox(height: GVSpacing.s4),
        const GVInput(
          label: 'Disabled Input',
          placeholder: 'Email',
          disabled: true,
        ),
        const SizedBox(height: GVSpacing.s4),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'With Button',
              style: TextStyle(fontSize: 14, fontWeight: FontWeight.w500),
            ),
            const SizedBox(height: GVSpacing.s1),
            Row(
              children: [
                const Expanded(
                  child: GVInput(
                    placeholder: 'Email',
                  ),
                ),
                const SizedBox(width: GVSpacing.s2),
                GVButton(
                  label: 'Subscribe',
                  onPressed: () {},
                ),
              ],
            ),
          ],
        ),
        const SizedBox(height: GVSpacing.s4),
        const GVInput(
          label: 'Password with Validation Error',
          placeholder: 'Enter password',
          obscureText: true,
          errorText: 'Password must be at least 8 characters.',
        ),
      ],
    );
  }
}

class CheckboxShowcase extends StatefulWidget {
  const CheckboxShowcase({super.key});

  @override
  State<CheckboxShowcase> createState() => _CheckboxShowcaseState();
}

class _CheckboxShowcaseState extends State<CheckboxShowcase> {
  bool _checked1 = true;
  bool _checked2 = false;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Checkbox Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVCheckbox(
          label: 'Accept terms and conditions',
          value: _checked1,
          onChanged: (val) => setState(() => _checked1 = val ?? false),
        ),
        const SizedBox(height: GVSpacing.s3),
        GVCheckbox(
          label: 'Receive promotional emails',
          value: _checked2,
          onChanged: (val) => setState(() => _checked2 = val ?? false),
        ),
        const SizedBox(height: GVSpacing.s3),
        const GVCheckbox(
          label: 'Disabled checkbox',
          value: true,
          disabled: true,
        ),
      ],
    );
  }
}

class SwitchShowcase extends StatefulWidget {
  const SwitchShowcase({super.key});

  @override
  State<SwitchShowcase> createState() => _SwitchShowcaseState();
}

class _SwitchShowcaseState extends State<SwitchShowcase> {
  bool _enabled1 = true;
  bool _enabled2 = false;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Switch Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVSwitch(
          label: 'Push Notifications',
          value: _enabled1,
          onChanged: (val) => setState(() => _enabled1 = val),
        ),
        const SizedBox(height: GVSpacing.s3),
        GVSwitch(
          label: 'Dark Mode Sync',
          value: _enabled2,
          onChanged: (val) => setState(() => _enabled2 = val),
        ),
        const SizedBox(height: GVSpacing.s3),
        const GVSwitch(
          label: 'Disabled Switch',
          value: false,
          disabled: true,
        ),
      ],
    );
  }
}

class AvatarShowcase extends StatelessWidget {
  const AvatarShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Avatar Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        Wrap(
          spacing: GVSpacing.s4,
          runSpacing: GVSpacing.s4,
          crossAxisAlignment: WrapCrossAlignment.center,
          children: [
            GVAvatar(initials: 'EG', size: GVAvatarSize.xs),
            GVAvatar(initials: 'GV', size: GVAvatarSize.sm),
            GVAvatar(initials: 'JD', size: GVAvatarSize.md),
            GVAvatar(initials: 'CN', size: GVAvatarSize.lg),
            GVAvatar(initials: 'AG', size: GVAvatarSize.xl),
          ],
        ),
      ],
    );
  }
}

class SeparatorShowcase extends StatelessWidget {
  const SeparatorShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Separator Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        Text('Section Above'),
        SizedBox(height: GVSpacing.s2),
        GVSeparator(),
        SizedBox(height: GVSpacing.s2),
        Text('Section Below'),
        SizedBox(height: GVSpacing.s4),
        IntrinsicHeight(
          child: Row(
            children: [
              Text('Left'),
              SizedBox(width: GVSpacing.s3),
              GVSeparator(orientation: GVSeparatorOrientation.vertical),
              SizedBox(width: GVSpacing.s3),
              Text('Middle'),
              SizedBox(width: GVSpacing.s3),
              GVSeparator(orientation: GVSeparatorOrientation.vertical),
              SizedBox(width: GVSpacing.s3),
              Text('Right'),
            ],
          ),
        ),
      ],
    );
  }
}

class AlertShowcase extends StatelessWidget {
  const AlertShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Alert Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVAlert(
          title: 'System Information',
          description: 'A new version of the design system is available.',
          variant: GVAlertVariant.info,
          icon: Icon(Icons.info_outline, size: 20),
        ),
        SizedBox(height: GVSpacing.s3),
        GVAlert(
          title: 'Operation Successful',
          description: 'Your changes have been saved to Cloudflare Pages.',
          variant: GVAlertVariant.success,
          icon: Icon(Icons.check_circle_outline, size: 20),
        ),
        SizedBox(height: GVSpacing.s3),
        GVAlert(
          title: 'Action Required',
          description: 'Please complete account verification before proceeding.',
          variant: GVAlertVariant.warning,
          icon: Icon(Icons.warning_amber_outlined, size: 20),
        ),
        SizedBox(height: GVSpacing.s3),
        GVAlert(
          title: 'Error Occurred',
          description: 'Failed to process request. Please try again.',
          variant: GVAlertVariant.destructive,
          icon: Icon(Icons.error_outline, size: 20),
        ),
      ],
    );
  }
}

class ProgressShowcase extends StatelessWidget {
  const ProgressShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Progress Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        Text('Deterministic (75%):'),
        SizedBox(height: GVSpacing.s2),
        GVProgress(value: 0.75),
        SizedBox(height: GVSpacing.s4),
        Text('Indeterminate Loading:'),
        SizedBox(height: GVSpacing.s2),
        GVProgress(),
      ],
    );
  }
}

class SkeletonShowcase extends StatelessWidget {
  const SkeletonShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Skeleton Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        Row(
          children: [
            GVSkeleton(width: 48, height: 48, borderRadius: 24),
            SizedBox(width: GVSpacing.s3),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  GVSkeleton(height: 16),
                  SizedBox(height: GVSpacing.s2),
                  GVSkeleton(width: 160, height: 12),
                ],
              ),
            ),
          ],
        ),
      ],
    );
  }
}

class SpinnerShowcase extends StatelessWidget {
  const SpinnerShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Spinner Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        Row(
          children: [
            GVSpinner(size: GVSpinnerSize.sm),
            SizedBox(width: GVSpacing.s4),
            GVSpinner(size: GVSpinnerSize.md),
            SizedBox(width: GVSpacing.s4),
            GVSpinner(size: GVSpinnerSize.lg),
          ],
        ),
      ],
    );
  }
}

class RadioGroupShowcase extends StatefulWidget {
  const RadioGroupShowcase({super.key});

  @override
  State<RadioGroupShowcase> createState() => _RadioGroupShowcaseState();
}

class _RadioGroupShowcaseState extends State<RadioGroupShowcase> {
  String _selected = 'default';

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Radio Group Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVRadioGroup<String>(
          label: 'Notify me about...',
          value: _selected,
          onChanged: (val) => setState(() => _selected = val!),
          options: const [
            GVRadioOption(
              value: 'all',
              label: 'All new messages',
              description: 'Direct messages and mentions',
            ),
            GVRadioOption(
              value: 'direct',
              label: 'Direct messages only',
              description: 'Only messages sent directly to you',
            ),
            GVRadioOption(
              value: 'nothing',
              label: 'Nothing',
              description: 'Turn off all notifications',
            ),
          ],
        ),
      ],
    );
  }
}

class AccordionShowcase extends StatelessWidget {
  const AccordionShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Accordion Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVAccordion(
          initialExpandedId: 'item-1',
          items: [
            GVAccordionItemData(
              id: 'item-1',
              title: 'Is it accessible?',
              content: Text(
                'Yes. It adheres to the WAI-ARIA design pattern and supports full keyboard navigation.',
              ),
            ),
            GVAccordionItemData(
              id: 'item-2',
              title: 'Is it styled?',
              content: Text(
                'Yes. It comes with default styles that match the GV Tech Design System tokens.',
              ),
            ),
            GVAccordionItemData(
              id: 'item-3',
              title: 'Is it animated?',
              content: Text(
                'Yes. It features smooth vertical expand/collapse animations out of the box.',
              ),
            ),
          ],
        ),
      ],
    );
  }
}

class TabsShowcase extends StatelessWidget {
  const TabsShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Tabs Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVTabs(
          initialValue: 'account',
          tabs: [
            GVTabData(
              value: 'account',
              label: 'Account',
              content: Text(
                'Make changes to your account settings here. Click save when done.',
              ),
            ),
            GVTabData(
              value: 'password',
              label: 'Password',
              content: Text(
                'Change your password here. After saving, you will be logged out.',
              ),
            ),
          ],
        ),
      ],
    );
  }
}

class DialogShowcase extends StatelessWidget {
  const DialogShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Dialog Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVButton(
          label: 'Open Dialog',
          onPressed: () {
            GVDialog.show(
              context: context,
              title: 'Edit Profile',
              description:
                  'Make changes to your profile here. Click save when done.',
              content: const Column(
                children: [
                  GVInput(label: 'Name', placeholder: 'Enrique Garcia'),
                  SizedBox(height: GVSpacing.s3),
                  GVInput(label: 'Username', placeholder: '@engarcia'),
                ],
              ),
              actions: [
                GVButton(
                  label: 'Save Changes',
                  onPressed: () => Navigator.of(context).pop(),
                ),
              ],
            );
          },
        ),
      ],
    );
  }
}

class SheetShowcase extends StatelessWidget {
  const SheetShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Sheet Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVButton(
          label: 'Open Sheet',
          onPressed: () {
            GVSheet.show(
              context: context,
              title: 'Edit Profile',
              description:
                  'Make changes to your profile here. Click save when done.',
              child: Column(
                children: [
                  const GVInput(label: 'Name', placeholder: 'Enrique Garcia'),
                  const SizedBox(height: GVSpacing.s3),
                  const GVInput(label: 'Username', placeholder: '@engarcia'),
                  const SizedBox(height: GVSpacing.s4),
                  GVButton(
                    label: 'Save Changes',
                    onPressed: () => Navigator.of(context).pop(),
                  ),
                ],
              ),
            );
          },
        ),
      ],
    );
  }
}

class ToastShowcase extends StatelessWidget {
  const ToastShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Toast Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        Wrap(
          spacing: GVSpacing.s3,
          runSpacing: GVSpacing.s3,
          children: [
            GVButton(
              label: 'Show Default Toast',
              onPressed: () {
                GVToast.show(
                  context,
                  title: 'Event Scheduled',
                  description: 'Friday, February 10, 2026 at 5:00 PM',
                );
              },
            ),
            GVButton(
              label: 'Show Success Toast',
              variant: GVButtonVariant.secondary,
              onPressed: () {
                GVToast.show(
                  context,
                  title: 'Changes Saved',
                  description: 'Your settings have been updated successfully.',
                  variant: GVToastVariant.success,
                );
              },
            ),
            GVButton(
              label: 'Show Destructive Toast',
              variant: GVButtonVariant.destructive,
              onPressed: () {
                GVToast.show(
                  context,
                  title: 'Error Occurred',
                  description: 'Failed to delete repository.',
                  variant: GVToastVariant.destructive,
                );
              },
            ),
          ],
        ),
      ],
    );
  }
}

class TooltipShowcase extends StatelessWidget {
  const TooltipShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Tooltip Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVTooltip(
          message: 'Add to library',
          child: GVButton(
            label: 'Hover or Long Press Me',
            variant: GVButtonVariant.outline,
          ),
        ),
      ],
    );
  }
}

