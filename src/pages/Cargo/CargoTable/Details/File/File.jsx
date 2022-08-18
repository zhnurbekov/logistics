import React from 'react';
import { Paper, Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import { downloadBtn, FileStyles } from '../DetailsStyles';
import Button from '@mui/material/Button';
import DownloadIcon from '../../../../../media/Icons/DownloadIcon';
import DeleteIcon from '../../../../../media/Icons/DeleteIcon';
import download from './downloadFile';

export default function File({ file, deleteFileHandler }) {
  return (
    <FileStyles>
      <div className="paper">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between col-6">
            <Typography children={file.name} />
            <Typography
              color={'textSecondary'}
              children={'от 24.10.2021'}
              style={{ marginLeft: 60, marginRight: 60 }}
            />
          </div>
          <div className="flex items-center justify-between col-6">
            <div className="flex justify-start">
              <div className="order-number" children={'Заказ №4329'} />
            </div>
            <div>
              <Tooltip title={'Скачать файл'}>
                <Button
                  onClick={() => download(file)}
                  sx={downloadBtn}
                  children={<DownloadIcon style={{ fontSize: 12 }} />}
                />
              </Tooltip>
              <Tooltip title={'Удалить файл'}>
                <Button
                  onClick={deleteFileHandler}
                  sx={{ padding: '2px', minWidth: '20px', borderRadius: 0, marginLeft: '7px' }}
                  children={<DeleteIcon style={{ fontSize: 20 }} />}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </FileStyles>
  );
}
