import React from 'react';
import Cell from '../cell';
import { Td, TableCellWrapper } from './styles';

const TableCell = ({ cell, children, totalColSpan }) => {
  const { layout } = cell;
  return (
    <Td
      rowSpan={layout.rowspan}
      colSpan={layout.colspan}
      totalColSpan={totalColSpan}
    >
      <TableCellWrapper>
        {children ? children : <Cell cell={cell} />}
      </TableCellWrapper>
    </Td>
  );
};

export default TableCell;
