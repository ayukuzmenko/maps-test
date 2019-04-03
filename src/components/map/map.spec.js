import React from 'react';
import { shallow } from 'enzyme';
import { Map } from './map';
import { shallowToJson } from 'enzyme-to-json';

const mockReady = jest.fn();

window.ymaps = {
  ready: mockReady,
};

const mapContainer = shallow(<Map />);

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

  it('Should match to snapshot', () => {
    expect(shallowToJson(mapContainer)).toMatchSnapshot();
  });
});
