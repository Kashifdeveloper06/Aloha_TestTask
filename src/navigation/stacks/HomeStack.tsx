import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/HomeScreen';

export type HomeStackParams = {
  HomeScreen: undefined;
};

export type HomeNavigationProps = NativeStackNavigationProp<
  HomeStackParams,
  'HomeScreen'
>;

export type HomeRouteProps = RouteProp<HomeStackParams, 'HomeScreen'>;

const Stack = createNativeStackNavigator<HomeStackParams>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
