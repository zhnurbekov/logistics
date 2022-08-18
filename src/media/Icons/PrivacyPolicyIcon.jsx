import React from 'react';
import { SvgIcon } from '@mui/material';

function PrivacyPolicyIcon(props) {
  return (
    <SvgIcon {...props} viewBox={'0 0 24 24'}>
      <rect x="5" y="8" width="14" height="14" rx="3" stroke="#2A2E37" fill="none" />
      <path
        d="M12 2C9.79086 2 8 3.67893 8 5.75V7C8 7.55228 8.44772 8 9 8H15C15.5523 8 16 7.55228 16 7V5.75C16 3.67893 14.2091 2 12 2Z"
        stroke="#2A2E37"
        fill="none"
      />
      <rect x="10.0001" y="13" width="4" height="4" rx="1" stroke="#2A2E37" fill="none" />
    </SvgIcon>
  );
}

export default PrivacyPolicyIcon;
