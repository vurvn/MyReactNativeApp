import React, {Component} from 'react';
import {View} from 'react-native';

export default class FlexDimension extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 40, backgroundColor: 'yellow'}} />
        <View style={{flex: 60, backgroundColor: 'red'}} />
        <View style={{height: 200, backgroundColor: 'green'}} />
      </View>
    );
  }
}
