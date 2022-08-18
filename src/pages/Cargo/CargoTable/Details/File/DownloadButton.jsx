import React from 'react';
import UploadButton from './UploadButton';
import AttachFileIcon from '../../../../../media/Icons/AttachFileIcon';
import Button from '@mui/material/Button';
import { useStyles } from '../DetailsStyles';

export default function DownloadButton({ row, setFiles }) {
  const classes = useStyles();

  return (
    <>
      <UploadButton onUpload={(file) => setFiles(file, row.id)}>
        {({ upLoad }) => {
          return (
            <Button onClick={upLoad} variant={'contained'} className={classes.btn}>
              <AttachFileIcon style={{ fontSize: 15 }} />
              Добавить
            </Button>
          );
        }}
      </UploadButton>
    </>
  );
}
