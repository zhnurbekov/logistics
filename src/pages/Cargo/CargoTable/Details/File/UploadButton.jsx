import React, { useRef } from 'react';

export default function UploadButton({ children, onUpload }) {
  const ref = useRef();

  return (
    <>
      <input
        ref={ref}
        type={'file'}
        style={{ display: 'none' }}
        onChange={e => onUpload(e.target.files[0])}
      />
      {children({ upLoad: () => ref.current.click() })}
    </>
  );
}
