import styled from 'styled-components';
import Image from '@crystallize/react-image';

export const CellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-column: span ${props => props.colSpan};
  grid-row: span ${props => props.rowSpan};
  background: white;
`;

export const Img = styled(Image)`
  max-width: 50%;
  max-height: 50%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ItemName = styled.h2`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 1rem;
  margin: 0;
`;
