import {Heading3Bold} from '@components/Text/Headings';
import {theme} from '@constants/theme';
import {HP, WP} from '@helpers/utilsHelper';
import {FlatList, StyleSheet, View} from 'react-native';
import {highlightsData} from './data';
import {FlatListItem} from '@interfaces/common';
import {Highlight} from '@interfaces/home';
import {HighlightCard} from './HighlightCard';
import Spacer from '@components/Spacer';

const renderItem = ({item}: FlatListItem<Highlight>) => (
  <HighlightCard item={item} />
);

const renderFooter = () => <Spacer width={WP(4)} />;

export const HighlightsSection = () => {
  return (
    <View style={styles.container}>
      <Heading3Bold style={styles.heading}>{'Highlights'}</Heading3Bold>
      <FlatList
        data={highlightsData}
        extraData={highlightsData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.main.white,
  },
  heading: {
    marginHorizontal: WP(4),
    marginTop: HP(4.6),
  },
});
