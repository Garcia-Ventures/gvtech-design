import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativeNavigationMenuDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="NavigationMenu"
        description="The native implementation of NavigationMenu is currently a shim and returns 'Not implemented'."
        code={`import { NavigationMenu } from '@gv-tech/ui-native';

export default function App() {
  return <NavigationMenu />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
