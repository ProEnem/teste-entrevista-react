import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar, LogBox } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';

import Routes from './routes';

import { ThemeProvider } from 'styled-components';
import theme from './theme';


LogBox.ignoreLogs([
  'VirtualizedLists should',
]);

 const App: React.FC = () => {
   return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle="dark-content" backgroundColor={theme.colors.red} />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
   );
 };

 export default App;
