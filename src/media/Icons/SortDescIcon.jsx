import React from 'react';
import { SvgIcon } from '@mui/material';

function SortDescIcon(props) {
  return (
    <SvgIcon {...props} viewBox={'0 0 14 10'}>
      <g clipPath="url(#clip0_1_840)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.3821 6.98L13.2711 4.968L14.0001 5.652L11.1541 8.686L10.7891 9.075L10.4241 8.685L7.57812 5.652L8.30812 4.968L10.3821 7.179V0H11.3821V6.98Z"
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

export default SortDescIcon;
