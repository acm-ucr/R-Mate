import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Feedback = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity className="" onPress={() => navigation.navigate('Profile')}>
        <View className="bg-blue-400 w-1/2">
          <Text className="">Back</Text>
        </View>
      </TouchableOpacity>
      <Text>Feedback</Text>
    </View>
  );
};

export default Feedback;
