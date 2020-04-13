import React from 'react';
import PropTypes from 'prop-types';

import CSSGrid from './css-grid';
import Table from './table';

export { default as CSSGrid } from './css-grid';
export { default as Table } from './table';

const getTotalGridDimensions = (rows) => {
  const totalColSpan = rows[0].columns.reduce(
    (acc, col) => acc + col.layout.colspan,
    0
  );

  return { totalColSpan };
};

const GridRenderer = ({
  cellComponent,
  children,
  model,
  type = 'grid',
  ...props
}) => {
  if (!cellComponent && !children) {
    console.error(
      '@crystallize/grid-renderer: missing ´cellComponent` or children function'
    );
    return null;
  }

  const { rows } = model;
  if (!rows.length) return null;

  const { totalColSpan } = getTotalGridDimensions(rows);

  if (type === 'table') {
    return (
      <Table
        cellComponent={cellComponent}
        rows={rows}
        totalColSpan={totalColSpan}
        {...props}
      >
        {children}
      </Table>
    );
  }

  // Currently the data is only returned in a nested array of rows and
  // columns. To make use of CSS Grid we need a flat array of all of the
  // individual cells.
  const columns = rows.map((row) => row.columns);
  const cells = [].concat.apply([], columns);

  return (
    <CSSGrid
      cellComponent={cellComponent}
      cells={cells}
      totalColSpan={totalColSpan}
      {...props}
    >
      {children}
    </CSSGrid>
  );
};

GridRenderer.propTypes = {
  cellComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  children: PropTypes.func,
  model: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
  type: PropTypes.string,
};

export default GridRenderer;
