import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import color from '../utils/colors';

interface Props extends NativeStackScreenProps<any, any> {}

const View2Screens = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>View2</Text>
      <Button
        title="ir View 3"
        onPress={() =>
          navigation.navigate('View3', {
            name: 'Jeison Diaz',
            nick: 'Viejo Jey',
            note: 'Pilas con la unidada 3',
          })
        }
      />
      <Button title="ir atras" onPress={() => navigation.goBack()} />
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

export default View2Screens;
