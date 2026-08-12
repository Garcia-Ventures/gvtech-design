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
