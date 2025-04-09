import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CalculatorScreen from '../screens/CalculatorScreen';
import GraphScreen from '../screens/GraphScreen';
import MeasurementConvertorScreen from '../screens/MeasurementConvertorScreen';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Calculator"
      screenOptions={{
       headerShown: false,
      }}
      >
        <Drawer.Screen name="Calculator" component={CalculatorScreen} />
        <Drawer.Screen name="Graph" component={GraphScreen} />
        <Drawer.Screen name="Convertor" component={MeasurementConvertorScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
