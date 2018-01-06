import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#66FFFF'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'space-around'
  }
};

const Header = ({ headerText }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{headerText}</Text>
    </View>
  );
};

export { Header };

