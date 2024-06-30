import {ImageRequireSource} from 'react-native';
import {Source} from 'react-native-fast-image';

export interface TopSpot {
  id: string;
  title: string;
  image: Source | ImageRequireSource;
}
