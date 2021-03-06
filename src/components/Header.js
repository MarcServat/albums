import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
  const {textStyle, viewStyle} = styles;

  return (
      <View style={viewStyle}>
        <Text style={textStyle}>{props.title}</Text>
      </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 9.2,
    elevation: 2,


  },
  textStyle: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default Header;