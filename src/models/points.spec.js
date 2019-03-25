import { init } from '@rematch/core';
import { points } from './points';

describe('Points model', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('reducer: reoderPoints should do to reorder points', () => {
    const store = init({
      models: { points },
    });

    store.dispatch.points.reoderPoints([1, 2]);

    const pointsData = store.getState().points;
    expect(pointsData).toEqual([1, 2]);
  });

  it('reducer: searchPoint should do to add new point list to store', async () => {
    const store = init({
      models: { points },
    });

    const payload = `Moscow`;

    await store.dispatch.points.searchPoint(payload);

    const pointsData = store.getState().points;
    console.log(points);
    expect(pointsData).toEqual();
  });
});
