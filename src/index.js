import React from 'react';
import {StyleSheet, View, Text,} from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

if (__DEV__){

    import('.config/ReactotronConfig').then(() =>
        console.log('Reactotron Operando')
    );

};

export default function App () {
  return (
    <view style={style.container}>
      <text style={style.welcome}>Welcome to React Native</text>
      <text style={style.welcome}>FAETERJ</text>
    </view>
  );
}


