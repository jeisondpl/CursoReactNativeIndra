import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../utils/colors';
import {View, StyleSheet, Text} from 'react-native';

const Iconos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My componente Icons</Text>
      <View style={styles.middle}>
        <Icon name="star-outline" size={50} color={color.roja} />
        <Icon name="attach-outline" size={50} color={color.roja} />
        <Icon name="battery-full-outline" size={50} color={color.roja} />
        <Icon name="bluetooth-outline" size={50} color={color.roja} />
        <Icon name="calculator-outline" size={50} color={color.roja} />
        <Icon name="chatbubble-ellipses-outline" size={50} color={color.roja} />
        <Icon name="color-palette-outline" size={50} color={color.roja} />
        <Icon name="fitness-outline" size={50} color={color.roja} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary,
  },
  middle: {
    flexDirection: 'row',
    backgroundColor: 'beige',
    borderWidth: 3,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default Iconos;
