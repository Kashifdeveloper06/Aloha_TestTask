import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Heading2Bold, Heading3Bold} from './Text/Headings';
import Spacer from './Spacer';
import {HP, WP} from '@helpers/utilsHelper';
import {theme} from '@constants/theme';
import {Paragraph1} from './Text/Paragraphs';
import {CachedImage} from './CachedImage';
import {commonImages} from '@constants/images';
import FastImage from 'react-native-fast-image';

export const TravelGuide = () => {
  return (
    <View style={styles.container}>
      <Heading3Bold>{'Travel Guide'}</Heading3Bold>
      <Spacer height={HP(1.9)} />
      <View style={styles.contactCard}>
        <View>
          <Heading2Bold>{'Hadwin Malone'}</Heading2Bold>
          <Paragraph1 style={styles.guide}>{'Guide since 2012'}</Paragraph1>
          <TouchableOpacity style={styles.contactBtn}>
            <Heading3Bold style={styles.contactText}>{'Contact'}</Heading3Bold>
          </TouchableOpacity>
        </View>
        <CachedImage
          source={commonImages.user}
          style={styles.profile}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.secondary.lightGreen,
    shadowColor: theme.secondary.shadow,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.86,
    shadowRadius: 10,
    elevation: 5,
    paddingHorizontal: WP(4),
    paddingTop: HP(4.6),
  },
  contactCard: {
    backgroundColor: theme.main.white,
    marginTop: HP(1.9),
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: HP(2.6),
  },
  guide: {marginTop: HP(1.7)},
  contactBtn: {
    marginTop: HP(3.9),
    borderRadius: 8,
    borderWidth: HP(0.1),
    paddingHorizontal: WP(6),
    paddingVertical: HP(1),
    alignSelf: 'flex-start',
    borderColor: theme.main.green,
  },
  contactText: {
    color: theme.main.green,
  },
  profile: {width: HP(8.5), height: HP(8.5)},
});
