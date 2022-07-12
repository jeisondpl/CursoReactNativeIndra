import * as React from 'react';
import BoxModelScreens from './src/screens/BoxModel';
import PositionScreens from './src/screens/Position';
import FlexBoxScreens from './src/screens/FlexBox';
import FlexDirection from './src/screens/FlexDirection';
import {Text, View, StyleSheet} from 'react-native';
import color from './src/utils/colors';
import NavigateStackScreens from './src/screens/navigate/NativeStack';
import NavigateDrawerScreens from './src/screens/navigate/NativeDrawer';
import Nuevo from './src/screens/Nuevo';
import TextoPrueba from './src/components/TextoPrueba';
import Iconos from './src/components/Iconos';

const MyComponents: JSX.Element[] = [
  <BoxModelScreens />,
  <PositionScreens />,
  <FlexBoxScreens />,
  <FlexDirection />,
  <NavigateStackScreens />,
  <NavigateDrawerScreens />,
  <Nuevo />,
  <TextoPrueba
    param1="parametro 1"
    param2="parametro 2"
    param3="parametro 3"
  />,
  <Iconos />,
];

const appScreens = () => {
  return (
    <>
      <View style={styles.container}>{MyComponents[8]}</View>
      <View style={styles.containerFoter}>
        <Text style={styles.Titulo}>
          Capacitación de React Native - Unidad 3
        </Text>
        {/* <Text style={styles.subTitulo}>BoxModel</Text>
        <Text style={styles.subTitulo}>Position</Text>
        <Text style={styles.subTitulo}>Flex</Text>
        <Text style={styles.subTitulo}>Navegaciones</Text> */}
        <Text style={styles.subTitulo}>Componentes</Text>
        <Text style={styles.subTitulo}>Icons</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: color.primary,
  },

  containerFoter: {
    flex: 1,
    backgroundColor: color.foter,
    justifyContent: 'center',
  },
  Titulo: {
    color: color.black,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subTitulo: {
    color: color.black,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default appScreens;
