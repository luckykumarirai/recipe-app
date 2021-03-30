import * as React from 'react';
import { Avatar, Card,List,IconButton, Colors} from 'react-native-paper';
import { ScrollView,Text} from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Recipedetails ({navigation,route}){

  const {recipedetail}=route.params;
  
  return(
    <>
  <ScrollView>
  <Card style={{backgroundColor:'#42f2f5'}}>
    <Card.Title title={recipedetail.name} subtitle={recipedetail.category} />
    <Card.Cover source={{ uri: recipedetail.image }} />
    <Card.Content>
    <List.Section title="Accordions">
          <List.Accordion
            title="  Ingredients"
            left={props => <List.Icon {...props} icon="eye" />}>
            {recipedetail.inputData.length>0 &&
          Object.keys(recipedetail.inputData).map(function(keyName, keyIndex) {
            return(
                <List.Item title={recipedetail.inputData[keyName].text} />
            )
          })
        }
        {recipedetail.inputData.length==0 &&
           <ActivityIndicator size="large" color="#00ff00" />
        }

          </List.Accordion>
        </List.Section>
        <Card style={{backgroundColor:'#f58742'}}>
        <Card.Content>
        <Card.Title style={{marginLeft:80}} title="Instructions"  />
        <Text>

        {recipedetail.description}
      </Text>
      </Card.Content>
      </Card>

    </Card.Content>
    <Card.Actions>
    <IconButton
        icon="heart"
        color={Colors.red500}
        size={20}
        onPress={() => console.log('Pressed')}
      />
      <IconButton
          icon="share"
          color={Colors.black}
          size={30}
          onPress={() => console.log('Pressed')}
        />
    </Card.Actions>
  </Card>
  </ScrollView>
  </>
);
}
