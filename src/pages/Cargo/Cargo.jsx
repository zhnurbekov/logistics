import React, { useState } from 'react';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import paths from '../../_helpers/paths';
import { Styles } from './CargoStyles';
import Typography from '@mui/material/Typography';
import Filter from './Filter/Filter';
import { cargoColumns } from './CargoTable/CargoColumns';
import Table from '../../common/Table/Table';
import useTableExpander from '../../common/_hooks/useTableExpander';
import Details from './CargoTable/Details/Details';
import useData from './useData';

export default function Cargo() {
  const { expanded, editExpanded } = useTableExpander();
  const [checkedList, setCheckedList] = useState([]);
  const { data, setData, onFilterHandle, setFilter, queryFilter, onResetFilter, onSortHandle } =
    useData();

  return (
    <>
      <Styles>
        <Breadcrumbs paths={[{ name: 'Вернуться на главную', path: paths.home }]} />
        <Typography
          variant={'h6'}
          children={'Все грузы'}
          style={{ marginTop: 15, marginBottom: 17 }}
        />
        <Filter
          onResetFilter={onResetFilter}
          setFilter={setFilter}
          queryFilter={queryFilter}
          onFilterHandle={onFilterHandle}
        />
        <div style={{ marginTop: 20 }}>
          <Table
            total={data.length}
            data={data}
            columns={cargoColumns(checkedList, setCheckedList, data, expanded, editExpanded)}
            sort={queryFilter?.sort}
            onSort={onSortHandle}
            expanded={expanded}
            filter={queryFilter}
            onChangePage={setFilter}
            subComponent={(row) => <Details setData={setData} row={row} data={data} />}
          />
        </div>
      </Styles>
    </>
  );
}
