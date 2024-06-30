import {fontFamily} from '@constants/fonts';
import {theme} from '@constants/theme';
import {RFValue} from '@helpers/utilsHelper';
import React, {FC, ReactNode} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

export type ParagraphProps = TextProps & {
  children: ReactNode;
};

export const Paragraph1: FC<ParagraphProps> = props => (
  <Text {...props} style={[textStyles.paragraph1, props.style]} />
);

export const textStyles = StyleSheet.create({
  paragraph1: {
    fontSize: RFValue(16),
    color: theme.main.dark,
    fontFamily: fontFamily.MONO_REGULAR,
    fontWeight: '400',
  },
});
