import React from 'react';
import { Styles, useStyles } from './DetailsStyles';
import ActFiles from './File/ActFiles';
import Main from './Main';
import Description from './Description';
import User from './User';
import PortInfo from './PortInfo';
import Button from '@mui/material/Button';
import CopyIcon from '../../../../media/Icons/CopyIcon';

export default function Details({ setData, row, data }) {
  const classes = useStyles();

  return (
    <Styles>
      <hr />
      <div className="fullWidth flex">
        <div className="col-8">
          <Main data={row} />
          <hr />
          <Description data={row} />
          <hr />
          <PortInfo />
          <hr />
        </div>
        <div className="col-4 flex  justify-center" children={<User data={row} />} />
      </div>
      <ActFiles setData={setData} row={row} data={data} />
      <div className="flex items-center">
        <Button variant={'contained'} className={classes.btn} sx={{ fontWeight: 700 }}>
          <CopyIcon style={{ fontSize: 15 }} />
          РЕДАКТИРОВАТЬ
        </Button>
        <Button
          color={'error'}
          variant={'outlined'}
          className={classes.splitBtn}
          children={'Разделить груз'}
        />
      </div>
    </Styles>
  );
}
