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

function cellComponent({ cell, totalColSpan }) {
  return (
    <div>
      {cell.item.name} ({totalColSpan})
    </div>
  );
}

ReactDOM.render(
  <div style={{ maxWidth: '800px', margin: '100px auto' }}>
    <h2>
      Using <b>cellComponent</b>
    </h2>
    <h3>CSS Grid</h3>
    <Module
      model={grid}
      cellComponent={cellComponent}
      style={{ background: 'red' }}
    />
    <h3>Table</h3>
    <Module
      model={grid}
      cellComponent={cellComponent}
      type="table"
      style={{ width: '100%' }}
    />
    <h2>
      Using <b>children function</b>
    </h2>
    <h3>CSS Grid</h3>
    <Module model={grid}>
      {({ cells }) => {
        return cells.map((cell) => (
          <div
            style={{
              gridColumn: `span ${cell.layout.colspan}`,
              gridRow: `span ${cell.layout.rowspan}`,
            }}
          >
            {cell.item.name}
          </div>
        ));
      }}
    </Module>
    <h3>Table</h3>
    <Module model={grid} type="table" style={{ width: '100%' }}>
      {({ rows }) => {
        return rows.map((row) => (
          <tr>
            {row.columns.map((cell) => (
              <td rowSpan={cell.layout.rowspan} colSpan={cell.layout.colspan}>
                {cell.item.name}
              </td>
            ))}
          </tr>
        ));
      }}
    </Module>
  </div>,
  document.getElementById('root')
);
