import {CachedImage} from '@components/CachedImage';
import {Heading2Bold} from '@components/Text/Headings';
import {Paragraph1} from '@components/Text/Paragraphs';
import {commonImages} from '@constants/images';
import {theme} from '@constants/theme';
import {HP, WP} from '@helpers/utilsHelper';
import {Highlight} from '@interfaces/home';
import {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface IProps {
  item: Highlight;
}

export const HighlightCard: FC<IProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <CachedImage
        source={item.image}
        style={styles.img}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.detailContainer}>
        <Heading2Bold style={styles.title}>{item.title}</Heading2Bold>
        <Paragraph1 style={styles.description}>{item.description}</Paragraph1>
        <TouchableOpacity style={styles.nextBtn}>
          <CachedImage
            source={commonImages.ARROW_RIGHT}
            style={styles.arrowNext}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WP(77),
    borderRadius: 8,
    backgroundColor: theme.main.white,
    shadowColor: theme.main.green,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 5,
    marginLeft: WP(4),
    marginTop: HP(2.8),
    marginBottom: HP(4.6),
  },
  img: {
    width: '100%',
    height: HP(20),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  detailContainer: {
    paddingHorizontal: WP(5.8),
    paddingVertical: HP(2.8),
  },
  title: {color: theme.main.green},
  description: {marginTop: HP(1.9)},
  nextBtn: {
    backgroundColor: theme.secondary.lightGreen,
    borderRadius: 30,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  arrowNext: {
    width: HP(1.9),
    height: HP(1.9),
  },
});
