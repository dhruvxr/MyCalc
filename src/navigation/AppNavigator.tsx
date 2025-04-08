import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationScreen from '../screens/NavigationScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import GraphScreen from '../screens/GraphScreen';
import MeasurementConvertorScreen from '../screens/MeasurementConvertorScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={NavigationScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="Graph" component={GraphScreen} />
        <Stack.Screen name="Convertor" component={MeasurementConvertorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}