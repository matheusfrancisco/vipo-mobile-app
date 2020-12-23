import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'real2u',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  )

  return persistedReducer
}
