import React from 'react';
import {StyleSheet, View} from 'react-native';

import color from '../utils/colors';

const FlexDirectionScreens = () => {
  return (
    <View style={styles.container}>
      <View style={styles.caja1}></View>
      <View style={styles.caja2}></View>
      <View style={styles.caja3}></View>
      <View style={styles.caja4}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column-reverse',
    flexDirection: 'row',

    backgroundColor: color.primary,
  },
  caja1: {
    backgroundColor: color.secondary,
    width: 100,
    height: 100,
  },
  caja2: {
    backgroundColor: color.tertiary,
    width: 100,
    height: 100,
  },
  caja3: {
    backgroundColor: color.quinary,
    width: 100,
    height: 100,
  },
  caja4: {
    backgroundColor: color.naranja,
    width: 100,
    height: 100,
  },
});

export default FlexDirectionScreens;
