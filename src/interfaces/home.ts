import {ImageRequireSource} from 'react-native';
import {Source} from 'react-native-fast-image';

export interface Highlight {
  id: string;
  title: string;
  description: string;
  image: Source | ImageRequireSource;
}

export interface Category {
  id: string;
  title: string;
}
