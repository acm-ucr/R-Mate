import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity className="" onPress={() => navigation.navigate('Profile')}>
        <View className="bg-blue-400 w-1/2">
          <Text className="">Back</Text>
        </View>
      </TouchableOpacity>
      <Text>Account</Text>
    </SafeAreaView>
  );
};

export default Account;
