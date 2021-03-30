import React from 'react';
import { StyleSheet,Image ,Text} from 'react-native';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

export default function HomeScreen({navigation}) {
  const x1=require('../assets/5.png');
  function logout(){
    firebase.auth().signOut()
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
        <LinearGradient colors={['#f54e42', '#f5dd42']} style={styles.container}>
          <Image style={{width:null,height:null,flex:1}} source={x1} />
          <Text style={{margin:20,color:'blue',fontSize:20,fontFamily: 'Serif'}}>
            Here, you can find your favourite recipe list. Add your favourite recipe in the List.
            You can cook different recipes at your home by reading given Descriptions.
          </Text>
          <Button mode="contained" icon="arrow-right"style={styles.button} onPress={() => navigation.navigate('Recipe List')} >
              <Text>Go to check</Text>
          </Button>
        </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',

  },
  button:{
    margin:20,
    backgroundColor:'blue',
  }

});
