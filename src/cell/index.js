import React from 'react';
import { CellWrapper, Img, ImageWrapper, ItemName } from './styles';

const Cell = ({ colSpan, rowSpan, cell }) => {
  const defaultVariant = cell.variants
    ? cell.variants.find(variant => variant.isDefault)
    : null;
  const image = defaultVariant ? defaultVariant.image : null;

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
