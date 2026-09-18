import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@gv-tech/ui-web';
import { UserIcon } from 'lucide-react';

export function ItemDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A flexible item layout for lists."
        code={`<Item>
  <ItemMedia variant="icon"><UserIcon /></ItemMedia>
  <ItemContent>
    <ItemTitle>User Profile</ItemTitle>
    <ItemDescription>Manage your settings.</ItemDescription>
  </ItemContent>
</Item>`}
      >
        <Item className="w-full max-w-sm">
          <ItemMedia variant="icon">
            <UserIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>User Profile</ItemTitle>
            <ItemDescription>Manage your settings.</ItemDescription>
          </ItemContent>
        </Item>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'variant',
              type: '"default" | "outline" | "muted"',
              defaultValue: '"default"',
              description: 'The visual style.',
            },
            {
              name: 'size',
              type: '"default" | "sm" | "xs"',
              defaultValue: '"default"',
              description: 'The size of the item.',
            },
          ]}
        />
      </div>
    </>
  );
}
