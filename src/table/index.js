import React from 'react';
import Cell from '../cell';
import { Table, Tbody, Tr, Td } from './styles';

export default ({ rows }) => {
  return (
    <Table>
      <Tbody>
        {rows.map(row => {
          return (
            <Tr>
              {row.columns.map(col => (
                <Td rowSpan={col.layout.rowspan} colSpan={col.layout.colspan}>
                  <Cell cell={col.item} />
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
