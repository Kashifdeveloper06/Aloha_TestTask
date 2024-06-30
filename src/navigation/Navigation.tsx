import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {BottomTab} from './BottomTab';

export type RootStackParams = {
  BottomTab: undefined;
};

export type NavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'BottomTab'
>;

const Stack = createNativeStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default Navigation;
