import React from 'react';
import { TableBody as MuiTableBody, TableCell, TableRow } from '@mui/material';
import SubComponent from './SubComponent';
import Typography from '@mui/material/Typography';
import { useStyles } from './TableStyles';

export default function TableBody({ data, columns, subComponent, expanded }) {
  const classes = useStyles();

  return (
    <>
      <MuiTableBody>
        {data
          ? data.map((row) => {
              const isExpand = expanded.includes(row?.id);
              return (
                <>
                  <TableRow key={row?.id} className={classes.row}>
                    {columns.map((col) => {
                      return (
                        <TableCell
                          key={col.field}
                          className={classes.cell}
                          sx={{
                            background: isExpand ? '#F9F9F9' : 'transparent',
                            borderBottom: isExpand ? 'none' : '',
                          }}
                        >
                          {col?.renderCell ? (
                            col?.renderCell(row)
                          ) : (
                            <Typography className={classes.bodyText} children={row[col?.field]} />
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                  {subComponent && isExpand && (
                    <SubComponent columns={columns} row={row} subComponent={subComponent} />
                  )}
                </>
              );
            })
          : null}
      </MuiTableBody>
    </>
  );
}
