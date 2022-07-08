import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import color from '../utils/colors';

const View4Screens = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>View4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.tertiary,
    justifyContent: 'center',
  },
  titulo: {
    color: color.black,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default View4Screens;
