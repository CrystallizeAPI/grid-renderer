import React from 'react';
import Cell from '../cell';
import { CssGrid } from './styles';

const Grid = ({ cells, children, rows, totalColSpan, totalRowSpan }) => {
  return (
    <div>
      <CssGrid
        numberOfColumns={totalColSpan}
        numberOfRows={totalRowSpan}
        rows={rows}
      >
        {children
          ? children({ cells, totalColSpan, totalRowSpan })
          : cells.map(cell => (
              <Cell
                colSpan={cell.layout.colspan}
                rowSpan={cell.layout.rowspan}
                cell={cell.item}
              />
            ))}
      </CssGrid>
    </div>
  );
};

export default Grid;
