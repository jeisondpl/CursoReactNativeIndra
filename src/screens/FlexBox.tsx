import React from 'react';
import {StyleSheet, View} from 'react-native';

import color from '../utils/colors';

const FlexBoxScreens = () => {
  return (
    <View style={styles.container}>
      <View style={styles.caja1}></View>
      <View style={styles.caja2}></View>
      <View style={styles.caja3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  caja1: {
    backgroundColor: color.roja,
    flex: 1,
  },
  caja2: {
    backgroundColor: color.naranja,
    flex: 2,
  },
  caja3: {
    backgroundColor: color.verde,
    flex: 3,
  },
});

export default FlexBoxScreens;
