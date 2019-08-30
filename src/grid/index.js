import React from 'react';
import Row from '../row';

const Grid = ({ model }) => {
  const { rows } = model;
  return (
    <div className="grid">
      {rows.map(row => (
        <Row row={row} />
      ))}
    </div>
  );
};

export default Grid;
