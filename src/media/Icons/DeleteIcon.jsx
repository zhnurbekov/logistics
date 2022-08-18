import React from 'react';
import { SvgIcon } from '@mui/material';

function DeleteIcon(props) {
  return (
    <SvgIcon {...props} viewBox={'0 0 20 20'}>
      <path d="M5 5L15 15M5 15L15 5" stroke="#FF0000" />
      <rect x="0.5" y="0.5" width="19" height="19" rx="1.5" stroke="#FF0000" fill={'none'} />
    </SvgIcon>
  );
}

export default DeleteIcon;
