import React {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  return (

      <View style={styles.container}>

        <View style={styles.HeaderBox}>
         <Text style={styles.heading}> VISION VALLEY</Text>
        </View>

        <View style={styles.box2}>
          <Text style={styles.text2}>Watch all your dreams come true!</Text>
        </View>

        <View style={[styles.box, styles.cyan]}>
          <Text style={styles.text}>Go to vision board</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.text}>Diary entries</Text>
        </View>
        <View style={[styles.box, styles.magenta]}>
          <Text style={styles.text}>Settings</Text>
        </View>
        <View style={[styles.box, styles.orange]}>
          <Text style={styles.text}>About</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  heading: {
    fontSize:48,
    color: '#F778A1',
    fontWeight: 'bold',
    fontFamily:'AvenirNextCondensed-HeavyItalic',
    paddingLeft:30,
    paddingRight:30,
    textShadowColor:'#EDC9AF',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
  },
  HeaderBox: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    borderColor: 'black',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text2: {
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#F778A1',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  box2: {
    padding: 10,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  box: {
    padding: 20,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: '#F52887',
  },
  blue: {
    backgroundColor: '#FC6C85',
  },
  magenta: {
    backgroundColor: '#F52887',
  },
  orange: {
    backgroundColor: '#FC6C85',
  },
});

export default App;