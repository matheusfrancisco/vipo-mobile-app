import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Imports: Redux Root Reducer
import rootReducer from './modules/rootReducer';

// Imports: Redux Root Saga
import { rootSaga } from './modules/rootSaga';

import { ProfileState } from './modules/profile/types'

export interface ApplicationState {
  profile: ProfileState
}


const middlewares = [];

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(
   sagaMiddleware
  ),
);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export {
  store,
}