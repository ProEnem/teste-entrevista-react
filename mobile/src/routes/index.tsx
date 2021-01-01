import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useSelector } from 'react-redux';
import { IState } from '../store';
import { IAuthState } from '../store/modules/auth/types';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { token } = useSelector<IState, IAuthState>(state => state.auth);

  return token ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
