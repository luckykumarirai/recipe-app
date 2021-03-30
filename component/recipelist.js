import React,{useState,useEffect} from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Button, Card, ActivityIndicator,IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

export default function Recipelist({navigation}) {

  const [data, setData]=useState([]);

  useEffect(()=>{
    const recipelist=firebase.database().ref('recipelist');
    recipelist.once('value',datasnap=>{
      var datas=[];
      datasnap.forEach((data)=>{
        datas.push(data.val());
      })
      setData(datas);
    })
  })
  
  return (
    <>
        <LinearGradient colors={['#f58742', '#f5dd42']} style={styles.container}>
        <ScrollView>
           {data.length>0 &&
          Object.keys(data).map(function(keyName, keyIndex) {
            return(
                <Card style={styles.cardstyle} >
                    <Card.Title title={data[keyName].name} subtitle={data[keyName].category}/>
                    <Card.Cover source={{ uri:data[keyName].image }} />
                    <Button
                    icon="eye"
                    mode="contained"
                    size={20}
                    onPress={() => navigation.navigate('Recipe Details',{recipedetail:data[keyIndex]})}>view
                  </Button>
                </Card>  
            )
          })
        }
        {data.length==0 &&
           <ActivityIndicator size="large" color="#00ff00" />
        }
        </ScrollView>
        </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  cardstyle: {
    marginTop: '5%',
  },
});
