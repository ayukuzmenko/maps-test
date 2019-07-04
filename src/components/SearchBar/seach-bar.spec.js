import React from './node_modules/react';
import { shallow } from './node_modules/enzyme';
import { shallowToJson } from './node_modules/enzyme-to-json';
import { SearchBar } from '.';

window.ymaps = {
  ready: jest.fn(),
};

describe('Serch bar component test', () => {
  it('Should match to snapshot', () => {
    const searchBarContainer = shallow(<SearchBar />);

    expect(shallowToJson(searchBarContainer)).toMatchSnapshot();
  });
});
