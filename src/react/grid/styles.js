import styled from 'styled-components';

export const gridClassName = 'crystallize-grid-renderer-grid';

export const CssGrid = styled.div.attrs({ className: gridClassName })`
  display: grid;
  grid-template-columns: repeat(${props => props.numberOfColumns}, 1fr);
  grid-template-rows: repeat(${props => props.numberOfRows}, 400px);
  grid-gap: 1rem;

  @media screen and (max-width: 1280px) {
    grid-template-rows: repeat(${props => props.numberOfRows}, 300px);
  }

  @media screen and (max-width: 1024px) {
    grid-template-rows: repeat(${props => props.numberOfRows}, 250px);
  }

  @media screen and (max-width: 800px) {
    grid-template-rows: repeat(${props => props.numberOfRows}, 200px);
  }
`;
