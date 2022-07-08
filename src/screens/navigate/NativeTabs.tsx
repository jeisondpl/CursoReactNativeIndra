import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Platform, Text} from 'react-native';

import View4Screens from '../View4Screens';
import View5Screens from '../View5Screens';
import NavigateStackScreens from './NativeStack';
import color from '../../utils/colors';

const BottomTab = createMaterialBottomTabNavigator();

const NativeTabs = () => {
  return (
    <BottomTab.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: color.black,
      }}
      // screenOptions={ ({ route }) => ({

      // })}
    >
      <BottomTab.Screen
        name="Tab2Screen"
        options={{title: 'View4'}}
        component={View4Screens}
      />
      <BottomTab.Screen
        name="Tab1Screen"
        options={{title: 'View5'}}
        component={View5Screens}
      />
      <BottomTab.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={NavigateStackScreens}
      />
    </BottomTab.Navigator>
  );
};

export default NativeTabs;
