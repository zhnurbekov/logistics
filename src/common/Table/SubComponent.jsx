import React from 'react';
import { Collapse, TableCell, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/styles';

export default function SubComponent({ columns, subComponent, row, isOpen }) {
  const theme = useTheme();
  return (
    <TableRow>
      <TableCell
        style={{
          padding: 0,
          border: `none`,
          background: '#F9F9F9',
        }}
        colSpan={columns.length}
      >
        <Collapse in={true} timeout="auto" unmountOnExit>
          <Box>{subComponent(row)}</Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}
