import React from 'react';
import LandingScreen from '../screens/LandingScreen';
import {View} from 'react-native';

// A component in the middle doesn't have to
// pass the theme down explicitly
const Box = () => {
  return (
    <View>
      <LandingScreen />
    </View>
  );
};

export default Box;
