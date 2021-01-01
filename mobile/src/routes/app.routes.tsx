import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from '../pages/Detail';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#F0F0F5' },
    }}
  >
    <App.Screen name="Detail" component={Detail} />
  </App.Navigator>
);

export default AppRoutes;
