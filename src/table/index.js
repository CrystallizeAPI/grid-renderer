import React from 'react';
import { Table, Tbody, Tr, Td } from './styles';
import TableCell from './table-cell';

export default ({ children, rows }) => {
  return (
    <Table>
      <Tbody>
        {children
          ? children({ rows })
          : rows.map(row => {
              return (
                <Tr>
                  {row.columns.map(col => (
                    <TableCell
                      rowSpan={col.layout.rowspan}
                      colSpan={col.layout.colspan}
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
