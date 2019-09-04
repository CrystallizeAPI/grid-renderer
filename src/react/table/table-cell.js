import React from 'react';
import Cell from '../cell';
import { Td, TableCellWrapper } from './styles';

const TableCell = ({ cell, children }) => {
  const { layout } = cell;
  return (
    <Td rowSpan={layout.rowspan} colSpan={layout.colspan}>
      <TableCellWrapper>
        {children ? children : <Cell cell={cell} />}
      </TableCellWrapper>
    </Td>
  );
};

export default TableCell;
