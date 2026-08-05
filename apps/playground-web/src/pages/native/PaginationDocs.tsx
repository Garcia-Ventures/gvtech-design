import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function PaginationDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A standard pagination component for Native."
        code={`import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationPrevious, 
  PaginationLink, 
  PaginationNext, 
  PaginationEllipsis 
} from '@gv-tech/design-system';

export function PaginationExample() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onPress={() => console.log("prev")} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onPress={() => console.log("1")}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive onPress={() => console.log("2")}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onPress={() => console.log("3")}>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onPress={() => console.log("next")} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Pagination component on Native uses <code>Pressable</code> and <code>Button</code> components.
        </p>

        <h4 className="mt-6 text-lg font-medium">PaginationLink</h4>
        <PropsTable
          props={[
            {
              name: 'isActive',
              type: 'boolean',
              description: 'Whether the link is active.',
            },
            {
              name: 'size',
              type: '"default" | "sm" | "lg" | "icon"',
              defaultValue: '"icon"',
              description: 'The size of the button.',
            },
            {
              name: 'onPress',
              type: '() => void',
              description: 'Native press event handler.',
            },
          ]}
        />
      </div>
    </>
  );
}
