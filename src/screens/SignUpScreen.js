import React, {Component, useState} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Title} from 'react-native-paper';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import GreetingText from '../../components/GreetingText';

export default function SignUpScreen({navigation}) {
  const [email, setEmail] = useState('');
  let uriImg = {
    uri: 'https://hackernoon.com/hn-images/1*ub1DguhAtkCLvhUGuVGr6w.png',
  };

  return (
    <View style={styles.container}>
      <Image source={uriImg} style={styles.robotView} />
      <FormInput
        labelName="Email"
        value={email}
        autoCapitalize="none"
        onChangeText={(userEmail) => setEmail()}
      />
      <FormButton
        title="Sign Up"
        modeValue="contained"
        labelStyle={styles.loginButtonLabel}
      />
    </View>
  );
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
