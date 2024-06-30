import {CachedImage} from '@components/CachedImage';
import {Heading3Bold} from '@components/Text/Headings';
import {theme} from '@constants/theme';
import {HP, WP} from '@helpers/utilsHelper';
import {TopSpot} from '@interfaces/surfing';
import {FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface IProps {
  item: TopSpot;
}
export const TopSpotCard: FC<IProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <Heading3Bold style={styles.title}>
        {item.id}
        {'. '}
        {item.title}
      </Heading3Bold>
      <CachedImage source={item.image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: WP(4),
    marginBottom: HP(1),
    backgroundColor: theme.main.white,
    shadowColor: theme.main.green,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    marginTop: HP(0.5),
  },
  title: {paddingLeft: WP(4), color: theme.main.green},
  image: {
    width: 120,
    height: 63,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
