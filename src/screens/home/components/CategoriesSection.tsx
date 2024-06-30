import {Heading3Bold} from '@components/Text/Headings';
import {theme} from '@constants/theme';
import {HP, WP} from '@helpers/utilsHelper';
import {FlatList, StyleSheet, View} from 'react-native';
import {categoriesData} from './data';
import {FlatListItem} from '@interfaces/common';
import {Category} from '@interfaces/home';
import {CategoryCard} from './CategoryCard';
import Spacer from '@components/Spacer';

const renderItem = ({item}: FlatListItem<Category>) => (
  <CategoryCard item={item} />
);

export const CategoriesSection = () => {
  return (
    <View style={styles.container}>
      <Heading3Bold style={styles.heading}>{'Categories'}</Heading3Bold>
      <Spacer height={HP(1.9)} />
      <FlatList
        data={categoriesData}
        extraData={categoriesData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.secondary.lightGreen,
    shadowColor: theme.secondary.shadow,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.86,
    shadowRadius: 10,
    elevation: 5,
  },
  heading: {
    marginHorizontal: WP(4),
    marginTop: HP(4.6),
  },
});
