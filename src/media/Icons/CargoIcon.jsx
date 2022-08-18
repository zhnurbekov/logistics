import React from 'react';
import { SvgIcon } from '@mui/material';

function CargoIcon(props) {
  return (
    <SvgIcon {...props} viewBox={'0 0 24 24'}>
      <path
        d="M7.5 6V18.5M7.5 6L22.5 7.5V17L7.5 18.5M7.5 6L4.75 6.75M7.5 18.5L4.75 17.75M20.5 15V9.5M17 15.5V9M13.5 16V8.5M10 16.5V8M4.75 17.75L2 17V7.5L4.75 6.75M4.75 17.75V6.75"
        stroke="#2A2E37"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
}

export default CargoIcon;
