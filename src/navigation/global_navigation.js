import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/home_screen';
import LoginScreen from '../screens/login_screen';

const Stack = createNativeStackNavigator();

const GlobalNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Welcome Partner Wise",
            headerRight: () => (
              <Button title='Login' />
            ),
          }}
        />
        <Stack.Screen 
          name='Login'
          component = {LoginScreen}
        />
    </Stack.Navigator>
  );
}

export default GlobalNavigation;

