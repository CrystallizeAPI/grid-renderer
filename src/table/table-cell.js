import React from 'react';
import Cell from '../cell';
import { Td } from './styles';

const TableCell = ({ cell, children, rowSpan, colSpan }) => {
  return (
    <Td rowSpan={rowSpan} colSpan={colSpan}>
      {children ? children : <Cell cell={cell} />}
    </Td>
  );
};

export default TableCell;
