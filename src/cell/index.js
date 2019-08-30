import React from 'react';
import { CellWrapper, Img, Footer, ItemName } from './styles';

const Cell = ({ colspan, rowspan, cell }) => {
  const defaultVariant = cell.variants
    ? cell.variants.find(variant => variant.isDefault)
    : null;
  const image = defaultVariant ? defaultVariant.image : null;

  return (
    <CellWrapper colspan={colspan} rowspan={rowspan}>
      <Img src={image && image.url} alt={image && image.alt} />
      <ItemName>{cell.name}</ItemName>
    </CellWrapper>
  );
};

export default Cell;
