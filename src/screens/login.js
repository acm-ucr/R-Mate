import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex flex-col justify-center items-center">
      <Text>LoginScreen</Text>
      <TouchableOpacity
        className="flex flex-col mr-3"
        onPress={() => navigation.navigate('BottomNavigator')}
      >
        <View className="bg-red-400">
          <Text className="">Click to Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
