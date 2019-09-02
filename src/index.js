import React from 'react';
import PropTypes from 'prop-types';
import Grid from './grid';
import Table from './table';

export { default as Grid } from './grid';
export { default as Table } from './table';
export { default as Cell } from './cell';
export { default as TableCell } from './table-cell';

const GridRenderer = ({ children, model, type = 'grid' }) => {
  const { rows } = model;
  if (!rows.length) return null;

  const Component = type === 'table' ? Table : Grid;
  return <Component rows={rows}>{children}</Component>;
};

GridRenderer.propTypes = {
  children: PropTypes.func,
  model: PropTypes.object,
  type: PropTypes.string
};

export default GridRenderer;
