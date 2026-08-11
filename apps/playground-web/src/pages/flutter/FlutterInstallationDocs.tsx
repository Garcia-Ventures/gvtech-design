import { CodeBlock } from '@/components/docs/CodeBlock';
import { Alert, AlertDescription, AlertTitle } from '@gv-tech/ui-web';
import { CheckCircle2, Info, Package, Sparkles } from 'lucide-react';

export function FlutterInstallationDocs() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Flutter Installation & Setup</h2>
          <p className="text-muted-foreground text-lg">
            Complete guide for integrating{' '}
            <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-sm">gv_ui_flutter</code> into your Flutter
            application across Web, iOS, Android, and Desktop platforms.
          </p>
        </div>

        <Alert className="border-blue-500/20 bg-blue-500/10 text-blue-500">
          <Info className="h-5 w-5" />
          <AlertTitle className="font-semibold">Cross-Platform Token & Component Engine</AlertTitle>
          <AlertDescription className="text-sm opacity-90">
            <code className="bg-muted/30 font-mono text-xs">gv_ui_flutter</code> provides standard Material/Cupertino
            compatible widgets driven by the exact same design tokens (
            <code className="bg-muted/30 font-mono text-xs">GVColors</code>,{' '}
            <code className="bg-muted/30 font-mono text-xs">GVSpacing</code>,{' '}
            <code className="bg-muted/30 font-mono text-xs">GVRadii</code>) used in our Web and React Native libraries.
          </AlertDescription>
        </Alert>
      </section>

      {/* Prerequisites */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold tracking-tight">1. System Requirements</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-card rounded-lg border p-4">
            <div className="flex items-center gap-2 font-medium">
              <Sparkles className="text-primary h-4 w-4" />
              <span>Flutter SDK</span>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">Flutter 3.10.0 or higher is required.</p>
          </div>
          <div className="bg-card rounded-lg border p-4">
            <div className="flex items-center gap-2 font-medium">
              <Package className="text-primary h-4 w-4" />
              <span>Dart SDK</span>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">Dart SDK &ge;3.0.0 &lt;4.0.0.</p>
          </div>
          <div className="bg-card rounded-lg border p-4">
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="text-primary h-4 w-4" />
              <span>Icons</span>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">lucide_icons package matches Web & Native icons.</p>
          </div>
        </div>
      </section>

      {/* Add Dependency */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold tracking-tight">2. Add Dependency</h3>
        <p className="text-muted-foreground">
          Run <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-sm">flutter pub add</code> in your Flutter
          project terminal:
        </p>
        <CodeBlock code={`flutter pub add gv_ui_flutter lucide_icons`} language="bash" />

        <p className="text-muted-foreground pt-2">
          Or add it manually to your{' '}
          <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-sm">pubspec.yaml</code> file:
        </p>
        <CodeBlock
          code={`dependencies:
  flutter:
    sdk: flutter
  gv_ui_flutter: ^1.0.0
  lucide_icons: ^0.257.0

flutter:
  uses-material-design: true`}
          language="yaml"
        />
      </section>

      {/* Theme Setup */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold tracking-tight">3. Configure App Theme</h3>
        <p className="text-muted-foreground">
          Wrap your <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-sm">MaterialApp</code> with{' '}
          <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-sm">GVThemeData</code> to automatically apply
          GV Tech design tokens, typography, and dark mode support:
        </p>
        <CodeBlock
          code={`import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'GV Tech App',
      debugShowCheckedModeBanner: false,
      theme: GVThemeData.light(),
      darkTheme: GVThemeData.dark(),
      themeMode: ThemeMode.system, // Supports System, Light, and Dark modes
      home: const HomeScreen(),
    );
  }
}`}
          language="dart"
        />
      </section>

      {/* Usage Example */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold tracking-tight">4. Building Screens with GV Components</h3>
        <p className="text-muted-foreground">
          Import{' '}
          <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-sm">
            package:gv_ui_flutter/gv_ui_flutter.dart
          </code>{' '}
          to start using components and tokens:
        </p>
        <CodeBlock
          code={`import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';
import 'package:lucide_icons/lucide_icons.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('GV Tech Design System'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(GVSpacing.md),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const GVBadge(
              label: 'Flutter Platform Ready',
              variant: GVBadgeVariant.success,
              icon: LucideIcons.checkCircle,
            ),
            const SizedBox(height: GVSpacing.md),
            GVCard(
              header: const Text(
                'Cross-Platform UI',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              content: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Built using atomic design tokens for maximum fidelity.'),
                  const SizedBox(height: GVSpacing.md),
                  GVButton(
                    label: 'Get Started',
                    icon: LucideIcons.arrowRight,
                    variant: GVButtonVariant.primary,
                    onPressed: () {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Clicked Flutter GVButton!')),
                      );
                    },
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}`}
          language="dart"
        />
      </section>
    </div>
  );
}
