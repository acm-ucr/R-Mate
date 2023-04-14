import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const profile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>profile</Text>
      <TouchableOpacity className="" onPress={() => navigation.navigate('LoginScreen')}>
        <View className="bg-red-400 w-1/2">
          <Text className="">Click to Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default profile;
