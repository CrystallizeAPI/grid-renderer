import React from 'react';
import PropTypes from 'prop-types';
import Grid from './grid';
import Table from './table';

export { default as Cell } from './cell';
export { default as TableCell } from './table/table-cell';

const getTotalGridDimensions = rows => {
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
  renderContent,
  type = 'grid'
}) => {
  const { rows } = model;
  if (!rows.length) return null;

  const { totalColSpan } = getTotalGridDimensions(rows);

  const Component = type === 'table' ? Table : Grid;
  return (
    <Component
      cellComponent={cellComponent}
      renderContent={renderContent}
      rows={rows}
      totalColSpan={totalColSpan}
    >
      {children}
    </Component>
  );
};

GridRenderer.propTypes = {
  cellComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  children: PropTypes.func,
  model: PropTypes.object.isRequired,
  renderContent: PropTypes.func,
  type: PropTypes.string
};

export default GridRenderer;
