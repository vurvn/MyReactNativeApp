import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class GreetingText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showText: true,
    };

    var taskToDo = () => {
      this.setState((previousState) => ({
        showText: !previousState.showText,
      }));
    };

    const timeBlink = 500;

    setInterval(taskToDo, timeBlink);
  }
  render() {
    const textToDisplay = this.state.showText ? 'Hello' : this.props.name;
    return (
      <View style={{alignItems: 'center'}}>
        <Text
          style={
            this.state.showText ? styles.whiteTextStyle : styles.pinkTextStyle
          }>
          {textToDisplay}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  whiteTextStyle: {
    fontSize: 44,
    color: '#000',
  },
  pinkTextStyle: {
    fontSize: 54,
    color: '#ffdd5f',
    fontWeight: 'bold',
  },
});
