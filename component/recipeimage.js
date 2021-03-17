import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph,List,Menu,IconButton, Colors} from 'react-native-paper';
import { StyleSheet, ScrollView ,View,Text} from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Recipeimage (){
  return(
  <ScrollView>
  <Card>
    <Card.Title title="Angoori-rasmalai"  />
    <Card.Cover source={{ uri: 'https://image.shutterstock.com/image-photo/angoori-rasmalai-indian-dessert-sweet-260nw-659404369.jpg' }} />
    <Card.Content>
    <List.Section title="Accordions">
          <List.Accordion
            title="  Ingredients"
            left={props => <List.Icon {...props} icon="eye" />}>

            <List.Item title="1. 3 lt Full cream milk (cow's milk)" />
            <List.Item title="2. 3 tbsp Lemon juice" />
            <List.Item title="3. 4 tsp Cornflour" />
            <List.Item title="4. 1 pinch Baking soda" />
            <List.Item title="5.1 & ¾ cup Sugar" />
            <List.Item title="6. 5 cups Water" />
            <List.Item title="7. 2 – 3 Cardamom (crushed)" />
            <List.Item title="8. 2 tbsp Cashew nut" />
            <List.Item title="9. 1 tsp Cardamom powder" />
            <List.Item title="10. 1 pinch Saffron" />
            <List.Item title="11. ½ tsp Rose water" />
            <List.Item title="12. ½ pinch Yellow food color" />
            <List.Item title="13. Dry fruits slivers (for garnishing)" />

          </List.Accordion>
        </List.Section>
        <Card style={{backgroundColor:'lightgreen'}}>
        <Card.Content>
        <Card.Title style={{marginLeft:80}} title="Instructions"  />
        <Text>

      Heat 2 liter milk in a pan.
      Switch off the heat when it comes to a boil.
      Add lemon juice.
      The milk will curdle immediately.
      Let it rest for 5 minutes.
      Drain the curdled milk in a cheese cloth.
      Wash the cheese under running water to remove the traces of lemon juice.
      Hang the cheese cloth for an hour to drain all the whey from the cheese.
      Meanwhile, heat the remaining 1 liter milk in a  heavy bottom pan.
      Add saffron and yellow food coloring.
      Cook on low heat, till milk is reduced to half.
      Blend ¼ cup sugar and cashew nuts in a blender.
      Add in the reduced milk.
      Add rose water and cardamom powder.
      Mix well.
      Keep the milk aside.
      Remove the chenna from the cheese cloth.
      Add cornflour and baking soda.
      Knead the chenna with your palms for 6-8 minutes.
      Make pea size balls from the chenna.
      Heat 1 and ½ cup sugar and water in a pressure cooker.
      When the water comes to a rolling boil, add a few chenna balls.
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
);
}
