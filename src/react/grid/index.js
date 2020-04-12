import React from 'react';
import PropTypes from 'prop-types';

import GridCell from './grid-cell';

const Grid = ({
  cellComponent,
  cells,
  children,
  totalColSpan = 4,
  ...props
}) => {
  const CellComponent = cellComponent;

  return (
    <div
      style={{
        display: 'grid',
        'grid-template-columns': `repeat(${totalColSpan}, 1fr)`,
      }}
      {...props}
    >
      {children
        ? children({ cells })
        : cells.map((cell, i) => (
            <GridCell key={`cell-${i}`} cell={cell}>
              <CellComponent cell={cell} />
            </GridCell>
          ))}
    </div>
  );
};

Grid.propTypes = {
  cellComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  cells: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func,
  totalColSpan: PropTypes.number,
};

export default Grid;
