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

    expect(
      pointContainer
        .find('button')
        .first()
        .text(),
    ).toEqual('x');
  });

  it('Delete a point from list', () => {
    const mockDeletePoint = jest.fn();
    const props = {
      item: { adress: 'Moscow' },
      deletePoint: mockDeletePoint,
    };

    const pointContainer = shallow(<Point {...props} />);
    pointContainer
      .find('button')
      .first()
      .simulate('click');

    expect(mockDeletePoint).toHaveBeenCalledTimes(1);
  });
});
