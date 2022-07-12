import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import color from '../utils/colors';

interface Props {
  param1: string;
  param2: string;
  param3: string;
}

const ViewStyleProps = ({param1, param2, param3}: Props) => {
  console.log(param1, param2, param3);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My componente</Text>

      <View style={styles.top}>
        <Text style={styles.text}>Sección 1</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.text}>Sección 2</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.text}>Sección 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: color.primary,
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: 'grey',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
  },
  middle: {
    flex: 0.3,
    backgroundColor: 'beige',
    borderWidth: 5,
    justifyContent: 'center',
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',

    fontWeight: 'bold',
  },
});

export default ViewStyleProps;
