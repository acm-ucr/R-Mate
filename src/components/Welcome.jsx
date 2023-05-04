import { View, Text } from 'react-native';
import React from 'react';

const Welcome = ({ name }) => {
  return (
    <View className="w-full flex flex-col">
      <Text className="bg-rmate-light gray text-rmate-blue text-2xl pt-4  pl-4 pr-4 font-poppins-500">
        Welcome,
      </Text>
      <Text className="bg-rmate-light gray text-rmate-yellow text-2xl pt-1 pb-2 pl-4 pr-4 font-poppins-500">
        {name}
      </Text>
    </View>
  );
};

export default Welcome;
