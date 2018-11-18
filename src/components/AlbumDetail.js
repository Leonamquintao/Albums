import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

export default class AlbumDetail extends Component<{}> {
  render() {
    return (
      <Card>
        <Text> { this.props.album.title } </Text>
      </Card>
    );

  }
}
