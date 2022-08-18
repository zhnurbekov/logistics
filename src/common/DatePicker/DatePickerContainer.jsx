import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarContainer } from 'react-datepicker';
import { useTranslation } from 'react-i18next';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export function DatePickerContainer({ children, className, pickerRef }) {
  const { t } = useTranslation();

  return (
    <Paper style={{ marginTop: '-10px', background: '#FFFFFF', borderRadius: 2 }}>
      <Box padding="20px 24px">
        <CalendarContainer className={className}>
          <div style={{ position: 'relative' }} children={children} />
        </CalendarContainer>
        <hr style={{ border: '0.1px solid #ECECEC' }} />
        <div className="flex justify-between items-center">
          <Button
            sx={{ borderRadius: '2px' }}
            variant={'contained'}
            children={'Выбрать'}
            onClick={() => pickerRef?.current?.setOpen(false)}
          />
          <Button
            variant={'text'}
            onClick={() => pickerRef?.current?.setOpen(false)}
            children={'Отмена'}
            sx={{ textTransform: 'none', color: '#BABFC5' }}
          />
        </div>
      </Box>
    </Paper>
  );
}
