import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ cell, children }) => {
  const layout = cell.layout || { colspan: 1, rowspan: 1 };

  return (
    <div
      className="crystallize-grid-cell"
      style={{
        'grid-column': `span ${layout.colSpan}`,
        'grid-row': `span ${layout.rowSpan}`,
      }}
    >
      {children}
    </div>
  );
};

Cell.propTypes = {
  cell: PropTypes.object,
  children: PropTypes.any,
};

export default Cell;
