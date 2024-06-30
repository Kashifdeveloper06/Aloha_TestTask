import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FullScreenContainer from '@components/FullScreenContainer';
import {AppHeader} from '@components/AppHeader';
import {CachedImage} from '@components/CachedImage';
import {homeImages} from '@constants/images';
import FastImage from 'react-native-fast-image';
import {Heading1Bold} from '@components/Text/Headings';
import {HP, WP} from '@helpers/utilsHelper';
import {theme} from '@constants/theme';
import {FloatingButton} from '@components/FloatingButton';
import {Paragraph1} from '@components/Text/Paragraphs';
import {TopSpotsSection} from './components/TopSpotsSection';
import {TravelGuide} from '@components/TravelGuide';
import Spacer from '@components/Spacer';

export const SurfingScreen = () => {
  return (
    <FullScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader />
        <CachedImage
          source={homeImages.SURFING}
          style={styles.mainImg}
          resizeMode={FastImage.resizeMode.cover}>
          <Heading1Bold style={styles.mainText}>{'Surfing'}</Heading1Bold>
        </CachedImage>
        <Paragraph1 style={styles.description}>
          {
            'Hawaii is the capital of modern surfing. This group of Pacific islands gets swell from all directions, so there are plenty of pristine surf spots for all.'
          }
        </Paragraph1>
        <TopSpotsSection />
        <Spacer height={HP(9.2)} />
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
    height: HP(28),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: theme.main.white,
    textAlign: 'center',
    width: '80%',
    opacity: 0.6,
  },
  description: {marginTop: HP(4.6), paddingHorizontal: WP(4)},
});
