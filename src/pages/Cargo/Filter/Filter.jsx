import React from 'react';
import Select from '../../../common/Filters/Select/Select';
import Button from '@mui/material/Button';
import { btnStyle } from './FilterStyles';
import { ReactDatePicker } from '../../../common/DatePicker/ReactDatePicker';
import { format } from 'date-fns';
import { portDestinationDict, statusDict } from '../DataRorTest/Dict';

export default function Filter({ setFilter, queryFilter, onFilterHandle, onResetFilter }) {
  return (
    <>
      <div className="flex items-center">
        <Select
          value={queryFilter?.port}
          options={portDestinationDict}
          label={'Порт назначения'}
          placeholder={'Выберите порт'}
          style={{ maxWidth: 350 }}
          onChange={(value) => setFilter({ port: value })}
        />
        <Select
          value={queryFilter?.status}
          options={statusDict}
          label={'Статус'}
          placeholder={'Выберите статус'}
          style={{ width: 240, marginRight: 10 }}
          wrapperProps={{ style: { marginLeft: 10, width: 240, marginRight: 10 } }}
          onChange={(value) => setFilter({ status: value })}
        />
        <ReactDatePicker
          dateFormat={'dd.MM.yyyy'}
          value={queryFilter?.date}
          placeholder={'__.__.____'}
          label={'Дата поступления в порт'}
          onChange={(value) => {
            const date = format(value, 'dd.MM.yyyy');
            setFilter({ date });
          }}
        />
        <div className="flex items-center">
          <Button
            onClick={onResetFilter}
            children={'Сбросить'}
            variant={'outlined'}
            sx={btnStyle}
          />
          <Button
            children={'Применить'}
            variant={'contained'}
            onClick={onFilterHandle}
            sx={{ ...btnStyle, background: '#3A3C40' }}
          />
        </div>
      </div>
    </>
  );
}
