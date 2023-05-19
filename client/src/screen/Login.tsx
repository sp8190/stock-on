import React from 'react';
import { Text, View } from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
  } from '@react-native-google-signin/google-signin';

export default function Login(props : any) {
    return (
        <View>
            <Text>Login Page</Text>
            <GoogleSigninButton onPress={props.onGoogleButtonPress} />
        </View>
    );
}