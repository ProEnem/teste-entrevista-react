import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useAppSelector} from '../hooks/redux';

import LoginRoutes from './login.routes';
import AppRoutes from './app.routes';

function Routes() {
  const auth = useAppSelector(state => state.auth);

  return (
    <NavigationContainer>
      {auth.token ? <AppRoutes /> : <LoginRoutes />}
    </NavigationContainer>
  );
}

export default Routes;
