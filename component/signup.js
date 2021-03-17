import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, IconButton,TextInput,Card,Button } from 'react-native-paper';
export default function SignupScreen({ navigation }) {

  return (
    <View style={{padding:30,marginTop:20}}>
    <Card style={styles.card}>
      <Card.Title style={{marginLeft:80}}title="Signup"/>
      <Card.Content>
      <TextInput
        style={{marginTop:10}}
        label="Name"
        type="text"
        variant="outlined"
      />
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
        <Button  mode="contained"  style={{marginTop:10,width:250}} >
          Submit
        </Button>
      </Card.Actions>
    </Card.Content>
</Card>
  </View>
  );
}

const styles = StyleSheet.create({
  card:{
    marginTop:40,
    padding:5,
    backgroundColor:'#f4913b',
  },


});
