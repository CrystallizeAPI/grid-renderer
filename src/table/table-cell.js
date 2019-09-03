import React from 'react';
import Cell from '../cell';
import { Td } from './styles';

const TableCell = ({ cell, children }) => {
  const { layout } = cell;
  return (
    <Td rowSpan={layout.rowspan} colSpan={layout.colspan}>
      {children ? children : <Cell cell={cell} />}
    </Td>
  );
};

export default TableCell;
