import React from 'react';
import { shallow } from 'enzyme';
import GridRenderer from '../../src/react';
import { CellComponent, model } from './utils';

describe('GridRenderer', () => {
  it('renders a grid correctly', () => {
    const wrapper = shallow(
      <GridRenderer model={model} cellComponent={CellComponent} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a table correctly', () => {
    const wrapper = shallow(
      <GridRenderer model={model} cellComponent={CellComponent} type="table" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('passes the `cellComponent` prop through correctly', () => {
    const wrapper = shallow(
      <GridRenderer model={model} cellComponent={CellComponent} />
    );
    expect(wrapper.find('CSSGrid').prop('cellComponent')).toEqual(
      CellComponent
    );
  });

  it('passes the children through correctly', () => {
    // The children should be a function as per the prop types
    const mock = jest.fn();
    const wrapper = shallow(<GridRenderer model={model}>{mock}</GridRenderer>);
    expect(wrapper.find('CSSGrid').prop('children')).toEqual(mock);
  });

  it('should allow custom props to be passed through to the grid component', () => {
    const wrapper = shallow(
      <GridRenderer
        className="my-custom-class"
        model={model}
        cellComponent={CellComponent}
      />
    );
    expect(wrapper.find('CSSGrid').prop('className')).toEqual(
      'my-custom-class'
    );
  });
});
