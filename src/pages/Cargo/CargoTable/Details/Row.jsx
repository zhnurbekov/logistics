import React from 'react';

export default function Row({ label, value }) {
  return (
    <div className="flex items-center fullWidth" style={{ marginTop: 13, marginBottom: 13 }}>
      <div className="col-6 label" children={label} />
      <div className="col-6 value-details " children={value} />
    </div>
  );
}
