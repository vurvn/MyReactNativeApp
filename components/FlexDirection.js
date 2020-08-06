import React, {Component} from 'react';
import {View} from 'react-native';

export default class FlexDirection extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', margin: 50}}>
        <View
          style={{width: 50, height: 50, backgroundColor: 'yellow', margin: 10}}
        />
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
