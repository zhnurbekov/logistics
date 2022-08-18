import { useEffect, useState } from 'react';
import {  useLocation } from 'react-router-dom';
import checkFilter from './checkFilter';
import { useNavigate } from 'react-router';

const DEFAULT_FILTER = { limit: 20, page: 1, sort: {} };
export default function useQueryFilter({ index = '', defaultFilter }) {
  const filterName = `filter${index}`;
  const orderName = `order${index}`;
  const [queryFilter, setQueryFilter] = useState(null);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const filter = params.get(filterName)
    ? JSON.parse(params.get(filterName))
    : { ...DEFAULT_FILTER, ...defaultFilter };

  const reset = () => {
    params.set(filterName, JSON.stringify({ ...DEFAULT_FILTER, ...defaultFilter }));
    navigate(`${pathname}?${params.toString()}`, { replace: true });
  };

  const setFilter = (param) => {
    let requestFilter = checkFilter(filter, param);
    params.set(filterName, JSON.stringify(requestFilter));
    navigate(`${pathname}?${params.toString()}`, { replace: true });
  };

  useEffect(() => {
    let requestFilter = { ...defaultFilter, ...filter };
    if (JSON.stringify(requestFilter) !== JSON.stringify(queryFilter)) {
      setFilter(requestFilter);
      setQueryFilter({ ...requestFilter });
    }
  }, [search]);

  const clearFilter = () => () => {
    if (window.location.search) {
      if (pathname === window.location.pathname) {
        const params = new URLSearchParams(search);
        params.delete(filterName);
        params.delete(orderName);
        navigate(`${pathname}?${params.toString()}`, { replace: true });
      }
    }
  };

  useEffect(() => clearFilter(), []);

  return { queryFilter, reset, index, setFilter };
}
