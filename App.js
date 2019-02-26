/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from './src/components/Header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const title = 'Albums'
    return (
          <Header title={title}/>
    );
  }
}

