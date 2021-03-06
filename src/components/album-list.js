import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './album-detail';
import { Header, Card, CardSection } from './common';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({albums: response.data }));
  }

  renderAlbumDetail(album) {
    return (
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.state.albums.map(album => this.renderAlbumDetail(album))}
      </ScrollView>
    );
  }
}

export default AlbumList;

