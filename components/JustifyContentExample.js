/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';

export default class JustifyContentExample extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: 50,
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        }}>
        <View style={{height: 50, backgroundColor: 'yellow', margin: 10}} />
        <View
          style={{width: 50, height: 50, backgroundColor: 'red', margin: 10}}
        />
        <View
          style={{width: 50, height: 50, backgroundColor: 'green', margin: 10}}
        />
      </View>
    );
  }
}
