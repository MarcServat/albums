import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: []};

  componentDidMount(): void {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(response => {
      this.setState({albums: response.data})
    })
  }

  renderAlbums() {
    return this.state.albums.map((album, i) => <AlbumDetail key={i} album={album}/>)

  }

  render(): React.ReactNode {
    return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
    );
  }
}

export default AlbumList;