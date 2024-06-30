import React, {FC} from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../constants/theme';

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  edges?: Edges;
}

export const FullScreenContainer: FC<IProps> = ({
  children,
  style,
  edges = ['top'],
}) => {
  return (
    <SafeAreaView edges={edges} style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

export default FullScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.main.white,
  },
});
