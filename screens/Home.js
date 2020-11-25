import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import About from './screens/About';
import VisionBoard from './screens/VisionBoard';


const MyApp = ({ navigation }) => {
  return (
      <View style={styles.container}>

        <View style={styles.HeaderBox}>
         <Text style={styles.heading}>VISION VALLEY</Text>
        </View>

        <View style={styles.box2}>
          <Text style={styles.text2}>Watch all your dreams come true!</Text>
        </View>

        <View style={[styles.box, styles.vision]}>
        <TouchableOpacity onPress={() => navigation.push('VisionBoard')}>
          <Text style={styles.text}>Go to vision board</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.box, styles.diary]}>
          <Text style={styles.text}>Diary entries</Text>
        </View>

        <View style={[styles.box, styles.settings]}>
          <Text style={styles.text}>Settings</Text>
        </View>

        <View style={[styles.box, styles.about]}>
          <TouchableOpacity onPress={() => navigation.push('About')}>
            <Text style={styles.text}>About</Text>
          </TouchableOpacity>
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
  vision: {
    backgroundColor: '#F52887',
  },
  diary: {
    backgroundColor: '#FC6C85',
  },
  settings: {
    backgroundColor: '#F52887',
  },
  about: {
    backgroundColor: '#FC6C85',
  },
});

export default MyApp;