import React from 'react';
import { shallow } from 'enzyme';
import PhotoSearch from './PhotoSearch';
import SearchForm from './SearchForm';

it('renders without crashing', () => {
  shallow(<PhotoSearch />);
});

it('should render a section', () => {
  const wrapper = shallow(<PhotoSearch />);
  expect(wrapper).toHaveDisplayName('section');
});

it('should render a SearchForm', () => {
  const wrapper = shallow(<PhotoSearch />);
  expect(wrapper.find(SearchForm)).toExist();
});

it('should pass the search method to SearchForm as a prop', () => {
  const wrapper = shallow(<PhotoSearch />);
  expect(wrapper.find(SearchForm)).toHaveProp('submit', wrapper.instance().search);
});