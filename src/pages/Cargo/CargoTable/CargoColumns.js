import React from 'react';
import { MuiCheckbox } from './CargoStyles';
import IconButton from '@mui/material/IconButton';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';

export const cargoColumns = (checkedList, setCheckedList, data, expanded, editExpanded) => {
  const onCheckedHandle = (checked, value) => {
    const list = checked ? [...checkedList, value] : checkedList.filter((item) => item !== value);
    setCheckedList(list);
  };

  const allCheckedHandle = ({ target: { checked } }) => {
    const list = checked ? data.map((item) => item.id) : [];
    setCheckedList(list);
  };

  return [
    {
      field: 'checkbox',
      headerRender: (
        <MuiCheckbox
          indeterminate={checkedList.length > 0 && checkedList.length !== data.length}
          checked={checkedList.length === data.length && data.length}
          onChange={allCheckedHandle}
        />
      ),
      renderCell: (row) => {
        return (
          <MuiCheckbox
            onChange={({ target: { checked } }) => onCheckedHandle(checked, row.id)}
            checked={checkedList.includes(row.id)}
          />
        );
      },
      style: { width: 20, padding: 0 },
      headerStyle: { width: 20 },
    },
    { field: 'cargoNumber', header: 'Номер груза', sortable: true },
    { field: 'type', header: 'Тип', sortable: true },
    { field: 'order', header: 'Закрепленный заказ ', sortable: true },
    { field: 'shipper', header: 'Грузоотправитель', sortable: true },
    { field: 'acceptanceActNumber', header: 'Номер приемного акта', sortable: true },
    {
      field: 'waybillNumberOfTransport',
      header: 'Номер транспортной/ЖД накладной',
      sortable: true,
    },
    {
      field: 'arrivalDate',
      header: 'Дата поступления в порт',
      sortable: true,
    },
    {
      field: 'expand',
      header: '',
      renderCell: (row) => {
        const isExpand = expanded.includes(row.id);
        return (
          <IconButton
            onClick={() => editExpanded(row.id)}
            sx={{ background: '#EEEEEE', width: 32, height: 32 }}
          >
            {isExpand ? <UpIcon style={{ fontSize: 14 }} /> : <DownIcon style={{ fontSize: 14 }} />}
          </IconButton>
        );
      },
    },
  ];
};
