import * as React from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import './LogOutDialogTranslate';

export default function LogOutDialog({ isOpen, close }) {
  const { t } = useTranslation();

  return (
    <Dialog open={isOpen} onClose={close} maxWidth="sm">
      <DialogContent dividers>
        <DialogContentText sx={{ textAlign: 'center' }}>{t('log_out_warning')}</DialogContentText>
      </DialogContent>
      <DialogActions sx={{ textAlign: 'center', display: 'block', margin: 'auto' }}>
        <Button
          color="inherit"
          onClick={close}
          children={t('log_out_cancel')}
          sx={{
            color: 'black',
            backgroundColor: 'rgba(0,0,0,0.1)',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.3)',
            },
          }}
        />
        <Button
          color="error"
          children={t('log_out_confirm')}
          className="dialog_button"
          sx={{
            color: 'black',
            backgroundColor: 'rgba(255,0,0,0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255,0,0,0.3)',
            },
          }}
        />
      </DialogActions>
    </Dialog>
  );
}
