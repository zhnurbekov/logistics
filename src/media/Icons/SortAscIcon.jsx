import React from 'react';
import { SvgIcon } from '@mui/material';

function SortAscIcon(props) {
  return (
    <SvgIcon {...props} viewBox={'0 0 14 10'}>
      <g clipPath="url(#clip0_1_840)">
        <path
          d="m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
          fill="#82868C"
        />
        <path
          d="M0 1V0H7V1H0ZM0 3V2H6V3H0ZM0 5V4H5V5H0ZM0 7V6H4V7H0ZM0 9V8H3V9H0Z"
          fill="#82868C"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_840">
          <rect width="14" height="10" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}

export default SortAscIcon;
