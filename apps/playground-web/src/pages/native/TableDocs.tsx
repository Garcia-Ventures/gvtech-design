import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function TableDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A list of items rendered in a table for Native."
        code={`import { 
  Table, 
  TableCaption, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell,
  Text 
} from "@gv-tech/design-system";

export function TableExample() {
  return (
    <Table>
      <TableCaption><Text>A list of your recent invoices.</Text></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"><Text>Invoice</Text></TableHead>
          <TableHead><Text>Status</Text></TableHead>
          <TableHead className="text-right"><Text>Amount</Text></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell><Text>INV001</Text></TableCell>
          <TableCell><Text>Paid</Text></TableCell>
          <TableCell className="text-right"><Text>$250.00</Text></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Table component for Native is implemented using <code>View</code> and <code>Text</code> arranged in rows
          and columns.
        </p>

        <h4 className="mt-6 text-lg font-medium">Table</h4>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'NativeWind classes to apply.',
            },
          ]}
        />
      </div>
    </>
  );
}
