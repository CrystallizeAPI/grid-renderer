import React from 'react';
import { shallow } from 'enzyme';
import Grid from '../../src/react/grid';
import { CustomCellComponent, model, toCells } from './utils';

const { rows } = model;
const cells = toCells(rows);

describe('Grid', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Grid cells={cells} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a Cell component for each cell', () => {
    const wrapper = shallow(<Grid cells={cells} />);
    const cellComponents = wrapper.find('Cell');
    expect(cellComponents).toHaveLength(3);
    expect(cellComponents.first().prop('cell')).toEqual(rows[0].columns[0]);
  });

  describe('when the `cellComponent` prop is given', () => {
    it('renders the custom component for each cell', () => {
      const wrapper = shallow(
        <Grid cellComponent={CustomCellComponent} cells={cells} />
      );
      const cellComponents = wrapper.find(CustomCellComponent);
      expect(cellComponents).toHaveLength(3);
      expect(cellComponents.first().prop('cell')).toEqual(rows[0].columns[0]);
    });
  });

  describe('when the `renderCellContent` prop is given', () => {
    it('calls the prop as a function for each cell', () => {
      const renderCellContent = jest.fn(cell => (
        <CustomCellComponent cell={cell} />
      ));
      const wrapper = shallow(
        <Grid renderCellContent={renderCellContent} cells={cells} />
      );
      expect(renderCellContent.mock.calls).toHaveLength(3);
      expect(wrapper.find(CustomCellComponent)).toHaveLength(3);
    });
  });
});
