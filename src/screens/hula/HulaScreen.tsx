import {StyleSheet, Text} from 'react-native';
import React from 'react';
import FullScreenContainer from '@components/FullScreenContainer';

export const HulaScreen = () => {
  return (
    <FullScreenContainer style={styles.container}>
      <Text>HulaScreen</Text>
    </FullScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});
