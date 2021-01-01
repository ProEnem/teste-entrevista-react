import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import { IAuthState } from './modules/auth/types';
import { IUserState } from './modules/user/types';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export interface IState {
  auth: IAuthState;
  user: IUserState;
}

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
