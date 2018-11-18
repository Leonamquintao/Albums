import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class CardSection extends Component <{}> {
  render() {
    return (
      <View style={ styles.container }></View>
    );
  }
}

const styles = StyleSheet.crate({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});
