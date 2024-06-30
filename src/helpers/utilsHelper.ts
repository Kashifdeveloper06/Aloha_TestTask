import {Dimensions, PixelRatio, Platform} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const isIos = Platform.OS === 'ios';

const RFValue = (fontSize: number | string) => {
  const fontScale = PixelRatio.getFontScale();
  return +fontSize / fontScale;
};
const WP = (percentage: string | number) => widthPercentageToDP(percentage);
const HP = (percentage: string | number) => heightPercentageToDP(percentage);

const {width: mobileWith, height: mobileHeight} = Dimensions.get('window');

export {isIos, RFValue, WP, HP, mobileWith, mobileHeight};
