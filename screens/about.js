import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const About = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>ABOUT VISION VALLEY</Text>
        <Text style={styles.text}>
          Would you like to create a vision board but can't seem to find the
          time? No problem! Vision Valley takes the hard work out of it and lets
          you create your vision board right on your phone. So now you you can
          look at your vision board, anytime and anywhere!
        </Text>
        <Text style={styles.text}>
          All you need to do is upload a type in your goal, add a picture and
          tick it off when you have achieved it!
        </Text>

        <Text style={styles.text}>
          This app was built in November 2020 by Mary Sogbanmu. Big shout out to
          Coders of Colour and Formidable for making this possible. For more
          information, please follow @codersofcolour and @FormidableLabs on Twitter
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECC5C0',
    borderRadius: 30,
    marginVertical: 30,
  },
  text: {
    fontSize: 16,
    fontFamily: 'AvenirNextCondensed-HeavyItalic',
    padding: 5,
  },
  header: {
    fontSize: 28,
    padding: 10,
    fontFamily: 'AvenirNextCondensed-HeavyItalic',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 5,
  },
});
export default About;