import React from 'react';
import Column from '../column';

const Row = ({ row }) => {
  const { columns } = row;
  return (
    <div className="row">
      {columns.map(column => (
        <Column column={column} />
      ))}
    </div>
  );
};

export default Row;
