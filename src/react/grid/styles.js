import styled from 'styled-components';
import { responsive } from '../styles';

export const gridClassName = 'crystallize-grid-renderer-grid';

export const CssGrid = styled.div.attrs({ className: gridClassName })`
  display: grid;
  grid-template-columns: repeat(${props => props.totalColSpan}, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 1rem;

  @media screen and (max-width: ${responsive.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${responsive.xs}px) {
    grid-template-columns: 1fr;
  }
`;
