import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

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

  void _toggleTheme() {
    setState(() {
      _themeMode =
          _themeMode == ThemeMode.light ? ThemeMode.dark : ThemeMode.light;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'GV Tech Design System - Flutter Showcase',
      debugShowCheckedModeBanner: false,
      theme: GVThemeData.light(),
      darkTheme: GVThemeData.dark(),
      themeMode: _themeMode,
      home: ShowcaseHomePage(
        themeMode: _themeMode,
        onToggleTheme: _toggleTheme,
      ),
    );
  }
}

class ShowcaseHomePage extends StatelessWidget {
  final ThemeMode themeMode;
  final VoidCallback onToggleTheme;

  const ShowcaseHomePage({
    super.key,
    required this.themeMode,
    required this.onToggleTheme,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
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
    } else {
      innerContent = const Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ButtonShowcase(),
          SizedBox(height: GVSpacing.s8),
          CardShowcase(),
          SizedBox(height: GVSpacing.s8),
          BadgeShowcase(),
        ],
      );
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'GVTech Flutter Showcase',
          style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
        ),
        actions: [
          IconButton(
            icon: Icon(
              isDark ? Icons.light_mode : Icons.dark_mode,
              size: 20,
            ),
            onPressed: onToggleTheme,
            tooltip: 'Toggle Theme',
          ),
        ],
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
