/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  ScrollView,
  Image,
  Text,
  Dimensions,
  TextInput,
  Keyboard,
} from 'react-native';

export default class VerticalScrollView extends Component {
  render() {
    let screenWidth = Dimensions.get('screen').width;
    return (
      <ScrollView
        keyboardDismissMode="on-drag"
        maximumZoomScale={3}
        minimumZoomScale={0.5}>
        <Image
          source={require('../images/mypic.jpg')}
          style={{
            width: screenWidth,
            marginTop: 50,
            resizeMode: 'contain',
            alignContent: 'center',
            alignItems: 'center',
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            padding: 10,
            backgroundColor: 'gray',
            color: 'white',
            fontSize: 22,
          }}>
          this is Text
        </Text>
        <TextInput
          placeholder="Enter text here"
          style={{
            height: 100,
            margin: 0,
            padding: 10,
            borderColor: 'purple',
            borderWidth: 2,
            width: screenWidth - 20,
          }}
          multiline={true}
          onChangeText={(text) => {
            this.setState((previousState) => {
              return {
                descriptionText: text,
              };
            });
          }}
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
        />
        <Text
          style={{
            textAlign: 'center',
            padding: 10,
            backgroundColor: 'gray',
            color: 'white',
            fontSize: 22,
          }}>
          this is Text
        </Text>
        <Image
          source={require('../images/mypic.jpg')}
          style={{
            width: screenWidth,
            marginTop: 50,
            resizeMode: 'contain',
            alignContent: 'center',
            alignItems: 'center',
          }}
        />
        <Image
          source={require('../images/mypic.jpg')}
          style={{
            width: screenWidth,
            marginTop: 50,
            resizeMode: 'contain',
            alignContent: 'center',
            alignItems: 'center',
          }}
        />
      </ScrollView>
    );
  }
}
