import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Module from '../src/react';

const grid = {
  rows: [
    {
      columns: [
        {
          layout: {
            colspan: 2,
            rowspan: 1,
          },
          item: {
            name: 'Item 1',
          },
        },
        {
          layout: {
            colspan: 2,
            rowspan: 1,
          },
          item: {
            name: 'Item 2',
          },
        },
      ],
    },
    {
      columns: [
        {
          layout: {
            colspan: 4,
            rowspan: 1,
          },
          item: {
            name: 'Item 3',
          },
        },
      ],
    },
  ],
};

function cellComponent({ cell }) {
  return <div>{cell.item.name}</div>;
}

ReactDOM.render(
  <div style={{ maxWidth: '800px', margin: '100px auto' }}>
    <h2>CSS Grid</h2>
    <Module model={grid} cellComponent={cellComponent} />
    <h2>Table</h2>
    <Module
      model={grid}
      cellComponent={cellComponent}
      type="table"
      style={{ width: '100%' }}
    />
  </div>,
  document.getElementById('root')
);
