import {registerRootComponent} from 'expo';
import {AppRegistry} from 'react-native';
import App from './App.js';

AppRegistry.registerComponent("todoList", () => App);
registerRootComponent(App);

