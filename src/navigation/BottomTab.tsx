import React, {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './stacks/HomeStack';
import {HP} from '@helpers/utilsHelper';
import {Image, ImageRequireSource, StyleSheet} from 'react-native';
import {bottomTabImages} from '@constants/images';
import {HulaScreen} from '@screens/hula/HulaScreen';
import {VulcanoScreen} from '@screens/vulcano/VulcanoScreen';
import {SurfingScreen} from '@screens/surfing/SurfingScreen';
import {theme} from '@constants/theme';

export type BottomTabParams = {
  HomeStack: undefined;
  SurfingScreen: undefined;
  HulaScreen: undefined;
  VulcanoScreen: undefined;
};

const screen = {
  options: {
    headerShown: false,
    tabBarInactiveTintColor: theme.main.dark,
    tabBarActiveTintColor: theme.main.green,
    unmountOnBlur: true,
  },
  insets: {bottom: HP(3.5)},
};

const Tab = createBottomTabNavigator<BottomTabParams>();

const renderIcons = (
  focused: boolean,
  image: ImageRequireSource,
): ReactNode => {
  return (
    <Image
      source={image}
      style={styles.icon}
      tintColor={focused ? theme.main.green : theme.main.dark}
    />
  );
};

export const BottomTab = () => {
  return (
    <Tab.Navigator
      safeAreaInsets={screen.insets}
      screenOptions={screen.options}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: props => renderIcons(props.focused, bottomTabImages.HOME),
        }}
      />
      <Tab.Screen
        name="SurfingScreen"
        component={SurfingScreen}
        options={{
          tabBarLabel: 'Surfing',
          tabBarIcon: props =>
            renderIcons(props.focused, bottomTabImages.SURFING),
        }}
      />
      <Tab.Screen
        name="HulaScreen"
        component={HulaScreen}
        options={{
          tabBarLabel: 'Hula',
          tabBarIcon: props => renderIcons(props.focused, bottomTabImages.HULA),
        }}
      />
      <Tab.Screen
        name="VulcanoScreen"
        component={VulcanoScreen}
        options={{
          tabBarLabel: 'Vulcano',
          tabBarIcon: props =>
            renderIcons(props.focused, bottomTabImages.VULCANO),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({icon: {width: 24, height: 24}});
