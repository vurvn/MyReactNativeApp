import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import GreetingText from '../../components/GreetingText';
import {ScrollView, Switch} from 'react-native-gesture-handler';

export default class SignInScreen extends React.Component {
  render() {
    let uriImg = {
      uri: 'https://hackernoon.com/hn-images/1*ub1DguhAtkCLvhUGuVGr6w.png',
    };
    return (
      <ScrollView>
        <View style={styles.container}>
          <GreetingText name="Vu" />
          <Image source={uriImg} style={styles.robotView} />

          <FormInput labelName="enter text here" />
          <FormButton
            title="Login"
            modeValue="contained"
            labelStyle={styles.loginButtonLabel}
          />

          <FormButton
            title="New user? Join here"
            modeValue="text"
            uppercase={false}
            labelStyle={styles.navButtonText}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  robotView: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    marginTop: 50,
    paddingTop: 50,
    alignItems: 'center',
  },
  loginButtonLabel: {
    fontSize: 22,
  },
});
