import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Imports: Redux Root Reducer
import rootReducer from './modules/rootReducer';

// Imports: Redux Root Saga
import { rootSaga } from './modules/rootSaga';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    // createLogger(),
  ),
);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export {
  store,
}