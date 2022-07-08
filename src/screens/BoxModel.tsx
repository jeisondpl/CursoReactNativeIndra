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
  // const {width , height } = useWindowDimensions();
  //   console.log(width, height);

  return (
    <View style={styles.container}>
      <View style={styles.caja1}>
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
    width: 250,
    height: 250,
  },
  internaText: {
    color: color.white,
    textAlign: 'center',
    backgroundColor: color.secondary,
    width: '50%',
    height: '50%',
    padding: 10,
    margin: 10,
    borderWidth: 1,
  },
});

export default BoxModelScreens;
