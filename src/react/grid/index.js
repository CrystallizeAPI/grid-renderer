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
        gridTemplateColumns: `repeat(${totalColSpan}, 1fr)`,
      }}
      {...props}
    >
      {children
        ? children({ cells })
        : cells.map((cell, i) => (
            <div
              key={`cell-${i}`}
              className="crystallize-grid-cell"
              style={{
                gridColumn: `span ${cell.layout.colspan}`,
                gridRow: `span ${cell.layout.rowspan}`,
              }}
            >
              <CellComponent cell={cell} />
            </div>
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
