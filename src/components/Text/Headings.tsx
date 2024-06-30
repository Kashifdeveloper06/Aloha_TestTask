import {fontFamily} from '@constants/fonts';
import {theme} from '@constants/theme';
import {RFValue} from '@helpers/utilsHelper';
import React, {FC, ReactNode} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

export type HeadingProps = TextProps & {
  children: ReactNode;
};

export const Heading1Bold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading1Bold, props.style]} />
);

export const Heading2Bold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading2Bold, props.style]} />
);

export const Heading3Bold: FC<HeadingProps> = props => (
  <Text {...props} style={[textStyles.heading3Bold, props.style]} />
);

export const textStyles = StyleSheet.create({
  heading1Bold: {
    fontSize: RFValue(56),
    color: theme.main.dark,
    fontFamily: fontFamily.MONO_Bold,
    fontWeight: '700',
  },
  heading2Bold: {
    fontSize: RFValue(24),
    color: theme.main.dark,
    fontFamily: fontFamily.MONO_Bold,
    fontWeight: '700',
  },
  heading3Bold: {
    fontSize: RFValue(16),
    color: theme.main.dark,
    fontFamily: fontFamily.MONO_Bold,
    fontWeight: '700',
  },
});
