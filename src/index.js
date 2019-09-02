import React from 'react';
import PropTypes from 'prop-types';
import Grid from './grid';
import Table from './table';

const getTotalGridDimensions = rows => {
  return rows[0].columns.reduce(
    (acc, col) => {
      return {
        totalColSpan: acc.totalColSpan + col.layout.colspan,
        totalRowSpan: acc.totalRowSpan + col.layout.rowspan
      };
    },
    { totalColSpan: 0, totalRowSpan: 0 }
  );
};

const GridRenderer = ({ children, model, type = 'grid' }) => {
  const { rows } = model;
  if (!rows.length) return null;

  const { totalColSpan, totalRowSpan } = getTotalGridDimensions(rows);

  if (type === 'table') {
    return (
      <Table
        rows={rows}
        totalColSpan={totalColSpan}
        totalRowSpan={totalRowSpan}
      />
    );
  }

  // Currently the data is only returned in a nested array of rows and
  // columns. To make use of CSS Grid we need a flat array of all of the
  // individual cells.
  const columns = rows.map(row => row.columns);
  const cells = [].concat.apply([], columns);

  return (
    <Grid cells={cells} totalColSpan={totalColSpan} totalRowSpan={totalRowSpan}>
      {children}
    </Grid>
  );
};

GridRenderer.propTypes = {
  children: PropTypes.func,
  model: PropTypes.object,
  type: PropTypes.string
};

export default GridRenderer;
