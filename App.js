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
import AlbumList from './src/components/AlbumList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const title = 'Albums';
    return (
        <View style={{flex: 1}}>
          <Header title={title}/>
          <AlbumList />
        </View>
    );
  }
}

