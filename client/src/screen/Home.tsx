import React, { useState, useEffect } from "react";
import { Text, View } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export default function Home() {
    
    const onGoogleButtonPress = async () => {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential);
    }
    return(
        <View>
            <GoogleSigninButton onPress={() => onGoogleButtonPress()} />
        </View>
    )
}