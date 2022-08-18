import React, { useMemo } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Breadcrumbs as MuiBreadcrumbs, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Breadcrumbs({ paths }) {
  const breadcrumbs = useMemo(() => {
    if (!paths) return [];
    return paths.map((item, index) => {
      if (index > 0 && index === paths.length - 1) {
        return <Typography key={item.path} color="primary" children={item.name} />;
      }

      return (
        <Link underline={'hover'} key={item.path} color="action" href={item.path}>
          <div className="flex items-center">
            {index === 0 && <NavigateBeforeIcon style={{ fontSize: 16 }} color={'action'} />}
            <span className="fs-12 color-action">{item.name}</span>
          </div>
        </Link>
      );
    });
  }, []);

  return (
    <>
      <MuiBreadcrumbs aria-label="breadcrumb">{breadcrumbs}</MuiBreadcrumbs>
    </>
  );
}
