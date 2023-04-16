import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import RCard from './RCard';
import { useNavigation } from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity className="" onPress={() => navigation.navigate('Profile')}>
        <View className="bg-blue-400 w-1/2">
          <Text className="">Back</Text>
        </View>
      </TouchableOpacity>
      <Text>Account</Text>
      <RCard />
    </View>
  );
};

export default Account;
