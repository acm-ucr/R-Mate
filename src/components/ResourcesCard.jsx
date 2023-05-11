import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ResourcesCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="flex items-center"
      onPress={() => {
        navigation.navigate(props.navigate);
      }}
    >
      <View className="mb-2 ml-5 bg-white rounded-xl h-16 w-16 flex justify-center items-center">
        <props.icon width={40} height={40} />
      </View>

      <Text className="text-sm font-poppins-600 mb-2 ml-5">{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ResourcesCard;
