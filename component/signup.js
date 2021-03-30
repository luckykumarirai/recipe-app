import React, { useState,useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {  Paragraph,Dialog,TextInput,Card,Button,HelperText} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

export default function SignupScreen({ navigation }) {
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [error,setError]=useState('');
   const [visible, setVisible] = React.useState(false);
   const hideDialog = () => setVisible(false);
   function saveitem(){
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
        const myitem=firebase.database().ref('user');
           myitem.push().set({
           name:name,
           email:email,
           password:password,
           time:Date.now(),
       });
    })
    .catch(error=>{
      setVisible(true) ;
      console.log(error.message);
      setError(error.message);
    })
  }
  return (
    <>
    <LinearGradient colors={['#f54e42', '#f5dd42']} style={styles.container}>
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
      {error==="The email address is badly formatted." &&
        <HelperText type="error">
            {error}
        </HelperText>
      }
      <TextInput
        style={{marginTop:10}}
        label="Password"
        type="password"
        variant="outlined"
        secureTextEntry={true}
        value={password}
        onChangeText={(password)=>{setPassword(password)}}
      />
      {error==="Password should be at least 6 characters" &&
        <HelperText type="error">
            {error}
        </HelperText>
      }
      {error==="The email address is already in use by another account." && 
           <Dialog visible={visible} onDismiss={hideDialog}>
           <Dialog.Title>Alert</Dialog.Title>
           <Dialog.Content>
             <Paragraph>The email address is already in use by another account.</Paragraph>
           </Dialog.Content>
           <Dialog.Actions>
             <Button onPress={hideDialog}>OK</Button>
           </Dialog.Actions>
         </Dialog>
      }
    <Card.Actions>
        <Button  mode="contained" onPress={()=>saveitem()} style={{marginTop:10,width:'100%'}} >
          Submit
        </Button>
        <Button   onPress={()=>saveitem()} >
          already have account?
        </Button>

    </Card.Actions>
    </Card.Content>
  </Card>
  </LinearGradient>
  </>
  );
}

const styles = StyleSheet.create({
  card:{
    marginTop:40,
    padding:5,
    backgroundColor:'#3fabab',
  },
  container:{
    flex:1,
    justifyContent:'flex-start',
    padding:10,
  }


});
