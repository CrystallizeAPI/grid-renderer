import styled from 'styled-components';
import Image from '@crystallize/react-image';

export const cellClassName = 'crystallize-grid-renderer-cell';

export const CellWrapper = styled.div.attrs({ className: cellClassName })`
  display: flex;
  flex-direction: column;
  grid-column: span ${props => props.colSpan};
  grid-row: span ${props => props.rowSpan};
  background: white;
`;

export const Img = styled(Image)`
  max-width: 200px;
  max-height: 200px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ItemName = styled.span`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 1rem;
`;
