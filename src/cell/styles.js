import styled from 'styled-components';
import Image from '@crystallize/react-image';

export const cellClassName = 'crystallize-grid-renderer-cell';

export const CellWrapper = styled.div.attrs({ className: cellClassName })`
  display: flex;
  flex-direction: column;
  grid-column: span ${props => props.colspan};
  grid-row: span ${props => props.rowspan};
  background: white;
  min-height: 18rem;
`;

export const Img = styled(Image)`
  margin: 0 auto 10px;
  display: flex;
  height: 300px;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 0 auto;
  }
`;
export const ItemName = styled.span`
  text-align: center;
`;
