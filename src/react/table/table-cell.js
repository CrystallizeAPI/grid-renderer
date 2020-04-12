import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({ cell, children }) => {
  const layout = cell.layout || { colspan: 1, rowspan: 1 };

  return (
    <td rowSpan={layout.rowspan} colSpan={layout.colspan}>
      {children}
    </td>
  );
};

TableCell.propTypes = {
  cell: PropTypes.object,
  children: PropTypes.any,
};

export default TableCell;
