import { init } from '@rematch/core';
import points from './points';

describe('Points model', () => {
  it('reducer: addNewPoint should add new point to store', () => {
    const store = init({
      models: { points },
    });

    const mockPayload = {
      newPointId: 1,
      coords: [1, 2],
      adress: 'adress',
    };

    store.dispatch.points.addNewPoint(mockPayload);

    const pointsData = store.getState().points;
    expect(pointsData).toEqual([
      {
        id: 1,
        coords: [1, 2],
        adress: 'adress',
      },
    ]);
  });

  it('reducer: replacePoint should replace point', () => {
    const store = init({
      models: { points },
    });

    const mockPayload = {
      newPointId: 1,
      coords: [1, 2],
      adress: 'adress',
    };

    store.dispatch.points.deletePoint(1);

    store.dispatch.points.addNewPoint(mockPayload);

    const mockPayload2 = {
      arrIndex: 0,
      coords: [2, 2],
      adress: 'adress2',
    };
    store.dispatch.points.replacePoint(mockPayload2);

    const pointsData = store.getState().points;

    expect(pointsData).toEqual([
      {
        id: 1,
        coords: [2, 2],
        adress: 'adress2',
      },
    ]);
  });

  it('reducer: reoderPoints should reorder points', () => {
    const store = init({
      models: { points },
    });

    store.dispatch.points.reoderPoints([1, 2]);

    const pointsData = store.getState().points;
    expect(pointsData).toEqual([1, 2]);
  });

  it('reducer: deletePoint should delete point from store', () => {
    const store = init({
      models: { points },
    });

    const mockPayload = {
      newPointId: 1,
      coords: [1, 2],
      adress: 'adress',
    };

    store.dispatch.points.addNewPoint(mockPayload);
    store.dispatch.points.deletePoint(1);

    const pointsData = store.getState().points;
    expect(pointsData).toEqual([]);
  });
});
