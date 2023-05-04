import { View, Text } from 'react-native';
import React from 'react';

const ResourcesCard = (props) => {
  return (
    <View className="flex items-center">
      <View className="mb-2 bg-white rounded-xl h-16 w-16 flex justify-center items-center">
        <props.icon width={100} height={100} />
      </View>
      <Text className="text-sm font-poppins-600">{props.text}</Text>
    </View>
  );
};

export default ResourcesCard;
