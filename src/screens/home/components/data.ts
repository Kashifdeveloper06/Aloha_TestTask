import {homeImages} from '@constants/images';
import {Category, Highlight} from '@interfaces/home';

const highlightsData: Highlight[] = [
  {
    id: '1',
    title: 'Surfing',
    description: 'Best Hawaiian islands for surfing.',
    image: homeImages.SURFING,
  },
  {
    id: '1',
    title: 'Hula',
    description: 'Try it yourself.',
    image: homeImages.HULA,
  },
  {
    id: '1',
    title: 'Vulcanoes',
    description: 'Volcanic conditions can change at any time.',
    image: homeImages.VULCANO,
  },
];

const categoriesData: Category[] = [
  {id: '1', title: 'Adventure'},
  {id: '2', title: 'Culinary'},
  {id: '3', title: 'Eco-tourism'},
  {id: '4', title: 'Family'},
  {id: '5', title: 'Sport'},
];

export {highlightsData, categoriesData};
