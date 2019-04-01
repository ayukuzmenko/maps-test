import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import { PointList } from './point-list';
import { init } from '@rematch/core';
import points from '../../models/points';
import { Provider } from 'react-redux';

const store = init({
  models: { points },
});

describe('Serch bar component test', () => {
  it('Should match to snapshot', () => {
    const props = {
      points: [
        {
          adress: 'Россия, Москва',
          coords: [55.753215, 37.622504],
          id: '1554114179293.4595',
        },
      ],
    };

    const searchBarContainer = mount(
      <Provider store={store}>
        <PointList {...props} />
      </Provider>,
    );

    expect(mountToJson(searchBarContainer)).toMatchSnapshot();
  });
});
