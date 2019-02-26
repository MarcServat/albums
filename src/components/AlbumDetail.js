import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Card from './Card';
import CardSection from "./CardSection";

class AlbumDetail extends Component {
  constructor(props) {
    super(props);
  }

  render()  {
    const {title, artist, thumbnail_image} = this.props.album;
    return (
        <Card>
          <CardSection>
            <View>
              <Image style={styles.thumbnailStyle} source={{uri: thumbnail_image}}/>
            </View>
            <View style={styles.headerContainerStyles}>
              <Text>{title}</Text>
              <Text>{artist}</Text>
            </View>
          </CardSection>
        </Card>
    );
  }
}

const styles = {
  headerContainerStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    width: 50,
    height: 60
  }
};

export default AlbumDetail;