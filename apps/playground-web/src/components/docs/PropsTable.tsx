import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@gv-tech/ui-web';

export interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropDefinition[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Prop</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Default</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.name}>
              <TableCell className="font-mono text-sm font-semibold">
                {prop.name}
                {prop.required && <span className="text-destructive ml-1">*</span>}
              </TableCell>
              <TableCell className="text-muted-foreground font-mono text-xs">{prop.type}</TableCell>
              <TableCell className="text-muted-foreground font-mono text-xs">{prop.defaultValue || '-'}</TableCell>
              <TableCell className="text-muted-foreground text-sm">{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
