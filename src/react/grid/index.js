import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../cell/cell';

const Grid = ({
  cellComponent,
  cells,
  children,
  totalColSpan = 4,
  ...props
}) => {
  const CellComponent = cellComponent || Cell;

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
            <CellComponent key={`cell-${i}`} cell={cell} />
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
