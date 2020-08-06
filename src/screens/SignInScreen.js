/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  Text,
  Keyboard,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import GreetingText from '../../components/GreetingText';
import {ScrollView, Switch} from 'react-native-gesture-handler';

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailText: 'please type your text',
      passwordText: 'please type password text ',
      descriptionText: 'please type description text ',
    };
  }

  UNSAFE_componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        this.setState(() => {
          return {emailText: 'Keyboard is shown'};
        });
      },
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        this.setState(() => {
          return {emailText: 'Keyboard is hidden'};
        });
      },
    );
  }

  UNSAFE_componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  showAlert = (message) => {
    Alert.alert(message);
  };

  render() {
    let uriImg = {
      uri: 'https://hackernoon.com/hn-images/1*ub1DguhAtkCLvhUGuVGr6w.png',
    };
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <GreetingText name=" Vu" /> */}
          <Image source={uriImg} style={styles.robotView} />

          {/* TouchableHighlight */}
          <TouchableOpacity
            activeOpacity={0.1}
            underlayColor="red"
            onShowUnderlay={() => {
              // alert('onShowUnderlay onShowUnderlay onShowUnderlay');
            }}
            onPress={() => {}}>
            <View backgroundColor="" style={{padding: 5}}>
              <Text>TouchableHighlight</Text>
            </View>
          </TouchableOpacity>

          <Text>{this.state.emailText}</Text>

          <FormInput
            labelName="enter email here"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState((previousState) => {
                return {
                  emailText: text,
                };
              });
            }}
          />
          <FormInput
            labelName="enter password here"
            keyboardType="default"
            onChangeText={(text) => {
              this.setState((previousState) => {
                return {
                  passwordText: text,
                };
              });
            }}
            secureTextEntry={true}
          />

          <TextInput
            style={{
              height: 100,
              margin: 10,
              padding: 10,
              borderColor: 'purple',
              borderWidth: 2,
              width: 200,
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
          <FormButton
            title="Login"
            modeValue="contained"
            labelStyle={styles.loginButtonLabel}
            style={{borderRadius: 30, shadowRadius: 30, backgroundColor: 'red'}}
            onPress={() => {
              this.showAlert('Login button is pressed');
            }}
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
