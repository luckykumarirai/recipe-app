import React,{useState} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Button} from 'react-native-paper';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { MainStackNavigator } from './navbar';
import { View,StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

export default function Drawers() {

  const [email, setEmail] = useState("");

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        setEmail(user.email);
    } else {
        setEmail("");
    }
  });

  function logout(){
    firebase.auth().signOut()
    .catch(error=>{
      console.log(error);
    });
  }

  function CustomDrawerContent1({navigation}) {
    return (
      <>
        <View style={styles.container}>
          <Button style={{color:'black'}} icon="home-outline" onPress={() => {navigation.navigate('Recipe App')}}>Home</Button>
          <Button icon="format-list-checkbox" onPress={() => {navigation.navigate('Recipe List')}}>Recipe List</Button>
          <Button icon="playlist-plus" onPress={() => {navigation.navigate('Add Recipe')}}>Add Recipe</Button>
          <Button icon="email-outline">{email}</Button>
          <Button icon="logout" onPress={() => logout()}>Logout</Button>
        </View>
      </>
    );
  }

  function CustomDrawerContent2({navigation}) {
    return (
      <>
        <View style={styles.container}>
        <Button icon="home-outline" onPress={() => {navigation.navigate('Recipe App')}}>Home</Button>
        <Button icon="format-list-checkbox" onPress={() => {navigation.navigate('Recipe List')}}>Recipe List</Button>
        <Button icon="login" onPress={() => {navigation.navigate('Signin')}}>Login</Button>
        <Button icon="account-plus-outline" onPress={() => {navigation.navigate('Signup')}}>Sign Up</Button>
        </View>
      </>
    );
  }

  return (
    <>
    {email &&
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent1 {...props} />}>
          <Drawer.Screen name="Home" component={MainStackNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    }

    {!email &&
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent2 {...props} />}>
          <Drawer.Screen name="Home" component={MainStackNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    }
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    padding:'2%',
  },
});
