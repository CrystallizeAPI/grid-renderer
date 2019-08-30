import React from 'react';
import Cell from '../cell';

const Row = ({ column }) => {
  const { item } = column;
  return <Cell cell={item} />;
};

export default Row;
