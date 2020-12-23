import {
  applyMiddleware,
  compose,
  createStore,
  Store,
  StoreEnhancer,
} from 'redux'
import createSagaMiddleware from 'redux-saga'

import { persistStore } from 'redux-persist'
import persistReducers from './persistReducers'

import rootReducer from './modules/rootReducer'
// eslint-disable-next-line import/no-cycle
import rootSaga from './modules/rootSaga'


export interface ApplicationState {
  // auth: AuthState
}

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const enhancer: StoreEnhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware)

const store: Store = createStore(persistReducers(rootReducer), enhancer)

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { persistor, store }
