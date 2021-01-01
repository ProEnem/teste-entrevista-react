import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from './styles/global';

import history from './services/history';
import { store, persistor } from './store';

import Routes from './routes';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
