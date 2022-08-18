import React from 'react';
import Row from './Row';
import Status from './Status';

export default function Main({ data }) {
  return (
    <>
      <div className="flex items-center">
        <div className="col-6">
          <Row label={'Статус груза'} value={<Status value={data?.status} />} />
          <Row label={'Дата поступления груза в порт'} value={data?.arrivalDate} />
          <Row label={'Менеджер'} value={data?.manager} />
          <Row label={'Грузоотправитель'} value={data?.shipper} />
        </div>
        <div className="col-6">
          <Row label={'Закрепленный заказ'} value={<a children={data?.pinnedOrder} />} />
          <Row label={'Доставка груза до порта отправления'} value={data?.deliveryTransport} />
        </div>
      </div>
    </>
  );
}
