import React, { Component } from 'react';
import RootNavigate, {MAINMAIN, SIDEMAIN} from './Components/Route/Route1.js';
import store from './Redux/Store.js';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <RootNavigate/>
      </Provider>
    );
  }
}
