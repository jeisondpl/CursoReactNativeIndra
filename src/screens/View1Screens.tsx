import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import color from '../utils/colors';

interface Props extends NativeStackScreenProps<any, any> {}

const View1Screens = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>View1</Text>
      <Button title="ir View 2" onPress={() => navigation.navigate('View2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
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

export default View1Screens;
