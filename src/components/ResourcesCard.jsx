import { View, Text } from 'react-native';
import React from 'react';

const ResourcesCard = (props) => {
  return (
    <View className="flex items-center">
      <View className="mb-2 ml-5 bg-white rounded-xl h-16 w-16 flex justify-center items-center">
        <props.icon width={40} height={40} />
      </View>
      <Text className="text-sm font-poppins-600 mb-2 ml-5">{props.text}</Text>
    </View>
  );
};

export default ResourcesCard;
