import { makeStyles } from '@mui/styles';
import styled from 'styled-components';

export const DisplayWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  width: 240px !important;
`;

export const DatePickerStyles = styled.div`
  select::-ms-expand {
    display: none !important;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  select {
    text-align: center;
    border: 0 !important;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-overflow: '';
    text-indent: 0.01px;
    text-overflow: '';
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    text-transform: none !important;
  }
`;

const useStyles = makeStyles((theme) => ({
  datePickerRoot: {
    margin: '10px 0 10px',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2,
    marginLeft: 10,
    '.makeStyles-calendar-31 .react-datepicker__day--keyboard-selected': {
      background: 'black  !important',
    },
  },
  calendarBlockWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  calendarWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  calendar: {
    border: 'none',
    borderRadius: 'unset',
    lineHeight: '1.7rem',
    '& .react-datepicker__header': {
      background: 'transparent',
      border: 'none',
      borderRadius: 'unset',
      paddingTop: '0',
    },
    '& .react-datepicker__day': {
      width: '32px',
      height: '34px',
      padding: 9,
      // opacity: 0.6,
      fontWeight: 400,
      fontSize: 13,
      lineHeight: '18px',
      color: '#33333390',
      borderRadius: 'unset',
      '&.react-datepicker__day--selected': {
        background: '#2A2E37 !important',
        color: '#FFFFFF',
      },
    },
    '&.no-selected-days .react-datepicker__day--in-range': {
      background: '#2A2E37 !important',
      color: '#FFFFFF !important',
    },
    '&.no-selected-days .react-datepicker__day--in-selecting-range': {
      background: '#2A2E37 !important',
      color: '#FFFFFF',
    },
    '& .react-datepicker__day--in-range': { background: '#2A2E37', color: '#FFFFFF' },
    '& .react-datepicker__day--in-selecting-range': {
      background: '#2A2E37 !important',
      color: '#FFFFFF',
    },
    '& .react-datepicker__day--keyboard-selected': {
      background: '#2A2E37 !important',
      color: '#FFFFFF',
      opacity: 100,
    },
    '& .react-datepicker__day--today': {
      color: '#2980B9 !important',
    },
    '& .react-datepicker__day-name': {
      margin: '0.375rem',
      fontWeight: 400,
      fontSize: 13,
      lineHeight: '18px',
      textTransform: 'none',
    },
  },
  bordered: {
    borderRight: '1px solid #C4C4C4',
    marginRight: '5px',
  },
  datepickerFormWrapper: {
    zIndex: 2,

    backgroundColor: 'rgba(38, 50, 56, 0.06)',
    borderRadius: '4px 4px 0 0',
    marginBottom: '16px',
    borderBottom: ({ error }) => (error ? `1px solid red` : `1px solid rgba(38, 50, 56, 0.38)`),
  },
  dateInput: {
    margin: '0 0 2px',
    width: '430px',
    border: 'none',
    borderRadius: 'unset',
    fontSize: '16px',
    lineHeight: '24px',
    outline: 'none !important',
    verticalAlign: 'calc(-8px)',
    background: 'transparent',
    cursor: 'pointer !important',
    '& .MuiInputBase-input': {
      cursor: 'pointer !important',
    },
  },
  calendarHeader: {
    margin: '0 10px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  calendarSelect: {
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '16.41px',
    letterSpacing: '0.75px',
    border: 'none',
    borderRadius: 'unset',
    outline: 'none',
    '&::focus': {
      border: 'none',
      boxShadow: 'none',
    },
  },
  timeRoot: {
    background: '#BCDFFB',
    color: theme.palette.primary.main,
    display: 'flex',
    fontSize: '48px',
    borderRadius: '4px',
    lineHeight: '56.25px',
  },
  timeInput: {
    textAlign: 'center',
    '&:focus': {
      background: '#7FB3D5',
    },
  },
  timeTitle: {
    textTransform: 'capitalize',
    fontSize: '12px',
    marginTop: '3px',
    marginLeft: '2px',
  },
  timePickerWrapper: {
    background: '#BCDFFB',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    width: 96,
  },
}));

export { useStyles };
