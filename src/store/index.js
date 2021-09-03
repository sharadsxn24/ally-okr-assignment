import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers'

export default function configureAppStore(initialState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunkMiddleware),
    initialState,
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}
