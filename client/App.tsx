import React, { useState, useEffect } from "react";
import { Provider } from 'react-redux'
import { store } from './src/store/index'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import BottomNavigation from './src/navigation'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';



function App(): JSX.Element {

  useEffect(() =>{
    googleSigninConfigure();
  })

  const googleSigninConfigure = () => {
    GoogleSignin.configure({
      webClientId:
        '44559618821-u4jnrbgj4vn0dnohq157nbf5138geg46.apps.googleusercontent.com',
    })
  }

  return (
    // <Provider store={store}>
      <BottomNavigation />
    // </Provider>
  );
}

const styles = StyleSheet.create({

});

export default App;
