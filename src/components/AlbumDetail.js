import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default class AlbumDetail extends Component<{}> {
  render() {
    /* Destruction aproach instead of use 'this.props.album' */
    const { title, artist, thumbnail_image } = this.props.album;
    return (
      <Card>
        <CardSection>
          <View>
            <Image  style={ styles.imageSpace } source={{ uri: thumbnail_image }}/>
          </View>

          <View style={ styles.headerContent }>
            <Text> { title } </Text>
            <Text> { artist } </Text>
          </View>
        </CardSection>
      </Card>
    );

  }
}

const styles = StyleSheet.create({
  imageSpace: {
    height: 50,
    width: 50,
  },
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
})
