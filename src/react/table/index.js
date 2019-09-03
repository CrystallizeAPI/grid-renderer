import React from 'react';
import { Table, Tbody, Tr, Td } from './styles';
import TableCell from './table-cell';

export default ({ cellComponent, children, renderContent, rows }) => {
  const CellComponent = cellComponent || TableCell;

  return (
    <Table>
      <tbody>
        {children
          ? children({ rows })
          : rows.map((row, i) => {
              return (
                <Tr key={`row-${i}`}>
                  {row.columns.map((col, j) => (
                    <CellComponent key={`cell-${i}-${j}`} cell={col}>
                      {renderContent && renderContent(col)}
                    </CellComponent>
                  ))}
                </Tr>
              );
            })}
      </tbody>
    </Table>
  );
};
