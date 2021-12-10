import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Applications from '../pages/Applications';
import Chat from '../pages/Chat';

const Principal = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Principal.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#c4d3f2' },
      }}
      initialRouteName="Sign"
    >
      <Principal.Screen name="SignIn" component={SignIn} />
      <Principal.Screen name="SignUp" component={SignUp} />
      <Principal.Screen name="Dashboard" component={Dashboard} />
      <Principal.Screen name="Applications" component={Applications} />
      <Principal.Screen name="Chat" component={Chat} />
    </Principal.Navigator>
  </NavigationContainer>
);

export default Routes;
