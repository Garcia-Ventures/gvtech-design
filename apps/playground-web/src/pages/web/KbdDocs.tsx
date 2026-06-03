import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Kbd, KbdGroup } from '@gv-tech/ui-web';

export function KbdDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="Keyboard key symbol."
        code={`<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`}
      >
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes.',
            },
          ]}
        />
      </div>
    </>
  );
}
