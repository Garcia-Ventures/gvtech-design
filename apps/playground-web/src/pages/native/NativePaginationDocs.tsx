import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function NativePaginationDocs() {
  return (
    <>
      <ComponentShowcase
        componentName="Pagination"
        description="The native implementation of Pagination is currently a shim and returns 'Not implemented'."
        code={`import { Pagination } from '@gv-tech/ui-native';

export default function App() {
  return <Pagination />;
}`}
      >
        <div className="text-muted-foreground flex h-32 items-center justify-center rounded-md border border-dashed p-4 text-center">
          Not implemented shim
        </div>
      </ComponentShowcase>
    </>
  );
}
