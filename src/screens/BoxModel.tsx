import React from 'react';
import color from '../utils/colors';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

const BoxModelScreens = () => {
  // Dimensions
  // const {width, height} = Dimensions.get('window');
  const {width, height} = useWindowDimensions();
  //   console.log(width, height);

  return (
    <View style={styles.container}>
      <View style={styles.caja1}>
        <Text style={styles.internaText}>{width}</Text>
        <Text style={styles.internaText}>Box con Style</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  caja1: {
    backgroundColor: '#FAAC6B',
    width: 500,
    height: 500,
  },
  internaText: {
    color: color.white,
    textAlign: 'center',
    backgroundColor: color.roja,
    width: '50%',
    height: '50%',
    padding: 50,
    margin: 10,
    borderWidth: 1,
  },
});

export default BoxModelScreens;
