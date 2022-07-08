import React from 'react';
import {StyleSheet, View} from 'react-native';

import color from '../utils/colors';

const PositionScreens = () => {
  return (
    <View style={styles.container}>
      <View style={styles.caja1}></View>
      <View style={styles.caja2}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  caja1: {
    backgroundColor: color.secondary,
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  caja2: {
    backgroundColor: color.tertiary,
    width: 100,
    height: 100,
  },
});

export default PositionScreens;
