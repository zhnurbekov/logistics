import React from 'react';
import { Pagination } from '@mui/material';
import { PageNumberStyles } from './PaginationStyles';

export default function PageNumber({ page, onChangeHandle, count }) {
  return (
    <PageNumberStyles>
      <Pagination
        count={count >= 1 ? count : 1}
        page={page}
        onChange={(e, num) => onChangeHandle({ page: num })}
      />
    </PageNumberStyles>
  );
}
