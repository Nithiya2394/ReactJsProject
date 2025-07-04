'use client';
import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, TablePagination, TableSortLabel, Paper
} from '@mui/material';
import { useState } from 'react';
import { TableColumn } from '@/types/lender';

type Props<T> = {
  columns: TableColumn<T>[];
  data: T[];
  rowsPerPageOptions?: number[];
};

const TableComponent = <T extends object>({
  columns,
  data,
  rowsPerPageOptions = [5, 10, 25],
}: Props<T>) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [orderBy, setOrderBy] = useState<keyof T | ''>('');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: keyof T) => {
    const isAsc = orderBy === key && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(key);
  };

  const sortedData = [...data].sort((a, b) => {
    if (!orderBy) return 0;
    const aVal = a[orderBy];
    const bVal = b[orderBy];
    if (aVal === bVal) return 0;
    return (aVal! > bVal! ? 1 : -1) * (order === 'asc' ? 1 : -1);
  });
  const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
 return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
            <TableRow>
                {columns.map((col) => {
                const isSorted = orderBy === col.key;

                return (
                    <TableCell
                    key={String(col.key)}
                    align={col.align || 'left'}
                    {...(col.sortable && isSorted ? { sortDirection: order } : {})}
                  >
                    {col.sortable ? (
                      <TableSortLabel
                        active={isSorted}
                        direction={isSorted ? order : 'asc'}
                        onClick={() => handleSort(col.key as keyof T)}
                      >
                        {col.label}
                      </TableSortLabel>
                    ) : (
                      col.label
                    )}
                  </TableCell>
                );
                })}
            </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((row, rowIdx) => (
            <TableRow key={rowIdx}>
             {columns.map((col) => {
                const key = col.key;
                // Use type guard to check if key is keyof T
                const isDataKey = typeof key !== 'string' || key in row;
                const value = isDataKey ? (row as Record<string, unknown>)[key as string] : undefined;
                return (
                    <TableCell key={String(key)} align={col.align || 'left'}>
                    {col.render ? col.render(value as never, row) : String(value ?? '')}
                    </TableCell>
                );
                })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </TableContainer>
  );
};

export default TableComponent;
