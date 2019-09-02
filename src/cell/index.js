import React from 'react';
import { CellWrapper, Img, ImageWrapper, ItemName } from './styles';

const Cell = ({ cell, children, colSpan, rowSpan }) => {
  const defaultVariant = cell.variants
    ? cell.variants.find(variant => variant.isDefault)
    : null;
  const image = defaultVariant ? defaultVariant.image : null;

  if (children) {
    return (
      <CellWrapper colSpan={colSpan} rowSpan={rowSpan}>
        {children}
      </CellWrapper>
    );
  }

  return (
    <CellWrapper colSpan={colSpan} rowSpan={rowSpan}>
      <ImageWrapper>
        <Img src={image && image.url} alt={image && image.alt} />
      </ImageWrapper>
      <ItemName>{cell.name}</ItemName>
    </CellWrapper>
  );
};

export default Cell;
