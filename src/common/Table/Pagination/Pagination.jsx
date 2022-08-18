import React from 'react';
import PageSize from './PageSize';
import PageNumber from './PageNumber';

export default function Pagination({ filter, onChangePage, total }) {
  const limit = filter?.limit;
  const page = filter?.page;
  const count = total / limit;
  const onChangeHandle = (param) => {
    onChangePage({ limit, page, ...param });
  };
  return (
    <div className="flex items-center justify-between" style={{ marginTop: 40 }}>
      <PageSize limit={limit} onChangeHandle={onChangeHandle} />
      <PageNumber page={page} onChangeHandle={onChangeHandle} count={count} />
    </div>
  );
}
