import styled from 'styled-components';

export const gridClassName = 'crystallize-grid-renderer-grid';

export const CssGrid = styled.div.attrs({ className: gridClassName })`
  display: grid;
  grid-template-columns: repeat(${props => props.totalColSpan}, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 1rem;

  @media screen and (max-width: 1280px) {
    grid-auto-rows: 200px;
  }

  @media screen and (max-width: 1024px) {
    grid-auto-rows: 150px;
  }

  @media screen and (max-width: 800px) {
    grid-auto-rows: 100px;
  }
`;
