import { View } from 'react-native';
import React from 'react';
import Welcome from '../components/Welcome';

const HomeScreen = ({ name }) => {
  return (
    <View className="w-full flex flex-row">
      <Welcome name="Ashley" />
    </View>
  );
};

export default HomeScreen;
