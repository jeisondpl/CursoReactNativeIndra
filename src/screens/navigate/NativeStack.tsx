import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import View1Screens from '../View1Screens';
import View2Screens from '../View2Screens';
import View3Screens from '../View3Screens';

const Stack = createNativeStackNavigator();

const NavigateStackScreens = () => {
  return (
    <Stack.Navigator
      // initialRouteName="View3"
      screenOptions={
        {
          // headerShown: true,
          // headerTitleAlign: 'center',
        }
      }>
      <Stack.Screen name="View1" component={View1Screens} />
      <Stack.Screen name="View2" component={View2Screens} />
      <Stack.Screen name="View3" component={View3Screens} />
    </Stack.Navigator>
  );
};

export default NavigateStackScreens;
