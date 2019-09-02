import React from 'react';
import { Table, Tbody, Tr, Td } from './styles';
import Cell from '../cell';

export const TableCell = ({ rowspan, colspan, cell }) => {
  return (
    <Td rowSpan={rowspan} colSpan={colspan}>
      <Cell rowSpan={rowspan} colSpan={colspan} cell={cell} />
    </Td>
  );
};

export default ({ model }) => {
  const { rows } = model;

  return (
    <Table>
      <Tbody>
        {rows.map(row => {
          return (
            <Tr>
              {row.columns.map(col => (
                <TableCell
                  rowspan={col.layout.rowspan}
                  colspan={col.layout.colspan}
                  cell={col.item}
                />
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
