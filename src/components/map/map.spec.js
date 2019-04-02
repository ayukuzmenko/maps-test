import React from 'react';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import points from '../../models/points';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import { Map } from './map';

const mockReady = jest.fn();

window.ymaps = {
  ready: mockReady,
};

const store = init({
  models: { points },
});
const mapContainer = mount(<Map />);

describe('Map component test', () => {
  it('Should render map', () => {
    expect(mapContainer.find('.containerMap').first()).toBeTruthy();
    expect(mockReady).toHaveBeenCalledTimes(1);
  });

  it('Add point to map', () => {
    const newPoint = {
      adress: 'Россия, Москва',
      coords: [55.753215, 37.622504],
      id: '1554114179293.4595',
    };

    const addPoint = jest.fn();
    const addPolyLine = jest.fn();
    mapContainer.instance().addPoint = addPoint;
    mapContainer.instance().addPolyLine = addPolyLine;
    mapContainer.instance()._map = {
      geoObjects: {
        removeAll: () => {},
      },
    };
    mapContainer.update();

    mapContainer.setProps(newPoint);
    expect(addPoint).toHaveBeenCalledTimes(1);
    expect(addPolyLine).toHaveBeenCalledTimes(1);
  });
});
