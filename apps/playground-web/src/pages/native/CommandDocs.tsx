import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function CommandDocs() {
  return (
    <ComponentShowcase
      title="Web only"
      description="Command is not exported from @gv-tech/ui-native. Use Search."
      code={`import { Search } from '@gv-tech/ui-native';

export function FindAction() {
  return <Search />;
}`}
    >
      <p className="text-muted-foreground text-sm">
        The command palette depends on cmdk. On native, Search is the substitute.
      </p>
    </ComponentShowcase>
  );
}
