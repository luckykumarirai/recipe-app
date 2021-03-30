import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-paper";
import HomeScreen from './home';
import Recipelist from './recipelist';
import Recipedetails from "./recipedetails";
import Addrecipe from './addrecipe';
import SignupScreen from "./signup";
import SigninScreen from "./login";

const Stack = createStackNavigator();

const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerTitleStyle: {
        fontWeight:500,
        
        },
    }}>
        <Stack.Screen name="Recipe App" component={HomeScreen} options={{
        headerLeft:()=>(
          <Button icon="menu"  onPress={()=>navigation.toggleDrawer()} color="#fff" />
        ),
        }}/>
        <Stack.Screen name="Recipe List" component={Recipelist} options={{
        headerLeft:()=>(
          <Button icon="menu" onPress={()=>navigation.toggleDrawer()} color="#fff" />
        ),
        }}/>
        <Stack.Screen name="Signin" component={SigninScreen} options={{
        headerLeft:()=>(
          <Button icon="menu" onPress={()=>navigation.toggleDrawer()} color="#fff" />
        ),
        }}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{
        headerLeft:()=>(
          <Button icon="menu" onPress={()=>navigation.toggleDrawer()} color="#fff" />
        ),
        }}/>
        <Stack.Screen name="Add Recipe" component={Addrecipe} options={{
        headerLeft:()=>(
          <Button icon="menu" onPress={()=>navigation.toggleDrawer()} color="black" />
        ),
        }}/>
        <Stack.Screen name="Recipe Details" component={Recipedetails} options={{
        headerLeft:()=>(
          <Button icon="menu" onPress={()=>navigation.toggleDrawer()} color="#fff" />
        ),
        }}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator };
