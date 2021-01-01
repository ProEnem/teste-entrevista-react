import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

import Routes from './routes';

const src: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#F0F0F5" />
        <View style={{ backgroundColor: '#F0F0F5', flex: 1 }}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default src;
