import Spacer from '@components/Spacer';
import {Heading3Bold} from '@components/Text/Headings';
import {theme} from '@constants/theme';
import {HP, WP} from '@helpers/utilsHelper';
import {FlatList, StyleSheet, View} from 'react-native';
import {topSpotsData} from './data';
import {FlatListItem} from '@interfaces/common';
import {TopSpot} from '@interfaces/surfing';
import {TopSpotCard} from './TopSpotCard';

const renderItem = ({item}: FlatListItem<TopSpot>) => (
  <TopSpotCard item={item} />
);

export const TopSpotsSection = () => {
  return (
    <View style={styles.container}>
      <Heading3Bold style={styles.heading}>{'Top spots'}</Heading3Bold>
      <Spacer height={HP(1.4)} />
      <FlatList
        data={topSpotsData}
        extraData={topSpotsData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.main.white,
    shadowColor: theme.secondary.shadow,
    marginTop: HP(4.6),
  },
  heading: {
    marginHorizontal: WP(4),
  },
});
