import React from 'react';
import { shallow } from 'enzyme';
import GridRenderer from '../../src/react';
import { CustomCellComponent, model } from './utils';

describe('GridRenderer', () => {
  it('renders a grid correctly', () => {
    const wrapper = shallow(<GridRenderer model={model} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a table correctly', () => {
    const wrapper = shallow(<GridRenderer model={model} type="table" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('passes the `cellComponent` prop through correctly', () => {
    const wrapper = shallow(
      <GridRenderer model={model} cellComponent={CustomCellComponent} />
    );
    expect(wrapper.find('Grid').prop('cellComponent')).toEqual(
      CustomCellComponent
    );
  });

  it('passes the `renderCellContent` prop through correctly', () => {
    const mock = jest.fn();
    const wrapper = shallow(
      <GridRenderer model={model} renderCellContent={mock} />
    );
    expect(wrapper.find('Grid').prop('renderCellContent')).toEqual(mock);
  });

  it('passes the children through correctly', () => {
    // The children should be a function as per the prop types
    const mock = jest.fn();
    const wrapper = shallow(<GridRenderer model={model}>{mock}</GridRenderer>);
    expect(wrapper.find('Grid').prop('children')).toEqual(mock);
  });

  it('should allow custom props to be passed through to the grid component', () => {
    const wrapper = shallow(
      <GridRenderer className="my-custom-class" model={model} />
    );
    expect(wrapper.find('Grid').prop('className')).toEqual('my-custom-class');
  });
});
