import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {LogBox} from 'react-native';

function App(): React.JSX.Element {
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
