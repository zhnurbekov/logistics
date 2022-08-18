import React from 'react';
import { TableCell, TableHead as MuiTableHead, TableRow } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useStyles } from '../TableStyles';
import Sort from './Sort';

export default function TableHead({ columns, sort, onSort }) {
  const classes = useStyles();

  return (
    <>
      <MuiTableHead>
        <TableRow>
          {columns.map((col) => {
            return (
              <TableCell key={col.field} className={classes.headCell} style={col?.headerStyle}>
                {col?.headerRender || (
                  <div className="flex items-center">
                    <Typography
                      className={classes.headerText}
                      children={col.header}
                      color={'textSecondary'}
                      style={{ marginRight: 10 }}
                    />
                    {col?.sortable && <Sort column={col} onSort={onSort} sort={sort} />}
                  </div>
                )}
              </TableCell>
            );
          })}
        </TableRow>
      </MuiTableHead>
    </>
  );
}
