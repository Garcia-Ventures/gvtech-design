import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './table';

describe('Table', () => {
  it('renders correctly', () => {
    render(
      <Table>
        <TableCaption>A list of invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('A list of invoices.')).toBeInTheDocument();
    expect(screen.getByText('INV001')).toBeInTheDocument();
  });
});
