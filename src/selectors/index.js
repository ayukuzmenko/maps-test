import { createSelector } from 'reselect';

export const pointsListSelector = state => state.points;

export const pointsSelector = createSelector(
  pointsListSelector,
  pointsList => {
    return pointsList.toArray();
  },
);
