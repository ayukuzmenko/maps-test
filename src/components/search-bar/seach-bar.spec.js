import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { SearchBar } from './search-bar';

window.ymaps = {
  ready: jest.fn(),
};

describe('Serch bar component test', () => {
  it('Should match to snapshot', () => {
    const searchBarContainer = shallow(<SearchBar />);

    expect(shallowToJson(searchBarContainer)).toMatchSnapshot();
  });
});
