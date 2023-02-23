# Deprecation Notice

This package has been deprecated and is no longer maintained. It has been moved to a new repository and is now part of a larger project. Please update your dependencies to use the new package instead.

New package repository: https://github.com/CrystallizeAPI/reactjs-components

Thank you for using this package!

---

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
This can be fetched fairly easily from [Crystallize's API][1] via GraphQL.

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

Import the `GridRenderer` from the react module:

```js
import Grid from '@crystallize/grid-renderer/react';
```

Then, inside your component, render the `Grid`, passing through the grid model
as a prop. By default, the grid is rendered using [CSS grid][2].

```js
return (
  <Grid
    model={gridModel}
    cellComponent={({ cell }) => <div>{cell.item.name}</div>}
  />
);
```

#### `type`

If you prefer to use a traditional `<table>` instead of CSS grid, you can do so
easily:

```js
return (
  <Grid
    model={gridModel}
    type="table"
    cellComponent={({ cell }) => <div>{cell.item.name}</div>}
  />
);
```

#### `children`

If you want full control over each of the cells, you can instead supply a
function as the children of the grid component. This will allow you to iterate
over each of the cells and mutate them as you please.

```js
import Grid from '@crystallize/grid-renderer/react';

const children = ({ cells }) => {
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
};

return <Grid model={gridModel}>{children}</Grid>;
```

_Note:_ If using `<table>` the children will receive an array of `rows` instead
of `cells`, such as the following:

```js
import Grid from '@crystallize/grid-renderer/react';

const children = ({ rows }) => {
  return rows.map((row) => (
    <tr>
      {row.columns.map((cell) => (
        <td rowSpan={cell.layout.rowspan} colSpan={cell.layout.colspan}>
          {cell.item.name}
        </td>
      ))}
    </tr>
  ));
};

return (
  <Grid model={gridModel} type="table">
    {children}
  </Grid>
);
```

[0]: https://crystallize.com/learn/user-guides/pim/grids
[1]:
  https://crystallize.com/learn/developer-guides/catalogue-api/querying-the-catalogue
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/grid
