import React, {Component} from 'react';
import {
  ScrollView,
  Image,
  Text,
  Dimensions,
  TextInput,
  View,
  Keyboard,
} from 'react-native';
import flatListData from '../data/flatListData';
import {FlatList} from 'react-native-gesture-handler';
import FlexDirection from './FlexDirection';

export default class SampleFlatList extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={flatListData}
          renderItem={({item, index}) => {
            console.log(`${JSON.stringify(item)}, index = ${index}`);
            return <ItemList item={item} index={index} />;
          }}
        />
      </View>
    );
  }
}

class ItemList extends Component {
  render() {
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: this.props.index % 2 == 0 ? 'gray' : 'white',
          flex: 1,
          flexDirection: 'row',
        }}>
        <Image
          source={{uri: this.props.item.img}}
          style={{width: 100, height: 100}}
        />
        <View style={{flex: 1, flexDirection: 'column', marginStart: 20}}>
          <Text>{this.props.item.name}</Text>
          <Text>{this.props.item.desc}</Text>
        </View>
      </View>
    );
  }
}
