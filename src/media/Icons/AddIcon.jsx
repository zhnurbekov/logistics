import React from 'react';
import { SvgIcon } from '@mui/material';

function AddIcon(props) {
  return (
    <SvgIcon {...props} viewBox={'0 0 22 22'}>
      <path
        d="M0 11C0 9.89543 0.895431 9 2 9H11H20C21.1046 9 22 9.89543 22 11C22 12.1046 21.1046 13 20 13H2C0.89543 13 0 12.1046 0 11Z"
        fill="white"
      />
      <path
        d="M9 2C9 0.89543 9.89543 0 11 0C12.1046 0 13 0.895431 13 2V20C13 21.1046 12.1046 22 11 22C9.89543 22 9 21.1046 9 20V2Z"
        fill="white"
      />
    </SvgIcon>
  );
}

export default AddIcon;
