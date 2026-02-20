import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function PaginationDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A standard pagination."
        code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">The Pagination component is built using standard HTML elements.</p>

        <h4 className="text-lg font-medium mt-6">PaginationLink</h4>
        <PropsTable
          props={[
            {
              name: 'isActive',
              type: 'boolean',
              description: 'Whether the link is active.',
            },
            {
              name: 'size',
              type: '"default" | "sm" | "icon"',
              defaultValue: '"icon"',
              description: 'The size of the button.',
            },
          ]}
        />
      </div>
    </>
  );
}
