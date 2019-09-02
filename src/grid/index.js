import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../cell';
import Table from '../table';
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

const Grid = ({ children, model }) => {
  const { rows } = model;
  if (!rows.length) return null;

  const { totalColSpan, totalRowSpan } = getTotalGridDimensions(rows);
  const columns = rows.map(row => row.columns);
  const cells = [].concat.apply([], columns);

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
                colspan={cell.layout.colspan}
                rowspan={cell.layout.rowspan}
                cell={cell.item}
              />
            ))}
      </CssGrid>
    </div>
  );
};

Grid.propTypes = {
  model: PropTypes.object,
  children: PropTypes.func
};

export default Grid;
