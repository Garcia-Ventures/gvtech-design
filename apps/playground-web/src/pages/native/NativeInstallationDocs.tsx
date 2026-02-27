import { CodeBlock } from '@/components/docs/CodeBlock';
import { usePackageManager, type PackageManager } from '@/hooks/usePackageManager';
import { Alert, AlertDescription, AlertTitle, Tabs, TabsContent, TabsList, TabsTrigger } from '@gv-tech/ui-web';
import { AlertCircle } from 'lucide-react';

export function NativeInstallationDocs() {
  const { packageManager, setPackageManager } = usePackageManager();

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
          <p className="text-muted-foreground">
            Install the React Native package along with required mobile dependencies.
          </p>
        </div>
        <Tabs value={packageManager} onValueChange={(v) => setPackageManager(v as PackageManager)}>
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="bun">bun</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-4">
            <CodeBlock
              code="npm install @gv-tech/ui-native lucide-react-native nativewind react-native-reanimated react-native-svg"
              language="bash"
            />
          </TabsContent>
          <TabsContent value="bun" className="mt-4">
            <CodeBlock
              code="bun add @gv-tech/ui-native lucide-react-native nativewind react-native-reanimated react-native-svg"
              language="bash"
            />
          </TabsContent>
          <TabsContent value="pnpm" className="mt-4">
            <CodeBlock
              code="pnpm add @gv-tech/ui-native lucide-react-native nativewind react-native-reanimated react-native-svg"
              language="bash"
            />
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Metro Configuration</h2>
        <p className="text-muted-foreground">
          The design system uses <code className="bg-muted rounded px-1">.native.tsx</code> extensions for
          mobile-specific implementations. Ensure your <code className="bg-muted rounded px-1">metro.config.js</code> is
          configured to prefer these.
        </p>
        <CodeBlock
          language="javascript"
          code={`const { getDefaultConfig } = require("expo/metro-config");
const config = getDefaultConfig(__dirname);

config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  "native.tsx",
  "native.ts",
  "native.js",
];

module.exports = config;`}
        />
        <Alert variant="warning">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Resolution Order</AlertTitle>
          <AlertDescription>
            The order of extensions matters. Ensure <code className="bg-muted rounded px-1">native.tsx</code> appears
            before standard <code className="bg-muted rounded px-1">tsx</code> if you are sharing code between web and
            mobile.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">NativeWind Setup</h2>
        <p className="text-muted-foreground">
          Ensure NativeWind is correctly initialized in your{' '}
          <code className="bg-muted rounded px-1">tailwind.config.js</code>:
        </p>
        <CodeBlock
          language="javascript"
          code={`module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@gv-tech/ui-native/dist/**/*.js",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Peer Dependencies</h2>
        <CodeBlock
          code={`{
  "react": ">=18",
  "react-native": ">=0.77.0",
  "lucide-react-native": "^0.475.0",
  "nativewind": "^4.1.23",
  "react-native-svg": "^15.11.1"
}`}
          language="json"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic Usage</h2>
        <CodeBlock
          code={`import { ThemeProvider, Button, Text } from '@gv-tech/ui-native';
import { View } from 'react-native';

export default function App() {
  return (
    <ThemeProvider>
      <View className="flex-1 items-center justify-center bg-background">
        <Button>
          <Text>Native Button</Text>
        </Button>
      </View>
    </ThemeProvider>
  );
}`}
        />
      </section>
    </div>
  );
}
