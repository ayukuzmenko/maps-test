export default store => next => action => {
  if (!action.generateId) return next(action);
  next({
    ...action,
    newPointId: (Date.now() + Math.random()).toString(),
  });
};
