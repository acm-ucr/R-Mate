import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const Bug = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity className="" onPress={() => navigation.navigate('Profile')}>
        <View className="bg-blue-400 w-1/2">
          <Text className="">Back</Text>
        </View>
      </TouchableOpacity>
      <Text>Bug</Text>
    </View>
  );
};

export default Bug;
