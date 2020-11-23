import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';

   const COLORS = [
        { colorName: 'Base03', hexCode: '#002b36' },
        { colorName: 'Base02', hexCode: '#073642' },
        { colorName: 'Base01', hexCode: '#586e75' },
        { colorName: 'Base00', hexCode: '#657b83' },
        { colorName: 'Base0', hexCode: '#839496' },
        { colorName: 'Base1', hexCode: '#93a1a1' },
        { colorName: 'Base2', hexCode: '#eee8d5' },
        { colorName: 'Base3', hexCode: '#fdf6e3' },
        { colorName: 'Yellow', hexCode: '#b58900' },
        { colorName: 'Orange', hexCode: '#cb4b16' },
        { colorName: 'Red', hexCode: '#dc322f' },
        { colorName: 'Magenta', hexCode: '#d33682' },
        { colorName: 'Violet', hexCode: '#6c71c4' },
        { colorName: 'Blue', hexCode: '#268bd2' },
        { colorName: 'Cyan', hexCode: '#2aa198' },
        { colorName: 'Green', hexCode: '#859900' },
      ];

      const RAINBOW = [
        { colorName: 'Red', hexCode: '#FF0000' },
        { colorName: 'Orange', hexCode: '#FF7F00' },
        { colorName: 'Yellow', hexCode: '#FFFF00' },
        { colorName: 'Green', hexCode: '#00FF00' },
        { colorName: 'Violet', hexCode: '#8B00FF' },
      ];
      
      const FRONTEND_MASTERS = [
        { colorName: 'Red', hexCode: '#c02d28' },
        { colorName: 'Black', hexCode: '#3e3e3e' },
        { colorName: 'Grey', hexCode: '#8a8a8a' },
        { colorName: 'White', hexCode: '#ffffff' },
        { colorName: 'Orange', hexCode: '#e66225' },
      ];
      

const App = () => {
const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
        
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ColorPalette" component={ColorPalette} />
    
      const ColorPalette = () => {
        return (
          <FlatList
            style={styles.container}
            data={COLORS}
            keyExtractor={item => item.hexCode}
            renderItem={({ item }) => (
              <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
            )}
            ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
          />
        );
      };
      
      const styles = StyleSheet.create({
        container: {
          padding: 10,
        },
        heading: {
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
        },
      });
      
      export default ColorPalette;}

      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

// session 2 - need to revise

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ColorBox from './components/ColorBox';

const COLORS = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
  ];

const App = () => {
  return (
    <SafeAreaView style {{flex:1}}>
    <FlatList
        contentContainerStyle={styles.color}    
        data={COLORS}
        keyExtractor={item => item.colorName} //item.whatever follows needs to be unique
        renderItem={({ item }) => (
          <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
        )}
        ListHeaderComponent={<Text style={styles.heading}>Nah this took forever</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  color: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
});

export default App;

// this one na FlatList exercise.

import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const MyApp = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colours</Text>
        
        <View style={[styles.cyan, styles.box]}>
          <Text style={styles.boxText}>Cyan #2aa198</Text>
        </View>
        <View style={[styles.blue, styles.box]}>
          <Text style={styles.boxText}>Blue #268bd2</Text>
        </View>
        <View style={[styles.magenta, styles.box]}>
          <Text style={styles.boxText}>Magenta #d33682</Text>
        </View>
        <View style={[styles.orange, styles.box]}>
          <Text style={styles.boxText}>Orange #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 5
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  boxText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
export default MyApp;

//This one is Kadi's code because kilode

import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}> Here are some boxes!</Text>
        <View style={[styles.cyan, styles.box]}>
          <Text style={styles.boxText}>Hello World!</Text>
        </View>

        <View style={[styles.teal, styles.box]}>
          <Text style={styles.boxText}>Hello World!</Text>
        </View>

        <View style={[styles.pink, styles.box]}>
          <Text style={styles.boxText}>Hello World!</Text>
        </View>

        <View style={[styles.orange, styles.box]}>
          <Text style={styles.boxText}>Hello World!</Text>
        </View>

        <ColorBox hexCode="#2aa198" colorName="Cyan" />
        <ColorBox hexCode="#268bd2" colorName="Blue" />
        <ColorBox hexCode="#d33682" colorName="Magenta" />
        <ColorBox hexCode="#cb4b16" colorName="Orange" />
      </View>
      <ColorBox />
     </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
    },

    text: {
        fontSize:16,
        fontWeight: 'bold',
    },

    box: {
        paddingVertical: 10,
        paddingHorizontal: 130,
        borderRadius: 6,
        marginVertical: 5,
    },

    boxText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    teal: {
        backgroundColor: 'teal',
        
    },
    cyan: {
        backgroundColor: 'cyan',
    },
    pink: {
        backgroundColor: 'magenta',
    },
    orange: {
        backgroundColor: 'orange',
    },
});

export default App;

// Above code made boxes here.