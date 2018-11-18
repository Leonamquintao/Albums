import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default class AlbumDetail extends Component<{}> {
  render() {
    /* Destruction aproach instead of use 'this.props.album' */
    const { title, artist, thumbnail_image, image } = this.props.album;
    return (
      <Card>
        <CardSection>
          <View style={ styles.imageWrapper }>
            <Image  style={ styles.imageSpace } source={{ uri: thumbnail_image }}/>
          </View>

          <View style={ styles.headerContent }>
            <Text style={ styles.headerTitle }> { title } </Text>
            <Text> { artist } </Text>
          </View>
        </CardSection>

        <CardSection>
          <Image style={ styles.albumCover } source={{ uri: image }} />
        </CardSection>

        <CardSection>
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
  albumCover: {
    height: 300,
    flex: 1,
    width: null
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 10,
  },
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})
