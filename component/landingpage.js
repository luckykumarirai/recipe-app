import React from 'react';
import { StyleSheet, ScrollView, Image ,Text} from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { IconButton, Colors } from 'react-native-paper';
import HomeScreen from './home';

export default function Landingpage({navigation}) {
  const x1=require('../assets/3.png');
  return (
    <>
        <LinearGradient colors={['#8E60D9', '#E31748']} style={styles.container}>
          <Image style={{width:'100%',height:350}} source={x1} />
          <Text style={{margin:20,color:'white',fontSize:15}}>
            Here you can find your favourite different type of recipe list. Add your favourite recipe in List.
            You can cook different recipes at your home by reading given Descriptions.
          </Text>
          <Button mode="contained" icon="arrow-right"style={styles.button} >
              Go to check
          </Button>
        </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardstyle: {
    marginTop: '5%',
  },
  button:{
    margin:20,
  }

});
