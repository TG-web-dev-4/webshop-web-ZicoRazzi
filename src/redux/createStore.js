import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import createSagaMiddle from 'redux-saga';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COM__ || compose;

const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk, sagaMiddleware, logger];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

export default store;
