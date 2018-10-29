import React, { Component } from 'react';
import { Platform, View } from 'react-native';

// components
import Header from './src/components/Header';
// import AlbumList from './src/components/AlbumList';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
// Ex: <Text>{ instructions }</Text>

// const plat = Platform.select({
//   ios: 'Apple IOS',
//   android: 'Google Android',
// });
// Ex: <Text>Welcome to React Native in { plat }!</Text>


export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
      </View>
    );
  }
}
