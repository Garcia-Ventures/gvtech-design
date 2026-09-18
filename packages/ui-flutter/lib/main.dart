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
    } else if (fullTarget.contains('text')) {
      innerContent = const TextShowcase();
    } else if (fullTarget.contains('textarea')) {
      innerContent = const TextareaShowcase();
    } else if (fullTarget.contains('slider')) {
      innerContent = const SliderShowcase();
    } else if (fullTarget.contains('toggle')) {
      innerContent = const ToggleShowcase();
    } else if (fullTarget.contains('kbd')) {
      innerContent = const KbdShowcase();
    } else if (fullTarget.contains('breadcrumb')) {
      innerContent = const BreadcrumbShowcase();
    } else if (fullTarget.contains('select')) {
      innerContent = const SelectShowcase();
    } else if (fullTarget.contains('empty')) {
      innerContent = const EmptyShowcase();
    } else if (fullTarget.contains('calendar')) {
      innerContent = const CalendarShowcase();
    } else if (fullTarget.contains('toggle-group')) {
      innerContent = const ToggleGroupShowcase();
    } else if (fullTarget.contains('input-otp')) {
      innerContent = const InputOTPShowcase();
    } else if (fullTarget.contains('input-group')) {
      innerContent = const InputGroupShowcase();
    } else if (fullTarget.contains('field')) {
      innerContent = const FieldShowcase();
    } else if (fullTarget.contains('combobox')) {
      innerContent = const ComboboxShowcase();
    } else if (fullTarget.contains('pagination')) {
      innerContent = const PaginationShowcase();
    } else if (fullTarget.contains('popover')) {
      innerContent = const PopoverShowcase();
    } else if (fullTarget.contains('dropdown-menu')) {
      innerContent = const DropdownMenuShowcase();
    } else if (fullTarget.contains('context-menu')) {
      innerContent = const ContextMenuShowcase();
    } else if (fullTarget.contains('menubar')) {
      innerContent = const MenubarShowcase();
    } else if (fullTarget.contains('alert-dialog')) {
      innerContent = const AlertDialogShowcase();
    } else if (fullTarget.contains('item')) {
      innerContent = const ItemShowcase();
    } else if (fullTarget.contains('collapsible')) {
      innerContent = const CollapsibleShowcase();
    } else if (fullTarget.contains('hover-card')) {
      innerContent = const HoverCardShowcase();
    } else if (fullTarget.contains('drawer')) {
      innerContent = const DrawerShowcase();
    } else if (fullTarget.contains('table')) {
      innerContent = const TableShowcase();
    } else if (fullTarget.contains('sidebar')) {
      innerContent = const SidebarShowcase();
    } else if (fullTarget.contains('command')) {
      innerContent = const CommandShowcase();
    } else if (fullTarget.contains('carousel')) {
      innerContent = const CarouselShowcase();
    } else if (fullTarget.contains('aspect-ratio')) {
      innerContent = const AspectRatioShowcase();
    } else if (fullTarget.contains('button-group')) {
      innerContent = const ButtonGroupShowcase();
    } else if (fullTarget.contains('chart')) {
      innerContent = const ChartShowcase();
    } else if (fullTarget.contains('scroll-area')) {
      innerContent = const ScrollAreaShowcase();
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
          SizedBox(height: GVSpacing.s8),
          TextShowcase(),
          SizedBox(height: GVSpacing.s8),
          TextareaShowcase(),
          SizedBox(height: GVSpacing.s8),
          SliderShowcase(),
          SizedBox(height: GVSpacing.s8),
          ToggleShowcase(),
          SizedBox(height: GVSpacing.s8),
          KbdShowcase(),
          SizedBox(height: GVSpacing.s8),
          BreadcrumbShowcase(),
          SizedBox(height: GVSpacing.s8),
          SelectShowcase(),
          SizedBox(height: GVSpacing.s8),
          EmptyShowcase(),
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

class TextShowcase extends StatelessWidget {
  const TextShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Text Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVText('Heading 1', variant: GVTextVariant.h1),
        SizedBox(height: GVSpacing.s2),
        GVText('Heading 2', variant: GVTextVariant.h2),
        SizedBox(height: GVSpacing.s2),
        GVText('Heading 3', variant: GVTextVariant.h3),
        SizedBox(height: GVSpacing.s2),
        GVText('Heading 4', variant: GVTextVariant.h4),
        SizedBox(height: GVSpacing.s3),
        GVText('This is body paragraph text styled with design tokens.'),
        SizedBox(height: GVSpacing.s3),
        GVText(
          'A simple blockquote text element for quotation notes.',
          variant: GVTextVariant.blockquote,
        ),
        SizedBox(height: GVSpacing.s3),
        GVText('Muted footnote text', variant: GVTextVariant.muted),
      ],
    );
  }
}

class TextareaShowcase extends StatefulWidget {
  const TextareaShowcase({super.key});

  @override
  State<TextareaShowcase> createState() => _TextareaShowcaseState();
}

class _TextareaShowcaseState extends State<TextareaShowcase> {
  final TextEditingController _controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Textarea Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVTextarea(
          label: 'Bio / Notes',
          placeholder: 'Tell us a little bit about yourself...',
          controller: _controller,
          helperText: 'You can @mention other users and organizations.',
        ),
      ],
    );
  }
}

class SliderShowcase extends StatefulWidget {
  const SliderShowcase({super.key});

  @override
  State<SliderShowcase> createState() => _SliderShowcaseState();
}

class _SliderShowcaseState extends State<SliderShowcase> {
  double _value = 50.0;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Slider Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVSlider(
          label: 'Volume Control',
          value: _value,
          min: 0,
          max: 100,
          onChanged: (val) => setState(() => _value = val),
        ),
      ],
    );
  }
}

class ToggleShowcase extends StatefulWidget {
  const ToggleShowcase({super.key});

  @override
  State<ToggleShowcase> createState() => _ToggleShowcaseState();
}

class _ToggleShowcaseState extends State<ToggleShowcase> {
  bool _pressed = false;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Toggle Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVToggle(
          isPressed: _pressed,
          onPressed: (val) => setState(() => _pressed = val),
          child: const Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.format_bold, size: 16),
              SizedBox(width: 4),
              Text('Bold'),
            ],
          ),
        ),
      ],
    );
  }
}

class KbdShowcase extends StatelessWidget {
  const KbdShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Kbd Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        Row(
          children: [
            GVKbd('⌘'),
            SizedBox(width: GVSpacing.s1),
            GVKbd('K'),
            SizedBox(width: GVSpacing.s4),
            GVKbd('Ctrl'),
            SizedBox(width: GVSpacing.s1),
            GVKbd('Shift'),
            SizedBox(width: GVSpacing.s1),
            GVKbd('P'),
          ],
        ),
      ],
    );
  }
}

class BreadcrumbShowcase extends StatelessWidget {
  const BreadcrumbShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Breadcrumb Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVBreadcrumb(
          items: [
            GVBreadcrumbItem(label: 'Home'),
            GVBreadcrumbItem(label: 'Components'),
            GVBreadcrumbItem(label: 'Breadcrumb'),
          ],
        ),
      ],
    );
  }
}

class SelectShowcase extends StatefulWidget {
  const SelectShowcase({super.key});

  @override
  State<SelectShowcase> createState() => _SelectShowcaseState();
}

class _SelectShowcaseState extends State<SelectShowcase> {
  String? _selected = 'apple';

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Select Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVSelect<String>(
          label: 'Favorite Fruit',
          value: _selected,
          onChanged: (val) => setState(() => _selected = val),
          items: const [
            GVSelectItem(value: 'apple', label: 'Apple'),
            GVSelectItem(value: 'banana', label: 'Banana'),
            GVSelectItem(value: 'orange', label: 'Orange'),
          ],
        ),
      ],
    );
  }
}

class EmptyShowcase extends StatelessWidget {
  const EmptyShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Empty State Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVEmpty(
          title: 'No projects found',
          description: 'You haven\'t created any projects yet. Get started by creating your first project.',
          icon: const Icon(Icons.folder_open),
          action: GVButton(
            label: 'Create Project',
            onPressed: () {},
          ),
        ),
      ],
    );
  }
}

class CalendarShowcase extends StatefulWidget {
  const CalendarShowcase({super.key});

  @override
  State<CalendarShowcase> createState() => _CalendarShowcaseState();
}

class _CalendarShowcaseState extends State<CalendarShowcase> {
  DateTime _date = DateTime.now();

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Calendar Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVCalendar(
          selectedDate: _date,
          onDateSelected: (d) => setState(() => _date = d),
        ),
      ],
    );
  }
}

class ToggleGroupShowcase extends StatefulWidget {
  const ToggleGroupShowcase({super.key});

  @override
  State<ToggleGroupShowcase> createState() => _ToggleGroupShowcaseState();
}

class _ToggleGroupShowcaseState extends State<ToggleGroupShowcase> {
  String? _value = 'center';

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Toggle Group Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVToggleGroup<String>(
          value: _value,
          onChanged: (val) => setState(() => _value = val),
          items: const [
            GVToggleGroupItem(value: 'left', child: Icon(Icons.format_align_left)),
            GVToggleGroupItem(value: 'center', child: Icon(Icons.format_align_center)),
            GVToggleGroupItem(value: 'right', child: Icon(Icons.format_align_right)),
          ],
        ),
      ],
    );
  }
}

class InputOTPShowcase extends StatelessWidget {
  const InputOTPShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Input OTP Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVInputOTP(length: 6),
      ],
    );
  }
}

class InputGroupShowcase extends StatelessWidget {
  const InputGroupShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Input Group Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVInputGroup(
          prefixAddon: Text('https://', style: TextStyle(fontSize: 13, color: Colors.grey)),
          child: TextField(
            decoration: InputDecoration(
              hintText: 'example.com',
              border: InputBorder.none,
            ),
          ),
        ),
      ],
    );
  }
}

class FieldShowcase extends StatelessWidget {
  const FieldShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Field Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVField(
          label: 'Username',
          description: 'This is your public display name.',
          child: GVInput(placeholder: 'johndoe'),
        ),
      ],
    );
  }
}

class ComboboxShowcase extends StatefulWidget {
  const ComboboxShowcase({super.key});

  @override
  State<ComboboxShowcase> createState() => _ComboboxShowcaseState();
}

class _ComboboxShowcaseState extends State<ComboboxShowcase> {
  String? _selected = 'next';

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Combobox Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVCombobox<String>(
          label: 'Framework',
          value: _selected,
          onChanged: (val) => setState(() => _selected = val),
          items: const [
            GVComboboxItem(value: 'next', label: 'Next.js'),
            GVComboboxItem(value: 'react', label: 'React'),
            GVComboboxItem(value: 'flutter', label: 'Flutter'),
            GVComboboxItem(value: 'vue', label: 'Vue.js'),
          ],
        ),
      ],
    );
  }
}

class PaginationShowcase extends StatefulWidget {
  const PaginationShowcase({super.key});

  @override
  State<PaginationShowcase> createState() => _PaginationShowcaseState();
}

class _PaginationShowcaseState extends State<PaginationShowcase> {
  int _page = 1;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Pagination Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVPagination(
          currentPage: _page,
          totalPages: 5,
          onPageChanged: (p) => setState(() => _page = p),
        ),
      ],
    );
  }
}

class PopoverShowcase extends StatelessWidget {
  const PopoverShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Popover Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVPopover(
          trigger: GVButton(
            label: 'Open Popover',
            variant: GVButtonVariant.outline,
          ),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Dimensions', style: TextStyle(fontWeight: FontWeight.bold)),
              SizedBox(height: 8),
              Text('Set the dimensions for the layer.'),
            ],
          ),
        ),
      ],
    );
  }
}

class DropdownMenuShowcase extends StatelessWidget {
  const DropdownMenuShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Dropdown Menu Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVDropdownMenu(
          trigger: GVButton(
            label: 'Open Menu',
            variant: GVButtonVariant.outline,
          ),
          items: [
            GVDropdownMenuItem(label: 'Profile', icon: Icons.person),
            GVDropdownMenuItem(label: 'Billing', icon: Icons.credit_card),
            GVDropdownMenuItem(label: 'Settings', icon: Icons.settings),
            GVDropdownMenuItem(label: 'Logout', icon: Icons.logout, isDestructive: true),
          ],
        ),
      ],
    );
  }
}

class ContextMenuShowcase extends StatelessWidget {
  const ContextMenuShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Context Menu Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVContextMenu(
          items: [
            GVDropdownMenuItem(label: 'Back', icon: Icons.arrow_back),
            GVDropdownMenuItem(label: 'Reload', icon: Icons.refresh),
            GVDropdownMenuItem(label: 'Inspect', icon: Icons.code),
          ],
          child: GVCard(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Right-click or Long-press Me', style: TextStyle(fontWeight: FontWeight.bold)),
                SizedBox(height: 4),
                Text('Context menu will trigger on action.'),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

class MenubarShowcase extends StatelessWidget {
  const MenubarShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Menubar Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVMenubar(
          menus: [
            GVMenubarMenu(
              title: 'File',
              items: [
                GVDropdownMenuItem(label: 'New Tab'),
                GVDropdownMenuItem(label: 'New Window'),
              ],
            ),
            GVMenubarMenu(
              title: 'Edit',
              items: [
                GVDropdownMenuItem(label: 'Undo'),
                GVDropdownMenuItem(label: 'Redo'),
              ],
            ),
            GVMenubarMenu(
              title: 'View',
              items: [
                GVDropdownMenuItem(label: 'Reload'),
                GVDropdownMenuItem(label: 'Toggle Full Screen'),
              ],
            ),
          ],
        ),
      ],
    );
  }
}

class AlertDialogShowcase extends StatelessWidget {
  const AlertDialogShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Alert Dialog Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVButton(
          label: 'Show Alert Dialog',
          variant: GVButtonVariant.destructive,
          onPressed: () {
            GVAlertDialog.show(
              context,
              title: 'Are you absolutely sure?',
              description: 'This action cannot be undone. This will permanently delete your account.',
              actionLabel: 'Delete Account',
              isDestructive: true,
            );
          },
        ),
      ],
    );
  }
}

class ItemShowcase extends StatelessWidget {
  const ItemShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Item Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVItem(
          title: 'Two-Factor Authentication',
          subtitle: 'Secure your account with 2FA.',
          leading: Icon(Icons.shield),
          trailing: Icon(Icons.chevron_right, size: 18),
        ),
      ],
    );
  }
}

class CollapsibleShowcase extends StatelessWidget {
  const CollapsibleShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Collapsible Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVCollapsible(
          title: Text('@peduarte starred 3 repositories', style: TextStyle(fontWeight: FontWeight.w600)),
          child: Text('@radix-ui/primitives, @radix-ui/colors, @stitches/react'),
        ),
      ],
    );
  }
}

class HoverCardShowcase extends StatelessWidget {
  const HoverCardShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Hover Card Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVHoverCard(
          trigger: Text('@nextjs', style: TextStyle(fontWeight: FontWeight.bold, decoration: TextDecoration.underline)),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Next.js', style: TextStyle(fontWeight: FontWeight.bold)),
              SizedBox(height: 4),
              Text('The React Framework for the Web - created and maintained by @vercel.'),
            ],
          ),
        ),
      ],
    );
  }
}

class DrawerShowcase extends StatelessWidget {
  const DrawerShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Drawer Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVButton(
          label: 'Open Drawer',
          variant: GVButtonVariant.outline,
          onPressed: () {
            GVDrawer.show(
              context,
              title: 'Move Goal',
              description: 'Set your daily activity goal.',
              child: const Text('Daily goal details content.'),
            );
          },
        ),
      ],
    );
  }
}

class TableShowcase extends StatelessWidget {
  const TableShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Table Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVTable(
          columns: [
            GVTableColumn(title: 'Invoice'),
            GVTableColumn(title: 'Status'),
            GVTableColumn(title: 'Amount'),
          ],
          rows: [
            [Text('INV-001'), Text('Paid'), Text('\$250.00')],
            [Text('INV-002'), Text('Pending'), Text('\$150.00')],
          ],
        ),
      ],
    );
  }
}

class SidebarShowcase extends StatelessWidget {
  const SidebarShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Sidebar Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVSidebar(
          title: 'Acme Inc',
          items: [
            GVSidebarItem(label: 'Home', icon: Icons.home, isSelected: true),
            GVSidebarItem(label: 'Inbox', icon: Icons.inbox),
            GVSidebarItem(label: 'Settings', icon: Icons.settings),
          ],
        ),
      ],
    );
  }
}

class CommandShowcase extends StatelessWidget {
  const CommandShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Command Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: GVSpacing.s4),
        GVButton(
          label: 'Open Command Palette',
          variant: GVButtonVariant.outline,
          onPressed: () {
            GVCommand.show(context, const [
              GVCommandItem(label: 'Calendar', icon: Icons.calendar_today),
              GVCommandItem(label: 'Search Emoji', icon: Icons.emoji_emotions),
              GVCommandItem(label: 'Settings', icon: Icons.settings),
            ]);
          },
        ),
      ],
    );
  }
}

class CarouselShowcase extends StatelessWidget {
  const CarouselShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Carousel Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVCarousel(
          height: 120,
          items: [
            GVCard(child: Center(child: Text('Slide 1'))),
            GVCard(child: Center(child: Text('Slide 2'))),
            GVCard(child: Center(child: Text('Slide 3'))),
          ],
        ),
      ],
    );
  }
}

class AspectRatioShowcase extends StatelessWidget {
  const AspectRatioShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Aspect Ratio Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVAspectRatio(
          aspectRatio: 16 / 9,
          child: GVCard(child: Center(child: Text('16 : 9 Container'))),
        ),
      ],
    );
  }
}

class ButtonGroupShowcase extends StatelessWidget {
  const ButtonGroupShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Button Group Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVButtonGroup(
          children: [
            GVButton(label: 'Years'),
            SizedBox(width: 4),
            GVButton(label: 'Months', variant: GVButtonVariant.outline),
            SizedBox(width: 4),
            GVButton(label: 'Days', variant: GVButtonVariant.outline),
          ],
        ),
      ],
    );
  }
}

class ChartShowcase extends StatelessWidget {
  const ChartShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Chart Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVChart(
          data: [
            GVChartDataPoint(label: 'Jan', value: 186),
            GVChartDataPoint(label: 'Feb', value: 305),
            GVChartDataPoint(label: 'Mar', value: 237),
            GVChartDataPoint(label: 'Apr', value: 173),
            GVChartDataPoint(label: 'May', value: 209),
          ],
        ),
      ],
    );
  }
}

class ScrollAreaShowcase extends StatelessWidget {
  const ScrollAreaShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Scroll Area Showcase',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: GVSpacing.s4),
        GVScrollArea(
          height: 120,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Item 1'),
              Text('Item 2'),
              Text('Item 3'),
              Text('Item 4'),
              Text('Item 5'),
              Text('Item 6'),
              Text('Item 7'),
              Text('Item 8'),
            ],
          ),
        ),
      ],
    );
  }
}




