import React, { useRef, useCallback } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { getMonth, parse } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { DatePickerStyles, DisplayWrapper, useStyles } from './styles';
import { month } from './utils';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import { DatePickerContainer } from './DatePickerContainer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import DisplayFieldComponents from '../Filters/Select/DisplayFieldComponents';
registerLocale('ru', ru);

export function ReactDatePicker({
  disabled,
  maxDate,
  value,
  onChange,
  placeholderText,
  placeholder,
  error,
  label,
}) {
  const { i18n, t } = useTranslation();
  const pickerRef = useRef();

  const {
    datePickerRoot,
    calendar,
    dateInput,
    calendarHeader,
    calendarSelect,
  } = useStyles({ error });

  const calendarCustomHeader = useCallback(
    ({
      date,
      changeMonth,
      decreaseMonth,
      increaseMonth,
      prevMonthButtonDisabled,
      nextMonthButtonDisabled,
    }) => {
      const selectMonth = month()[getMonth(date)];
      return (
        <DatePickerStyles>
          <div className={calendarHeader}>
            <IconButton
              color={'primary'}
              style={{ fontSize: '1.25rem' }}
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              children={<KeyboardDoubleArrowLeftIcon fontSize="inherit" />}
            />

            <select
              className={calendarSelect}
              value={selectMonth}
              onChange={({ target: { value } }) => changeMonth(month().indexOf(value))}
              children={month().map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            />
            <div>
              <IconButton
                color={'primary'}
                size="small"
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                children={<KeyboardDoubleArrowRightIcon fontSize="inherit" />}
              />
            </div>
          </div>
        </DatePickerStyles>
      );
    },
    [calendarHeader, calendarSelect]
  );

  return (
    <div className={datePickerRoot}>
      <DatePicker
        customInput={
          <DisplayWrapper>
            <DisplayFieldComponents label={label} value={value} placeholder={placeholder} />
          </DisplayWrapper>
        }
        ref={pickerRef}
        maxDate={maxDate}
        selected={value ? parse(value, 'dd.MM.yyyy', new Date()) : new Date()}
        onChange={onChange}
        dateFormat={'dd.MM.yyyy'}
        disabled={disabled}
        placeholderText={placeholderText || t('date_picker_placeholder')}
        className={dateInput}
        shouldCloseOnSelect={false}
        onChangeRaw={(e) => e.preventDefault()}
        calendarContainer={({ className, children }) => {
          return (
            <DatePickerContainer children={children} className={className} pickerRef={pickerRef} />
          );
        }}
        calendarClassName={calendar}
        renderCustomHeader={calendarCustomHeader}
        locale={'ru'}
        {...{ calendarStartDay: 1 }}
      />
      {error && <Typography children={error?.message} variant={'caption'} color={'error'} />}
    </div>
  );
}
