import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const BaseSize = {
  fullHeight: height * 1,
  halfHeight: height * 0.5,
};
export default BaseSize;
