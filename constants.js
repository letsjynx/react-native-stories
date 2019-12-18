import { Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  width,
  statusbarHeight: StatusBar.currentHeight,
  height,
  colors: {
    theme_dark: '#272640',
    darkgrey: '#C9C9C9',
    func_yellow: '#FED94D'
  }
};
