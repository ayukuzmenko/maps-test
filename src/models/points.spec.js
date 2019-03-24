import { init } from '@rematch/core';
import { points } from './points';

describe('Points model', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('reducer: reoderPoints should do to add new point list to store', () => {
    const store = init({
      models: { points },
    });

    store.dispatch.points.reoderPoints([1, 2]);

    const pointsData = store.getState().points;
    expect(pointsData).toEqual([1, 2]);
  });
});
