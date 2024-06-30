import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CachedImage} from './CachedImage';
import {commonImages} from '@constants/images';
import {HP, WP} from '@helpers/utilsHelper';
import FastImage from 'react-native-fast-image';
import {theme} from '@constants/theme';

export const AppHeader = () => {
  return (
    <View style={styles.container}>
      <CachedImage
        source={commonImages.LOGO}
        style={styles.logo}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: HP(2.5),
    backgroundColor: theme.main.white,
  },
  logo: {
    width: WP(25),
    height: HP(4),
  },
});
