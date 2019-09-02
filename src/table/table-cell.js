import React from 'react';
import Cell from '../cell';
import { Td } from './styles';

const TableCell = ({ cell, rowSpan, colSpan }) => {
  return (
    <Td rowSpan={rowSpan} colSpan={colSpan}>
      <Cell cell={cell} />
    </Td>
  );
};

export default TableCell;
