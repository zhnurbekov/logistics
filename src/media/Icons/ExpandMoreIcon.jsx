import React from 'react';
import { SvgIcon } from '@mui/material';

function ExpandMoreIcon(props) {
  return (
    <SvgIcon {...props} viewBox={'0 0 10 6'}>
      <path d="M9 1L5 5L1 1" stroke="#3A3C40" fill={'none'} />
    </SvgIcon>
  );
}

export default ExpandMoreIcon;
