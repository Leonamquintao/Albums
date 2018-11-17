import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

// Class based component.
export default class AlbumList extends Component<{}> {

  //Component level state
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((res) => {
      this.setState({ albums: res.data });
    }).catch((error) => {
      console.log(error);
    });
  }

  renderAlbums() {
    return this.state.albums.map(item =>
      /* the best scenario is to use the 'id' of the item interaction
      but in this particular case, the API dont have this prop. */

      /* album here is a PROP "album={ item }" */
      <AlbumDetail key={ item.title } album={ item } />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        { this.renderAlbums() }
     </ScrollView>
    );
  }
}
