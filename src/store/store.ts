import AsyncStorage from '@react-native-async-storage/async-storage';;
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import authReducer from './auth/auth.reducer';
import authSaga from './auth/auth.saga';

const authPersistConfig = {
  key: '@prodigio-educaocao',
  storage: AsyncStorage,
  whitelist: ['auth']
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistReducer(authPersistConfig,
    combineReducers({
      auth: authReducer,
    })
  ),
  applyMiddleware(sagaMiddleware),
);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };

sagaMiddleware.run(authSaga);