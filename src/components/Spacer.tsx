import {DimensionValue, View} from 'react-native';

interface IProps {
  height?: DimensionValue | undefined;
  width?: DimensionValue | undefined;
  flex?: number | undefined;
  backgroundColor?: string;
}

const Spacer = ({height, width, flex, backgroundColor}: IProps) => {
  return <View style={{width, height, flex, backgroundColor}} />;
};

export default Spacer;
