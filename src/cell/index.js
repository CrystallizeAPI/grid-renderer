import React from 'react';

const Cell = ({ cell }) => {
  return <div className="cell">{cell.name}</div>;
};

export default Cell;
