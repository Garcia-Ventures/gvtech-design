import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './table';

describe('Table (Native Implementation)', () => {
  it('renders correctly', () => {
    render(
      <Table>
        <TableCaption>Table Caption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 2</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(screen.getByText('Table Caption')).toBeDefined();
    expect(screen.getByText('Header 1')).toBeDefined();
    expect(screen.getByText('Header 2')).toBeDefined();
    expect(screen.getByText('Cell 1')).toBeDefined();
    expect(screen.getByText('Cell 2')).toBeDefined();
  });
});
