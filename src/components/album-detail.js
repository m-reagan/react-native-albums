import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import { Card, CardSection, Button } from './common';

const styles = {
  imageStyle: {
    height: 200,
    flex: 1,
    width: null
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  titleViewStyle: {
    justifyContent: 'space-around',
    marginLeft: 10
  },
  titleTextStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'grey'
  }
};

const AlbumDetail = ({ album }) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Image style={styles.thumbnailStyle} source={{ uri: album.thumbnail_image }} />
        </View>
        <View style={styles.titleViewStyle}>
          <Text style={styles.titleTextStyle}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.imageStyle} source={{uri: album.image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(album.url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
