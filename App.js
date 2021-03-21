import React ,{useEffect} from 'react';
import Drawers from './component/drawer';
import * as firebase  from 'firebase';
import {firebaseConfig} from './config';

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default function App() {
   return (
     <>
       <Drawers/>
      </>
  );
}
