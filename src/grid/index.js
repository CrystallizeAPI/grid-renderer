import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../cell';
import { GridWrapper } from './styles';

const getTotalGridDimensions = rows => {
  return rows[0].columns.reduce(
    (acc, col) => {
      return {
        colspan: acc.colspan + col.layout.colspan,
        rowspan: acc.rowspan + col.layout.rowspan
      };
    },
    { colspan: 0, rowspan: 0 }
  );
};

const Grid = ({ children, model }) => {
  const { rows } = model;
  if (!rows.length) return null;

  const { colspan, rowspan } = getTotalGridDimensions(rows);
  const columns = rows.map(row => row.columns);
  const cells = [].concat.apply([], columns);

  return (
    <div>
      <GridWrapper numberOfColumns={colspan} numberOfRows={rowspan}>
        {children
          ? children({ cells })
          : cells.map(cell => (
              <Cell
                colspan={cell.layout.colspan}
                rowspan={cell.layout.rowspan}
                cell={cell.item}
              />
            ))}
      </GridWrapper>
    </div>
  );
};

Grid.propTypes = {
  model: PropTypes.object,
  // type: PropTypes.oneOf(['cssGrid', 'table']),
  children: PropTypes.func
};

export default Grid;
