import React from 'react';
import PropTypes from 'prop-types';

const Table = ({
  cellComponent,
  children,
  rows,
  totalColSpan = 4,
  ...props
}) => {
  const CellComponent = cellComponent;

  return (
    <table className="crystallize-grid crystallize-grid--table" {...props}>
      <thead>
        <tr>
          {new Array(totalColSpan).fill(0).map((v, i) => (
            <th key={`th-${i}`} />
          ))}
        </tr>
      </thead>
      <tbody>
        {children
          ? children({ rows, totalColSpan })
          : rows.map((row, i) => {
              return (
                <tr key={`row-${i}`}>
                  {row.columns.map((col, j) => (
                    <td
                      key={`cell-${i}-${j}`}
                      className="crystallize-grid__cell"
                      rowSpan={col.layout.rowspan}
                      colSpan={col.layout.colspan}
                    >
                      <CellComponent cell={col} totalColSpan={totalColSpan} />
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
  rows: PropTypes.arrayOf(PropTypes.object),
  totalColSpan: PropTypes.number,
};

export default Table;
