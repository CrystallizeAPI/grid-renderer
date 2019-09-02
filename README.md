# Grid Renderer

## Usage

Simply import `GridRenderer` from `@crystallize/grid-renderer`.

```js
import GridRenderer from '@crystallize/grid-renderer';
```

Then, inside your component, render the `GridRenderer`, passing through the grid
model.

```js
return <GridRenderer model={gridModel} />;
```

Or you can override the cells with your own custom components and
customisations.

```js
import { Grid, Cell } from '@crystallize/grid-renderer';

return (
  <GridRenderer model={gridModel}>
    {({ cells }) => {
      // You could return a custom component if you prefer, but here's an
      // example using the <Cell /> component:
      return cells.map(cell => (
        <Cell
          cell={cell}
          colSpan={cell.layout.colSpan}
          rowSpan={cell.layout.rowSpan}
        >
          <h2>{cell.item.name}</h2>
        </Cell>
      ));
    }}
  </GridRenderer>
);
```
