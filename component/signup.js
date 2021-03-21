import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, IconButton,TextInput,Card,Button,Appbar } from 'react-native-paper';
import * as firebase  from 'firebase';

export default function SignupScreen({ navigation }) {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  function saveitem(){
    // console.log(name);
    const myitem=firebase.database().ref("users");
    myitem.push().set({
      name:name,
      email:email,
      password:password,
      time:Date.now(),
    })

  }

  return (
    <>
    <Appbar.Header>
        <Appbar.Action icon="menu"  onPress={() => navigation.openDrawer()}   />
        <Appbar.Content title="Recipe-app" />
      </Appbar.Header>

    <View style={{padding:30,marginTop:20}}>
    <Card style={styles.card}>
      <Card.Title style={{marginLeft:80}}title="Signup"/>
      <Card.Content>
      <TextInput
        style={{marginTop:10}}
        label="Name"
        type="text"
        variant="outlined"
        value={name}
        onChangeText={(name)=>setName(name)}
      />
      <TextInput
        style={{marginTop:10}}
        label="Email"
        type="text"
        variant="outlined"
        value={email}
        onChangeText={(email)=>setEmail(email)}
      />
      <TextInput
        style={{marginTop:10}}
        label="Password"
        type="password"
        variant="outlined"
        secureTextEntry={true}
        value={password}
        onChangeText={(password)=>{setPassword(password)}}

      />
      <Card.Actions>
        <Button  mode="contained" onPress={() => saveitem()} on style={{marginTop:10,width:250}} >
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
    backgroundColor:'#f4913b',
  },


});
