import React from 'react';
import { MenuItem, OutlinedInput, Select } from '@mui/material';
import { statusStyles, useStatusStyles } from './DetailsStyles';
import { statusDict } from '../../DataRorTest/Dict';

export default function Status({ value }) {
  const classes = useStatusStyles();
  return (
    <>
      <Select
        displayEmpty
        className={classes.select}
        defaultValue={value}
        sx={{}}
        input={<OutlinedInput sx={{ padding: 0 }} classes={{ input: classes.input }} />}
        MenuProps={{
          classes: { paper: classes.paper },
          MenuListProps: { sx: statusStyles.selectMenuProps },
        }}
      >
        {statusDict.map((item) => {
          return (
            <MenuItem key={item.value} value={item.value} sx={statusStyles.menuItem}>
              <div className="flex items-center">
                <div style={{ ...statusStyles.dot, background: item.color }} />
                <div className="input-label" style={{ paddingRight: 5 }} children={item.name} />
              </div>
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}
