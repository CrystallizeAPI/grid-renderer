import React from 'react';
import Cell from '../cell';
import { CssGrid } from './styles';

const Grid = ({
  cellComponent,
  children,
  renderContent,
  rows,
  totalColSpan
}) => {
  // Currently the data is only returned in a nested array of rows and
  // columns. To make use of CSS Grid we need a flat array of all of the
  // individual cells.
  const columns = rows.map(row => row.columns);
  const cells = [].concat.apply([], columns);
  const CellComponent = cellComponent || Cell;

  return (
    <CssGrid totalColSpan={totalColSpan} rows={rows}>
      {children
        ? children({ cells })
        : cells.map((cell, i) => (
            <CellComponent key={`cell-${i}`} cell={cell}>
              {renderContent && renderContent(cell)}
            </CellComponent>
          ))}
    </CssGrid>
  );
};

export default Grid;
