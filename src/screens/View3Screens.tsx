import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import color from '../utils/colors';

interface Props extends NativeStackScreenProps<any, any> {}

const View3Screens = ({navigation, route}: Props) => {
  const params = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>View3</Text>
      <Button title="ir atras" onPress={() => navigation.goBack()} />
      <Text style={styles.titulo}>params</Text>
      <Text style={styles.params}>{params?.name}</Text>
      <Text style={styles.params}>{params?.nick}</Text>
      <Text style={styles.params}>{params?.note}</Text>
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
  params: {
    color: color.black,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default View3Screens;
