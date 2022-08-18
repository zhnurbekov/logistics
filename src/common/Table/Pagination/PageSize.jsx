import * as React from 'react';
import { MuiToggleButton, MuiToggleButtonGroup, PageSizeStyles } from './PaginationStyles';
import Typography from '@mui/material/Typography';

export default function PageSize({ limit, onChangeHandle }) {
  const handleChange = (e, size) => {
    onChangeHandle({ limit: size });
  };

  return (
    <PageSizeStyles>
      <Typography variant={'body1'} children={'Показывать по:'} style={{ marginRight: 10 }} />
      <MuiToggleButtonGroup exclusive color="primary" value={limit || 20} onChange={handleChange}>
        <MuiToggleButton value={20} children={20} />;
        <MuiToggleButton value={50} children={50} />;
        <MuiToggleButton value={100} children={100} />;
      </MuiToggleButtonGroup>
    </PageSizeStyles>
  );
}
