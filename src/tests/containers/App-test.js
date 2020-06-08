import React from 'react';
import { mount } from 'enzyme';
import App from '../../containers/App';

const setup = props => mount(<App {...props} />);

const getMinProps = newProps => Object.assign({}, {
  listOfRestaurants:[],
  isFetchingList:false,
  dispatch: jest.fn(),
}, newProps);

describe('Component: App', () => {
  describe('essential component rendering', () => {
    const props = getMinProps();
    const wrapper = setup(props);

    it('renders without exploding using mount', () => {
      expect(wrapper.length).toEqual(1);
    });
  });

  it('renders parent-div', () => {
    const wrapper = setup(getMinProps());
    expect(wrapper.find('.parent-div').length).toEqual(1);
  });

  it('renders find-input', () => {
    const wrapper = setup(getMinProps());
    expect(wrapper.find('.find-input').length).toEqual(1);
  });

  it('renders restaurant-button', () => {
    const wrapper = setup(getMinProps());
    expect(wrapper.find('.restaurant-button').length).toEqual(1);
  });

  it('Pass correct props to restaurant button', () => {
    const wrapper = setup(getMinProps());
    expect(wrapper.find('.restaurant-button').props()).toMatchObject({
      className: 'restaurant-button',
      type: 'submit',
      onClick: expect.any(Function),
    });
  });

  it('renders Find Restaurant text', () => {
    const wrapper = setup(getMinProps());
    expect(wrapper.find('.restaurant-button').props().children[0]).toEqual('Find Restaurant');
  });

  it('renders filter-input', () => {
    const wrapper = setup(getMinProps());
    expect(wrapper.find('.filter-input').length).toEqual(1);
  });

  it('Pass correct props to restaurant button', () => {
    const wrapper = setup(getMinProps());
    expect(wrapper.find('.filter-button').props()).toMatchObject({
      className: 'filter-button',
      type: 'submit',
      onClick: expect.any(Function),
    });
  });

  it('renders Filter Restaurants text', () => {
    const wrapper = setup(getMinProps());
    expect(wrapper.find('.filter-button').props().children[0]).toEqual('Filter Restaurants');
  });
});