import React,{useState,useEffect} from 'react';
import { StyleSheet, ScrollView ,Text,View, SnapshotViewIOS} from 'react-native';
import { Button, Card, ActivityIndicator,IconButton,Colors } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

export default function Myrecipelist({navigation}) {
  const [data, setData]=useState([]);
  const [email,setEmail]=useState("");
  const [key, setKey]=useState([]);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        setEmail(user.email);
    } else {
        setEmail("");
    }
  });
  useEffect(()=>{
    const recipelist=firebase.database().ref('recipelist');
    recipelist.once('value',datasnap=>{
      var keys=[];
      var datas=[];
      datasnap.forEach((data)=>{
        if(data.val().id===email)
        datas.push(data.val());
        keys.push(data.key);
      })
      setData(datas);
      setKey(keys);
    })
  })
  function deleteitem (recipelist){
    const item =firebase.database().ref('recipelist/'+recipelist);
    item.remove();
  }
  return (
    <>
        <LinearGradient colors={['#f54e42', '#f5dd42']} style={styles.container}>
        <ScrollView>
           {data.length>0 && 
          Object.keys(data).map(function(keyName, keyIndex) {
            return(
                <Card style={styles.cardstyle}  key={data[keyName].name} >
                  <Card.Title  title={data[keyName].name} subtitle={data[keyName].name}/>
                  {data[keyName].category=='veg' || data[keyName].category=='veg(dessert)' ||data[keyName].category=='Dinner -veg' ? 
                    <Button
                    icon="circle"
                    size={30}
                    style={{alignSelf:'flex-end',top:-50}}
                    color={Colors.green900}
                    onPress={() => console.log('Pressed')}
                    >
                    </Button>
                  :
                  <Button
                    icon="circle"
                    color={Colors.red900}
                    style={{alignSelf:'flex-end',top:-50}}
                    size={30}
                    onPress={() => console.log('Pressed')}
                  >
                  </Button>
                  }
                  <Card.Cover style={{marginTop:-30}}source={{ uri:data[keyName].image }} />
                  <View style={styles.row}>
                  <IconButton
                    icon="eye-outline"
                    color={Colors.blue900}
                    size={30}
                    onPress={() => navigation.navigate('Recipe Details',{recipedetail:data[keyIndex]})}
                  />
                  <IconButton
                    icon="delete-outline"
                    color={Colors.red500}
                    size={30}
                    onPress={() => deleteitem(key[keyIndex])}
                  />
                  <IconButton
                    icon="circle-edit-outline"
                    color={Colors.green900}
                    size={30}
                    onPress={() =>console.log("pressed")}
                  />
                  </View>
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
  row:{
    flexDirection: 'row',
    justifyContent: 'center',
    },
});
