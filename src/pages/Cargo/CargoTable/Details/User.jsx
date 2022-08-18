import React from 'react';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { avatarSx } from './DetailsStyles';

export default function User({ data }) {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Typography
          variant={'body1'}
          color={'textSecondary'}
          children={'Пользователь'}
          style={{ marginTop: 55, marginBottom: 16 }}
        />
        <Avatar sx={avatarSx} children={'ИИ'} />
        <Typography variant={'body1'} children={data?.userName} />
        <Typography variant={'body1'} color={'textSecondary'} children={data?.email} />
        <Typography variant={'body1'} children={data?.phone} style={{ marginTop: 2 }} />
      </div>
    </>
  );
}
