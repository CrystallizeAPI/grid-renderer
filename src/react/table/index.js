import React from 'react';
import PropTypes from 'prop-types';

import TableCell from './table-cell';

const Table = ({
  cellComponent,
  children,
  renderCellContent,
  rows,
  totalColSpan = 4,
  ...props
}) => {
  const CellComponent = cellComponent || TableCell;

  return (
    <table {...props}>
      <thead>
        <tr>
          {new Array(totalColSpan).fill(0).map((v, i) => (
            <th key={`th-${i}`} />
          ))}
        </tr>
      </thead>
      <tbody>
        {children
          ? children({ rows })
          : rows.map((row, i) => {
              return (
                <tr key={`row-${i}`}>
                  {row.columns.map((col, j) => (
                    <td
                      key={`cell-${i}-${j}`}
                      rowSpan={col.layout.rowspan}
                      colSpan={col.layout.colspan}
                    >
                      <CellComponent cell={col} />
                    </td>
                  ))}
                </tr>
              );
            })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  cellComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  children: PropTypes.func,
  renderCellContent: PropTypes.func,
  rows: PropTypes.arrayOf(PropTypes.object),
  totalColSpan: PropTypes.number,
};

export default Table;
