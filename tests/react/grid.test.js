import React from 'react';
import { shallow } from 'enzyme';
import Grid from '../../src/grid';
import { CustomCellComponent, model } from '../utils';

const { rows } = model;

describe('Grid', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Grid rows={rows} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a Cell component for each cell', () => {
    const wrapper = shallow(<Grid rows={rows} />);
    const cells = wrapper.find('Cell');
    expect(cells).toHaveLength(3);
    expect(cells.first().prop('cell')).toEqual(rows[0].columns[0]);
  });

  describe('when the `cellComponent` prop is given', () => {
    it('renders the custom component for each cell', () => {
      const wrapper = shallow(
        <Grid cellComponent={CustomCellComponent} rows={rows} />
      );
      const cells = wrapper.find(CustomCellComponent);
      expect(cells).toHaveLength(3);
      expect(cells.first().prop('cell')).toEqual(rows[0].columns[0]);
    });
  });

  describe('when the `renderContent` prop is given', () => {
    it('calls the prop as a function for each cell', () => {
      const renderContent = jest.fn(cell => (
        <CustomCellComponent cell={cell} />
      ));
      const wrapper = shallow(
        <Grid renderContent={renderContent} rows={rows} />
      );
      expect(renderContent.mock.calls).toHaveLength(3);
      expect(wrapper.find(CustomCellComponent)).toHaveLength(3);
    });
  });
});
