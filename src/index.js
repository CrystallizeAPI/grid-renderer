import React from 'react';
import PropTypes from 'prop-types';
import Grid from './grid';
import Table from './table';

export { default as Grid } from './grid';
export { default as Table } from './table';
export { default as Cell } from './cell';
export { default as TableCell } from './table/table-cell';

const GridRenderer = ({
  cellComponent,
  children,
  model,
  renderContent,
  type = 'grid'
}) => {
  const { rows } = model;
  if (!rows.length) return null;

  const Component = type === 'table' ? Table : Grid;
  return (
    <Component
      cellComponent={cellComponent}
      renderContent={renderContent}
      rows={rows}
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
