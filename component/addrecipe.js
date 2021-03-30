import React, { Component } from 'react';
import {Text, KeyboardAvoidingView, StyleSheet ,TouchableOpacity,View,ScrollView,Platform } from 'react-native';
import {  Paragraph,Dialog,TextInput,Card,Button,Appbar,HelperText,IconButton} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


class Addrecipe extends Component {

  constructor(props){
    super(props);
    this.state = {
      textInput : [],
      inputData : [],
      name:'',
      description:'',
      category:'',
      image:null,
    }
  }
  componentDidMount() {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  };
   saveitem=()=>{
        firebase.database().ref('/recipelist').once('value', function(snapshot) {
                console.log(snapshot.val());
  
        });
        const myitem=firebase.database().ref('/recipelist');
           myitem.push().set({
           name:this.state.name,
           description:this.state.description,
           category:this.state.category,
           inputData:this.state.inputData,
           image:this.state.image,
           time:Date.now(),
       });
       
       
  }
  //function to add TextInput dynamically
  addTextInput = (index) => {
    let textInput = this.state.textInput;
    var i=0;
    textInput.push(<TextInput   style={styles.textInput} style={{marginTop:10}} label="write the ingredient Name"
      onChangeText={(text) => this.addValues(text, index)} />);
    this.setState({ textInput });
  }

  //function to remove TextInput dynamically
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({ textInput,inputData });
  }

  //function to add text from TextInputs into single array
  addValues = (text, index) => {
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0){
      dataArray.forEach(element => {
        if (element.index === index ){
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool){
    this.setState({
      inputData: dataArray
    });
  }
  else {
    dataArray.push({'text':text,'index':index});
    this.setState({
      inputData: dataArray
    });
  }
  }
   pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
    
    this.setState({
      image: result.uri
     });
      
    }
  };


  //function to console the output
  getValues = () => {
    console.log('Data',this.state.inputData);
  }


  render(){
    return(
      <>
        <LinearGradient colors={['#f54e42', '#f5dd42']} style={styles.container}>
        <ScrollView>
                <Card style={styles.card}>
                <Card.Title  title="Add your favourite recipe"/>
                <Card.Content>
              
                      <TextInput
                        style={{marginTop:10}}
                        label="Category of new recipe"
                        variant="outlined-input"
                        value={this.state.category}
                        onChangeText={(category)=>this.setState({category})}
                      />
                      <TextInput
                        style={{marginTop:10}}
                        label="Name of recipe"
                        type="text"
                        variant="outlined"
                        value={this.state.name}
                        onChangeText={(name)=>this.setState({name})}
                      />
                      {this.state.textInput.map((value) => {
                          return value
                      })}
                      <View style={styles.row}>
                      <Text style={{color:'white',fontWeight:'bold',marginTop:12}}>add ingredient name</Text>
                      <IconButton   icon="plus-circle"   onPress={() => this.addTextInput(this.state.textInput.length)} />
                      <IconButton   icon="minus-circle" onPress={() => this.removeTextInput()} />
                      </View>
                      <TextInput
                        style={{marginTop:10}}
                        label="Description of recipe"
                        multiline
                        variant="outlined"
                        value={this.state.description}
                        onChangeText={(description)=>this.setState({description})}
                      />
                      <Button title="Pick an image from camera roll" onPress={()=>this.pickImage()} >select</Button>
                       <Card.Actions>
                       <Button  mode="contained" onPress={()=>this.saveitem()} style={{marginTop:10,width:'100%'}} >
                          <Text>Submit</Text>
                       </Button>
                       </Card.Actions>
                </Card.Content>
                </Card>       
         </ScrollView>
        </LinearGradient>
      </>
    )
  }
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
  },
row:{
  flexDirection: 'row',
  justifyContent: 'center',
  },
});

export default Addrecipe;
