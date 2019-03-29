import React from 'react';
import { shallow } from 'enzyme';
import { Point } from './point';

describe('Point', () => {
  it('Add new point', () => {
    const item = { adress: 'Moscow' };
    const pointContainer = shallow(<Point item={item} />);
    expect(pointContainer).toMatchSnapshot();
    expect(
      pointContainer
        .find('span')
        .first()
        .text(),
    ).toEqual('Moscow');
  });
});
