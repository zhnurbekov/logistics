import React from 'react';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody';
import { TableStyles } from './TableStyles';
import { Table as MuiTable, TableContainer } from '@mui/material';
import Pagination from './Pagination/Pagination';

export default function Table({
  columns,
  data,
  expanded,
  subComponent,
  sort,
  onSort,
  filter,
  onChangePage,
  total,
}) {
  return (
    <>
      <TableStyles>
        <TableContainer>
          <MuiTable>
            <TableHead columns={columns} sort={sort} onSort={onSort} />
            <TableBody
              data={data}
              columns={columns}
              expanded={expanded}
              subComponent={subComponent}
            />
          </MuiTable>
        </TableContainer>
      </TableStyles>
      <Pagination filter={filter} onChangePage={onChangePage} total={total} />
    </>
  );
}
