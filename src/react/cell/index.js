import React from 'react';
import { CellWrapper, Img, ImageWrapper, ItemName } from './styles';

const Cell = ({ cell, children }) => {
  const { item, layout } = cell;
  const defaultVariant = item.variants
    ? item.variants.find(variant => variant.isDefault)
    : null;
  const image = defaultVariant ? defaultVariant.image : null;

  if (children) {
    return (
      <CellWrapper colSpan={layout.colspan} rowSpan={layout.rowspan}>
        {children}
      </CellWrapper>
    );
  }

  return (
    <CellWrapper colSpan={layout.colspan} rowSpan={layout.rowspan}>
      <ImageWrapper>
        <Img src={image && image.url} alt={image && image.alt} />
      </ImageWrapper>
      <ItemName>{item.name}</ItemName>
    </CellWrapper>
  );
};

export default Cell;
