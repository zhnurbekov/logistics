import React, { useState } from 'react';
import { exampleData } from './DataRorTest/exampleData';
import useQueryFilter from '../../common/_hooks/useQueryFilter';

export const filterName = '_cargo';
export default function useData() {
  const { setFilter, queryFilter, reset } = useQueryFilter(filterName);
  const [data, setData] = useState(exampleData);

  const onFilterHandle = () => {
    const date = queryFilter?.date;
    const status = queryFilter?.status;
    const port = queryFilter?.port;
    if (date || status || port) {
      const result = exampleData.filter((item) => {
        if (status && item.status !== status) {
          return false;
        }

        if (date && item.arrivalDate !== date) {
          return false;
        }

        if (port && item.portDestination !== port) {
          return false;
        }
        return true;
      });
      setData(result);
    }
  };

  const onSortHandle = (value) => {
    if (value && Object.entries(value).length) {
      const [key, sort] = value ? Object.entries(value)[0] : null;
      const isAsc = sort === 'asc';
      console.log(isAsc);

      const result = exampleData.sort(function (a, b) {
        if (isAsc) {
          if (a[key] > b[key]) return 1;
          if (a[key] < b[key]) return -1;
          return 0;
        } else {
          if (a[key] > b[key]) return -1;
          if (a[key] < b[key]) return 1;
          return 0;
        }
      });
      setData(result);
    } else {
      setData(exampleData);
    }
    setFilter({ sort: value });
  };

  const onResetFilter = () => {
    reset();
    setData(exampleData);
  };

  return { data, setData, onFilterHandle, setFilter, queryFilter, onResetFilter, onSortHandle };
}
