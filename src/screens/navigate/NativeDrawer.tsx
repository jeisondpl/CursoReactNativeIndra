import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import View4Screens from '../View4Screens';
import NavigateStackScreens from './NativeStack';
import NativeTabs from './NativeTabs';

const Drawer = createDrawerNavigator();

function NavigateDrawerScreens() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="NavigateStack" component={NavigateStackScreens} />
      <Drawer.Screen name="View5-MaterialBottom" component={NativeTabs} />
      <Drawer.Screen name="View4-sin navegacion" component={View4Screens} />
    </Drawer.Navigator>
  );
}
export default NavigateDrawerScreens;
