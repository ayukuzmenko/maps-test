import React from 'react';
import { shallow } from 'enzyme';
import Point from './point';

describe('Point', () => {
  it('Add new point', () => {
    const point = shallow(<Point item={{ adress: 'Moscow' }} />);
    console.log(point);
    expect(point.text()).toEqual('Moscow');
  });
});
