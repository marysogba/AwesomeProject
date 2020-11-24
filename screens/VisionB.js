import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
const Goals = ({ goal }) => {
  return (
    <View style={styles.GoalsBox}>
      <Text style={styles.text}>{goal.name}</Text>
      <Image style=
      {{
        width: 250,
        height: 150,
      }}
      source={{ uri: goal.src }} />
    </View>
  );
};
const GOALS = [
  {
    id: '1',
    name: 'A Mercedes-Benz G-Class',
    src:'https://www.carscoops.com/wp-content/uploads/2020/04/Mercedes-G-Class-Forgiato-1.jpg',
  },
  {
    id: '2',
    name: 'Move to Canada',
    src: 'https://cdn.britannica.com/93/94493-050-35524FED/Toronto.jpg',
  },
  {
    id: '3',
    name: 'Buy First Home',
    src:'https://i.pinimg.com/originals/92/0a/73/920a736b1259ac151b800fd8cfb1f651.jpg',
  },
  {
    id: '4',
    name: 'Go to Ibiza',
    src:'https://zone1-ibizaspotlightsl.netdna-ssl.com/sites/default/files/styles/auto_1500_width/public/article-images/124541/slideshow-1576662714.jpg',
  },
  {
    id: '5',
    name: 'Work out 5 times a week',
    src:'https://img.freepik.com/free-photo/beautiful-black-girl-is-engaged-gym_1157-23736.jpg?size=626&ext=jpg',
  },
]
const App = () => {
  return (
    <SafeAreaView>
      <FlatList
        style={{ padding: 20 }}
        data={GOALS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Goals goal={item} />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  GoalsBox: {
    justifyContent: 'center',
    paddingRight: 50,
    padding: 30,
    backgroundColor: '#ECC5C0',
    marginBottom: 20,
    borderRadius: 5,
    margin: 2,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'AvenirNextCondensed-HeavyItalic',
  },
  listItem: {
    width: 250,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;