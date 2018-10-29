import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

// Class based component.
export default class AlbumList extends Component<{}> {

  //Component level state
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => {
      this.setState({ albums: response.data });
    }).catch((error) => {
      console.log(error);
    });
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      //the best scenario is to use the 'id' of the item interaction
      //but in this particular case, the API dont have this prop.
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}
