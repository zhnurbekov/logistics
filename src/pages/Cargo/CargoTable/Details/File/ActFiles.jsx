import React from 'react';
import Typography from '@mui/material/Typography';
import File from './File';
import Row from '../Row';
import DownloadButton from './DownloadButton';

export default function ActFiles({ setData, row, data }) {


  const uploadFile = (file, id) => {

    const updatedData = data.map((item) => {
      const uid = Math.floor(Math.random() * 100);
      return item.id === id ? { ...item, files: [...item.files, { file, id: uid }] } : item;
    });
    setData(updatedData);
  };

  const deleteFileHandler = (file, id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, files: item.files.filter((fl) => fl.id !== file.id) } : item
    );
    setData(updatedData);
  };

  return (
    <>
      {row?.files.length > 0 && (
        <Typography
          color={'textSecondary'}
          children={'Файл транспортной накладной'}
          style={{ marginBottom: 16, marginTop: 16 }}
        />
      )}
      {row?.files.map((item) => {
        return <File file={item?.file} deleteFileHandler={() => deleteFileHandler(item, row.id)} />;
      })}
      <Typography
        color={'textSecondary'}
        children={'Файл приемного акта'}
        style={{ marginBottom: 16, marginTop: 23 }}
      />
      <DownloadButton setFiles={uploadFile} row={row} />
      <div className="col-6 " style={{ marginTop: 24 }}>
        <Row label={'Номер приемного акта'} value={'21085-Т'} />
      </div>
    </>
  );
}
