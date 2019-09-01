import styled from 'styled-components';
import Image from '@crystallize/react-image';

export const cellClassName = 'crystallize-grid-renderer-cell';

export const CellWrapper = styled.div.attrs({ className: cellClassName })`
  display: flex;
  flex-direction: column;
  grid-column: span ${props => props.colspan};
  grid-row: span ${props => props.rowspan};
  background: white;
  padding: 15px;
`;

export const Img = styled(Image)`
  max-width: 100%;
  max-height: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 80%;
`;

export const ItemName = styled.span`
  text-align: center;
`;
