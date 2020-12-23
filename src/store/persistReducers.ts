import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'vipo',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  )

  return persistedReducer
}
