import styled from 'styled-components';

export const gridClassName = 'crystallize-grid-renderer-grid';

export const GridWrapper = styled.div.attrs({ className: gridClassName })`
  display: grid;
  grid-template-columns: repeat(${props => props.numberOfColumns}, 1fr);
  grid-template-rows: repeat(${props => props.numberOfRows}, 1fr);
  grid-gap: 1rem;
`;
