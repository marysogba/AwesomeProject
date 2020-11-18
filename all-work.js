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