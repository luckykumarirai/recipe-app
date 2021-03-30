import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {TextInput,Card,Button,Dialog,Paragraph } from 'react-native-paper';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

export default function SigninScreen({ navigation }) {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);
  
   function Signin(){
     firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setVisible(true) ;
        setError(error.message);
        console.log(error.message);

      });
   }

  return (
    <>
    <LinearGradient colors={['#f54e42', '#f5dd42']} style={{flex:1}}>
    <View style={{padding:30,marginTop:50}}>
    <Card style={styles.card}>
      <Card.Title style={{marginLeft:80}}title="Signin"/>
      <Card.Content>
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
        <Button  mode="contained" onPress={() =>Signin()} style={{marginTop:10,width:'100%'}} >
          Submit
        </Button>
      </Card.Actions>
    </Card.Content>
  </Card>
  {error==="The password is invalid or the user does not have a password." &&
        <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Paragraph>The email or password is invalid.</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    }
    {error==="The email address is badly formatted." || error==="There is no user record corresponding to this identifier. The user may have been deleted." &&
        <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Paragraph>The email or password is invalid.</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    }
  </View>
  </LinearGradient>
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
