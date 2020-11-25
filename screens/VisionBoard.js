import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

const Goals = ({ goal }) => {
  return (
    <View style={styles.GoalsBox}>
      <TouchableOpacity>
        <Text style={styles.text}>{goal.name}</Text>
        <Image
          style={{
            width: 250,
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={{ uri: goal.src }}
        />
      </TouchableOpacity>
    </View>
  );
};

const GOALS = [
  {
    id: '1',
    name: 'A Mercedes-Benz G-Class',
    src:
      'https://www.carscoops.com/wp-content/uploads/2020/04/Mercedes-G-Class-Forgiato-1.jpg',
  },
  {
    id: '2',
    name: 'Move to Canada',
    src: 'https://cdn.britannica.com/93/94493-050-35524FED/Toronto.jpg',
  },
  {
    id: '3',
    name: 'Buy First Home',
    src:
      'https://i.pinimg.com/originals/92/0a/73/920a736b1259ac151b800fd8cfb1f651.jpg',
  },
  {
    id: '4',
    name: 'Go to Ibiza',
    src:
      'https://zone1-ibizaspotlightsl.netdna-ssl.com/sites/default/files/styles/auto_1500_width/public/article-images/124541/slideshow-1576662714.jpg',
  },
  {
    id: '5',
    name: 'Work out 5 times a week',
    src:
      'https://img.freepik.com/free-photo/beautiful-black-girl-is-engaged-gym_1157-23736.jpg?size=626&ext=jpg',
  },
];

const MyApp = () => {
  return (
    <SafeAreaView>
      <View style={styles.pageview}>
        <Text style={styles.text2}>MY VISION BOARD</Text>

        <FlatList
          style={{ padding: 20 }}
          data={GOALS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Goals goal={item} />}
        />
        <View style={styles.GoalsBox2}>
          <Text style={styles.add}>Add to board</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  GoalsBox: {
    justifyContent: 'center',
    paddingRight: 50,
    paddingLeft: 50,
    padding: 30,
    backgroundColor: '#ECC5C0',
    marginBottom: 20,
    borderRadius: 5,
    margin: 2,
  },
  GoalsBox2: {
    justifyContent: 'center',
    paddingRight: 30,
    paddingLeft: 30,
    padding: 15,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#F778A1',
    backgroundColor: 'white',
    fontFamily: 'AvenirNextCondensed-HeavyItalic',
    padding: 20,
  },
  add: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'AvenirNextCondensed-HeavyItalic',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageview: {
    paddingBottom: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    width: 350,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MyApp;
