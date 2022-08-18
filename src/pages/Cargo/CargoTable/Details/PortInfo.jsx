import React from 'react';
import Row from './Row';

export default function PortInfo({ data }) {
  return (
    <>
      <div className="flex items-center">
        <div className="col-6">
          <Row label={'ТМЦ'} value={data?.tmc} />
          <Row label={'Расположение груза в порту'} value={data?.locationCargoInPort} />
        </div>
        <div className="col-6">
          <Row label={'Фрахтовая единица'} value={data?.freightUnit} />
        </div>
      </div>
    </>
  );
}
