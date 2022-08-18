import React from 'react';
import { SvgIcon } from '@mui/material';

function SearchIcon(props) {
  return (
    <SvgIcon {...props} viewBox={'0 0 20 20'}>
      <path
        d="M19.827 18.98L14.9656 14.1197C16.2697 12.6208 17.0592 10.6652 17.0592 8.52772C17.0592 3.82262 13.2313 0 8.52961 0C3.82346 0 0 3.82705 0 8.52772C0 13.2284 3.8279 17.0554 8.52961 17.0554C10.6676 17.0554 12.6236 16.2661 14.1229 14.9623L18.9843 19.8226C19.0996 19.9379 19.2548 20 19.4056 20C19.5564 20 19.7117 19.9424 19.827 19.8226C20.0577 19.592 20.0577 19.2106 19.827 18.98ZM1.19317 8.52772C1.19317 4.48337 4.48436 1.19734 8.52517 1.19734C12.5704 1.19734 15.8572 4.4878 15.8572 8.52772C15.8572 12.5676 12.5704 15.8625 8.52517 15.8625C4.48436 15.8625 1.19317 12.5721 1.19317 8.52772Z"
        fill="#82868C"
      />
    </SvgIcon>
  );
}

export default SearchIcon;