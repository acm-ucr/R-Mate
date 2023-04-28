import { View, Text } from 'react-native';
import React from 'react';

const Title = ({ title }) => {
  return (
    <View className="flex flex-row">
      <View className="bg-rmate-blue flex flex-row rounded-xl py-1.5 px-4 my-2 mx-4">
        <Text className="text-white font-poppins-500 text-base">{title}</Text>
      </View>
    </View>
  );
};

export default Title;
