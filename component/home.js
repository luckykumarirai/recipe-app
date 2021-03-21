import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Appbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({navigation}) {
  return (
    <>
        <Appbar.Header>
          <Appbar.Action icon="menu"  onPress={() => navigation.openDrawer()}   />
          <Appbar.Content title="Recipe-app" />
       </Appbar.Header>
        <LinearGradient colors={['#8E60D9', '#E31748']} style={styles.container}>
        <ScrollView>
        <Card style={styles.cardstyle}>
          <Card.Title title="Angoori-rasmalai" subtitle="Author name"/>
          <Card.Cover source={{ uri: 'https://image.shutterstock.com/image-photo/angoori-rasmalai-indian-dessert-sweet-260nw-659404369.jpg' }} />
        </Card>
        <Card style={styles.cardstyle}>
          <Card.Title title="kaju-katli" subtitle="Author name"/>
          <Card.Cover source={{ uri: 'https://image.shutterstock.com/image-photo/kaju-katli2-260nw-128021285.jpg' }} />
        </Card>
        <Card style={styles.cardstyle}>
          <Card.Title title="kesar-pedha" subtitle="Author name"/>
          <Card.Cover source={{ uri: 'https://image.shutterstock.com/image-photo/kesar-pedha-peda-indian-traditional-600w-1092156542.jpg' }} />
        </Card>
        <Card style={styles.cardstyle} >
          <Card.Title title="Burger" subtitle="Author name"/>
          <Card.Cover source={{ uri: 'https://image.shutterstock.com/image-photo/burger-fast-food-items-materials-600w-140030899.jpg' }} />
        </Card>
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
