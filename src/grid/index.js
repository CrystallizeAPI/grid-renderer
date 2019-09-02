import React from 'react';
import Cell from '../cell';
import { CssGrid } from './styles';

const getTotalGridDimensions = rows => {
  return rows[0].columns.reduce(
    (acc, col) => {
      return {
        totalColSpan: acc.totalColSpan + col.layout.colspan,
        totalRowSpan: acc.totalRowSpan + col.layout.rowspan
      };
    },
    { totalColSpan: 0, totalRowSpan: 0 }
  );
};

const Grid = ({ cellComponent, children, renderContent, rows }) => {
  // Currently the data is only returned in a nested array of rows and
  // columns. To make use of CSS Grid we need a flat array of all of the
  // individual cells.
  const columns = rows.map(row => row.columns);
  const cells = [].concat.apply([], columns);
  const { totalColSpan, totalRowSpan } = getTotalGridDimensions(rows);

  const CellComponent = cellComponent || Cell;

  return (
    <CssGrid
      numberOfColumns={totalColSpan}
      numberOfRows={totalRowSpan}
      rows={rows}
    >
      {children
        ? children({ cells })
        : cells.map(cell => (
            <CellComponent
              colSpan={cell.layout.colspan}
              rowSpan={cell.layout.rowspan}
              cell={cell.item}
            >
              {renderContent && renderContent(cell)}
            </CellComponent>
          ))}
    </CssGrid>
  );
};

export default Grid;
