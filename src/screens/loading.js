import { View, Image } from 'react-native';
import React from 'react';

const LoadingScreen = () => {
  return (
    <View className="h-full w-full bg-rmate-blue flex justify-center items-center">
      <Image
        source={require('../../assets/UCRlogo.svg')}
        className="w-32 h-32"
        resizeMode="contain"
      />
    </View>
  );
};

export default LoadingScreen;
