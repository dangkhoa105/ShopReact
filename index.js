import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';
import 'react-native-gesture-handler'


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);



AppRegistry.registerComponent('Shop', () => App);
