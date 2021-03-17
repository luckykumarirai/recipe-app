import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from './signup';
import SigninScreen from './login';
import HomeScreen from './home';
import Landingpage from './landingpage';
import  Recipeimage from './recipeimage';

const Drawer = createDrawerNavigator();

export default function Drawers() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Landingpage} />
        <Drawer.Screen name="Signup" component={SignupScreen} />
        <Drawer.Screen name="Signin" component={SigninScreen} />
        <Drawer.Screen name="Recipe" component={Recipeimage} />
        <Drawer.Screen name="List of Recipe" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
