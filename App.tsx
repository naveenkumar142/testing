import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import FullScreenImage from './FullScreenImage';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Header">
        <Stack.Screen
          name="Header"
          component={Header}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FullScreenImage"
          component={FullScreenImage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
