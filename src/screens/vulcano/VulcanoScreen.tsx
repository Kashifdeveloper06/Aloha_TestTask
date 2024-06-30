import {StyleSheet, Text} from 'react-native';
import React from 'react';
import FullScreenContainer from '@components/FullScreenContainer';

export const VulcanoScreen = () => {
  return (
    <FullScreenContainer style={styles.container}>
      <Text>VulcanoScreen</Text>
    </FullScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});
