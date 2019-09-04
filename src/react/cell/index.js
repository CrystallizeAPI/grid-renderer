import React from 'react';
import { CellWrapper, Img, ImageWrapper, ItemName } from './styles';

const Cell = ({ cell, children }) => {
  const { item, layout } = cell;
  const defaultVariant = item.variants
    ? item.variants.find(variant => variant.isDefault)
    : null;
  const image = defaultVariant ? defaultVariant.image : null;

  return (
    <CellWrapper
      className="crystallize-grid-cell"
      rowSpan={layout.rowspan}
      colSpan={layout.colspan}
    >
      {children ? (
        children
      ) : (
        <>
          <ImageWrapper className="crystallize-grid-image-wrapper">
            <Img
              className="crystallize-grid-image"
              src={image && image.url}
              alt={image && image.alt}
            />
          </ImageWrapper>

          <ItemName className="crystallize-grid-item-name">
            {item.name}
          </ItemName>
        </>
      )}
    </CellWrapper>
  );
};

export default Cell;
