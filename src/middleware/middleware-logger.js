const middlewareLogger = store => next => action => {
  console.log('Originalstate: ', store.getState());
  console.log('Current Actions', action);
  next(action);
  console.log('New Updated State: ', store.getState());
};

export default middlewareLogger;
