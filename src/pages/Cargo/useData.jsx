import React, { useEffect, useState } from 'react';
import { exampleData } from './DataRorTest/exampleData';
import useQueryFilter from '../../common/_hooks/useQueryFilter';
import { useDispatch, useSelector } from 'react-redux';
import { searchModule, setSearchText } from '../../common/Header/SearchDucks';

export const filterName = '_cargo';
export default function useData() {
  const { setFilter, queryFilter, reset } = useQueryFilter(filterName);
  const { searchText } = useSelector((state) => state[searchModule]);
  const [data, setData] = useState(exampleData);
  const dispatch = useDispatch();
  useEffect(() => {
    onFilterHandle();
  }, [searchText]);

  const onFilterHandle = () => {
    const date = queryFilter?.date;
    const status = queryFilter?.status;
    const port = queryFilter?.port;
    if (date || status || port || searchText) {
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

        if (searchText && searchText !== '') {
          const isFind = Object.values(item).some((item) => {
            return String(item).indexOf(searchText) !== -1;
          });
          return isFind;
        }

        return true;
      });
      setData(result);
    } else {
      setData(exampleData);
    }
  };

  const onSortHandle = (value) => {
    if (value && Object.entries(value).length) {
      const [key, sort] = value ? Object.entries(value)[0] : null;
      const isAsc = sort === 'asc';

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
    dispatch(setSearchText(''));
    setData(exampleData);
  };

  return { data, setData, onFilterHandle, setFilter, queryFilter, onResetFilter, onSortHandle };
}
