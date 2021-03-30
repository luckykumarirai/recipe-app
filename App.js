import React ,{useEffect} from 'react';
import Drawers from './component/drawer';
import {firebaseConfig} from './config';
import firebase from 'firebase/app';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './component/signup';
import SigninScreen from './component/login';

!firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();

// const mystack=createStackNavigator({
//   Signup:SignupScreen,
//   Signin:SigninScreen,
  
// })
export default function App() {
   return (
     <>
       <Drawers/>
      </>
  );
}
