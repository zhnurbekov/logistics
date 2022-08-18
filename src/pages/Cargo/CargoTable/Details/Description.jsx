import React from 'react';
import Row from './Row';
import Typography from '@mui/material/Typography';

export default function Description({ data }) {
  return (
    <>
      <div className="flex items-center">
        <div className="col-6">
          <Row label={'Тип контейнера'} value={data?.containerType} />
          <Row label={'Общий объем, м3'} value={data?.overallVolume} />
          <Row label={'Высота, метры'} value={data?.height} />
        </div>
        <div className="col-6">
          <Row label={'Масса, тн'} value={data?.weight} />
          <Row label={'Длина, метры'} value={data?.length} />
          <Row label={'Ширина, метры'} value={data?.width} />
        </div>
      </div>
      <div>
        <Typography variant={'body1'} color={'textSecondary'} children={'Описание груза'} />
        <Typography variant={'body1'} children={data?.description} style={{ marginTop: 13 }} />
      </div>
    </>
  );
}
