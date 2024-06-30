import {StyleSheet, TouchableOpacity} from 'react-native';
import {Heading3Bold} from './Text/Headings';
import {theme} from '@constants/theme';
import {FC} from 'react';
import {HP} from '@helpers/utilsHelper';

interface IProps {
  onPress: () => void;
}
export const FloatingButton: FC<IProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Heading3Bold style={styles.btnText}>{'Book a trip'}</Heading3Bold>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.main.green,
    position: 'absolute',
    bottom: HP(1.9),
    borderRadius: 8,
    width: '92%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: HP(1),
    shadowColor: theme.main.dark,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  btnText: {color: theme.main.white},
});
