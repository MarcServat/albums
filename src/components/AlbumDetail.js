import React, {Component} from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from "./CardSection";
import Button from "./Button";

class AlbumDetail extends Component {
  constructor(props) {
    super(props);
  }

  render()  {
    const {title, artist, thumbnail_image, image, url} = this.props.album;
    const {
      thumbnailStyle,
      headerContainerStyles,
      thumbnailContainerStyle,
      headerTextSyle,
      imageStyle
    } = styles;

    return (
        <Card>
          <CardSection>
            <View style={thumbnailContainerStyle}>
              <Image style={thumbnailStyle} source={{uri: thumbnail_image}}/>
            </View>
            <View style={headerContainerStyles}>
              <Text style={headerTextSyle}>{title}</Text>
              <Text>{artist}</Text>
            </View>
          </CardSection>
          <CardSection>
            <Image style={imageStyle} source={{uri: image}}/>
          </CardSection>
          <CardSection>
            <Button onPress={() => Linking.openURL(url)} >Buy Now!!</Button>
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
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;