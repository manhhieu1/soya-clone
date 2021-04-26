/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import home from './screens/home';
import BeginScreen from './screens/BeginScreen'
import FBHeader from './screens/header'
import odering from './screens/odering'
AppRegistry.registerComponent(appName, () => odering);
