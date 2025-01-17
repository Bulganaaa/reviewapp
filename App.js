import React from 'react';
import Home from './screens/home';
import About from './screens/about';
import Login from './screens/login';
import Splash from './screens/splash';
import Signup from './screens/signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Splash" component={Splash}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

