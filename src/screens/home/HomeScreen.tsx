import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FullScreenContainer from '@components/FullScreenContainer';
import {AppHeader} from '@components/AppHeader';
import {CachedImage} from '@components/CachedImage';
import {homeImages} from '@constants/images';
import {HP} from '@helpers/utilsHelper';
import FastImage from 'react-native-fast-image';
import {Heading1Bold} from '@components/Text/Headings';
import {theme} from '@constants/theme';
import {HighlightsSection} from './components/HighlightsSection';
import {CategoriesSection} from './components/CategoriesSection';
import {TravelGuide} from '@components/TravelGuide';
import Spacer from '@components/Spacer';
import {FloatingButton} from '@components/FloatingButton';

const HomeScreen = () => {
  return (
    <FullScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader />
        <CachedImage
          source={homeImages.VALLEY}
          style={styles.mainImg}
          resizeMode={FastImage.resizeMode.cover}>
          <Heading1Bold style={styles.mainText}>
            {'Welcome to Hawaii'}
          </Heading1Bold>
        </CachedImage>
        <HighlightsSection />
        <CategoriesSection />
        <TravelGuide />
        <Spacer height={HP(9.2)} backgroundColor={theme.secondary.lightGreen} />
      </ScrollView>
      <FloatingButton onPress={() => {}} />
    </FullScreenContainer>
  );
};

const styles = StyleSheet.create({
  mainImg: {
    width: '100%',
    height: HP(56.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: theme.main.white,
    textAlign: 'center',
    width: '80%',
    opacity: 0.6,
  },
});

export default HomeScreen;
