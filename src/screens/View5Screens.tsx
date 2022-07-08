import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import color from '../utils/colors';

const View5Screens = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>View5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondary,
    justifyContent: 'center',
  },
  titulo: {
    color: color.white,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default View5Screens;
