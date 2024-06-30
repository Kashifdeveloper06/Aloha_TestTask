import {CachedImage} from '@components/CachedImage';
import {Paragraph1} from '@components/Text/Paragraphs';
import {commonImages} from '@constants/images';
import {theme} from '@constants/theme';
import {HP, WP} from '@helpers/utilsHelper';
import {Category} from '@interfaces/home';
import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface IProps {
  item: Category;
}
export const CategoryCard: FC<IProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <Paragraph1>{item.title}</Paragraph1>
      <CachedImage
        source={commonImages.ARROW_RIGHT}
        style={styles.arrowRight}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor: theme.main.white,
    shadowColor: theme.secondary.shadow,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
    padding: HP(2.6),
    marginHorizontal: WP(4),
    marginBottom: HP(1),
  },
  arrowRight: {width: HP(1.9), height: HP(1.9)},
});
