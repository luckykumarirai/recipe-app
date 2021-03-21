import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import {TextInput,Card,Button,Appbar } from 'react-native-paper';
export default function SignupScreen({ navigation }) {

  return (
    <>
     <Appbar.Header>
        <Appbar.Action icon="menu"  onPress={() => navigation.openDrawer()}   />
        <Appbar.Content title="Recipe-app" />
      </Appbar.Header>
    <View style={{padding:30,marginTop:50}}>
    <Card style={styles.card}>
      <Card.Title style={{marginLeft:80}}title="Signin"/>
      <Card.Content>
      <TextInput
        style={{marginTop:10}}
        label="Email"
        type="text"
        variant="outlined"
      />
      <TextInput
        style={{marginTop:10}}
        label="Password"
        type="password"
        variant="outlined"
        secureTextEntry={true}
      />
      <Card.Actions>
        <Button  mode="contained" onPress={() => navigation.navigate('List of Recipe')} style={{marginTop:10,width:250}} >
          Submit
        </Button>
      </Card.Actions>
    </Card.Content>
</Card>
  </View>
  </>
  );
}

const styles = StyleSheet.create({
  card:{
    marginTop:40,
    padding:5,
  backgroundColor: '#04b8fb',
  },

});
