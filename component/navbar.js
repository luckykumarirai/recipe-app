import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';


export default function Navbar ({ navigation }) {
  const _goBack = () => console.log('Went back');
    return(
      <Appbar.Header>
        <Appbar.Action icon="menu"  />
        <Appbar.Content title="Recipe-app" />
      </Appbar.Header>
    );
}
