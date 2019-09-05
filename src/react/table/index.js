import React from 'react';
import PropTypes from 'prop-types';
import { TableWrapper, StyledTable, Tr } from './styles';
import TableCell from './table-cell';

const Table = ({
  cellComponent,
  children,
  renderContent,
  rows,
  totalColSpan
}) => {
  const CellComponent = cellComponent || TableCell;

  return (
    <TableWrapper>
      <StyledTable>
        <tbody>
          {children
            ? children({ rows })
            : rows.map((row, i) => {
                return (
                  <Tr key={`row-${i}`}>
                    {row.columns.map((col, j) => (
                      <CellComponent
                        key={`cell-${i}-${j}`}
                        cell={col}
                        totalColSpan={totalColSpan}
                      >
                        {renderContent && renderContent(col)}
                      </CellComponent>
                    ))}
                  </Tr>
                );
              })}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

Table.propTypes = {
  cellComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  children: PropTypes.func,
  renderContent: PropTypes.func,
  rows: PropTypes.arrayOf(PropTypes.object),
  totalColSpan: PropTypes.number
};

export default Table;
