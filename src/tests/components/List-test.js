import React from 'react';
import { mount } from 'enzyme';
import List from '../../Component/List';

const setup = props => mount(<List {...props} />);

const getMinProps = newProps => Object.assign({}, {
  address: '',
  area:'',
  name:''
}, newProps);

describe('Component: List', () => {
  it('renders without exploding using mount', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('renders parent-div', () => {
    const wrapper = setup(getMinProps());
    expect(wrapper.find('.parent-div').length).toEqual(1);
  });

  it('renders address', () => {
    const wrapper = setup(getMinProps());
    expect(wrapper.find('.address').length).toEqual(1);
  });

  it('renders address value', () => {
    const wrapper = setup(getMinProps({
      address:'test'
    }));
    expect(wrapper.find('.address').props().children[0]).toEqual('Address test');
  });

  it('renders area', () => {
    const wrapper = setup(getMinProps());
    expect(wrapper.find('.area').length).toEqual(1);
  });

  it('renders area value', () => {
    const wrapper = setup(getMinProps({
      area:'test'
    }));
    expect(wrapper.find('.area').props().children[0]).toEqual('Area test');
  });

  it('renders name', () => {
    const wrapper = setup(getMinProps({}));
    expect(wrapper.find('.name').length).toEqual(1);
  });

  it('renders name value', () => {
    const wrapper = setup(getMinProps({
      name:'test'
    }));
    expect(wrapper.find('.name').props().children[0]).toEqual('Name test');
  });

});


