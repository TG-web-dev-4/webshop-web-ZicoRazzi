import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

<<<<<<< HEAD
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COM__ || compose;

const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk, sagaMiddleware, logger];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);
=======
export const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
>>>>>>> parent of f05e4a8 (redux-saga)

export default store;
