/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       {/*welcome为Text文本样式的引用：style_id*/}
        <Text style={styles.welcome}>
          Welcome to React Native!邵文文
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}
// 这里是style的一个内联样式：包含四个id;
const styles = StyleSheet.create({
  //flex是
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    // 字体大小为20，文本居中，外边距为10；
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

    // 文本居中，颜色，外边距底部为10；
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});