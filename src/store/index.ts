import createSagaMiddleware from "redux-saga";
import {createLogger} from "redux-logger";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

import {rootSaga} from "./modules/rootSaga";
import {allReducer} from "./modules/allReducers";
import active from "../../active.env"
import AsyncStorage from "@react-native-community/async-storage";

/**
 * Use this instead storage of reduxPersist
 *
 */
// import { reduxPersistStorage } from '@utils'
// const persistConfig = {
//     ...
//     storage: reduxPersistStorage
//   }
const devMode = __DEV__;
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({serializableCheck: false}),
  sagaMiddleware,
];

if (active === `dev`) { 
  const logger = createLogger({logger:console})
  //#TODO see how we reset the local storage when we had in dev mode
  //#TODO for instance when we needed to reset uncommented the line 30
  //AsyncStorage.clear().then(() => console.log('Cleared'))
  
  middleware.push(logger);
}

const storeConfig = () => {
  const store = configureStore({
    reducer: allReducer,
    devTools: devMode,
    middleware,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
export const store = storeConfig();