/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Buttun from "./src/components/btn";

const App: () => React$Node = () => {
  const handlePress = () => {
    alert('a')
  }
  return (
    <SafeAreaView>
      <Buttun style={BtnStyle} title='link' onPress={handlePress} />
    </SafeAreaView>
  )
};

const BtnStyle = {
  backgroundColor: '#6cf',
  borderRadius: 5,
  color: '#fff',
  flexDirection: 'column',
  alignItems: "center",
  padding: 10,
  textStyle: {
    color: '#fff'
  }
}

export default App;
