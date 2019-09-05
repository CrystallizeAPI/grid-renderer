# Grid Renderer

`crystallize/grid-renderer` is a package that makes it easy to render
Crystallize [grids][0] with React.

## Installation

```sh
npm install --save @crystallize/grid-renderer
# or
yarn add @crystallize/grid-renderer
```

## Usage

In order to use the grid renderer you'll need to have fetched your grid model.
This can be fetched fairly easily from [Crystallize's API][0] via GraphQL.

At the minimum you will need to fetch layout of each column and some properties
on the item. Your query might look something like this:

```graphql
query grid($id: Int!, $language: String!) {
  grid(id: $id, language: $language) {
    rows {
      columns {
        layout {
          rowspan
          colspan
        }
        item {
          name
        }
      }
    }
  }
}
```

### React

Import the `Grid` from the react module:

```js
import Grid from '@crystallize/grid-renderer/react';
```

Then, inside your component, render the `Grid`, passing through the grid model
as a prop. By default, the grid is rendered using CSS grid.

```js
return <Grid model={gridModel} />;
```

#### `type`

If you prefer to use a traditional `<table>` instead of CSS grid, you can do so
easily:

```js
return <Grid model={gridModel} type="table" />;
```

#### `cellComponent`

If you would like to use a custom cell component instead of the default grid or
table cell, you can pass it through as a prop.

```js
const MyCellComponent = ({ cell, children }) => {
  // item (product, etc) and layout (colspan, rowspan) are passed through in the cell prop.
  const { item, layout } = cell;
  return <div>{children}</div>;
};

return <Grid model={gridModel} cellComponent={MyCellComponent} />;
```

#### `renderContent`

If you would like to change how the content within the cells is rendered, you
can override it with the `renderContent` prop.

```js
const renderContent = cell => {
  const { item } = cell;
  return <h1>{item.name}</h1>;
};

return <Grid model={gridModel} renderContent={renderContent} />;
```

#### `children`

If you want full control over each of the cells, you can instead supply a
function as the children of the grid component. This will allow you to iterate
over each of the cells and mutate them as you please.

```js
import Grid, { Cell } from '@crystallize/grid-renderer/react';

const children = ({ cells }) => {
  return cells.map(cell => <Cell cell={cell} />);
};

return <Grid model={gridModel}>{children}</Grid>;
```

_Note:_ If using `<table>` the children will receive an array of `rows` instead
of `cells`, such as the following:

```js
import Grid, { TableCell } from '@crystallize/grid-renderer/react';

const children = ({ rows }) => {
  return rows.map(row => rows.columns.map(cell => <TableCell cell={cell} />));
};

return <Grid model={gridModel}>{children}</Grid>;
```

[0]: https://crystallize.com/api
