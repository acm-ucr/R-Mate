import { View, Text, Image } from 'react-native';
import React from 'react';

const ResourcesCard = ({ icon, text }) => {
  return (
    <View className="flex items-center">
      <View className="mb-2 bg-white rounded-xl h-16 w-16 flex justify-center items-center">
        <Image source={icon} className="w-12 h-12" resizeMode="contain" />
      </View>
      <Text className="text-sm font-poppins-600">{text}</Text>
    </View>
  );
};

export default ResourcesCard;
