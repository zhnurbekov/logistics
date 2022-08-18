import React from 'react';
import AddUnSortedIcon from '../../../media/Icons/AddUnSortedIcon';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SortDescIcon from '../../../media/Icons/SortDescIcon';
import IconButton from '@mui/material/IconButton';

const ASC_SORT = 'asc';
const DESC_SORT = 'desc';
export default function Sort({ column, sort, onSort }) {
  const isSort = sort && column.field in sort;
  const isAscSort = isSort && sort[column.field] === ASC_SORT;
  const onSortHandle = (value) => {
    onSort(value ? { [column.field]: value } : {});
  };

  return (
    <>
      <IconButton>
        {!isSort ? (
          <AddUnSortedIcon style={{ fontSize: 10 }} onClick={() => onSortHandle(ASC_SORT)} />
        ) : isAscSort ? (
          <ArrowUpwardIcon style={{ fontSize: 10 }} onClick={() => onSortHandle(DESC_SORT)} />
        ) : (
          <SortDescIcon style={{ fontSize: 14 }} onClick={() => onSortHandle()} />
        )}
      </IconButton>
    </>
  );
}
