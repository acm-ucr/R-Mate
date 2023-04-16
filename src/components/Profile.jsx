import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>profile</Text>
      <TouchableOpacity className="" onPress={() => navigation.navigate('BottomNavigator')}>
        <View className="bg-yellow-400 w-1/2">
          <Text className="">back</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="" onPress={() => navigation.navigate('Account')}>
        <View className="bg-blue-400 w-1/2">
          <Text className="">account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="" onPress={() => navigation.navigate('Notification')}>
        <View className="bg-green-400 w-1/2">
          <Text className="">Notification</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="" onPress={() => navigation.navigate('LoginScreen')}>
        <View className="bg-red-400 w-1/2">
          <Text className="">Click to Logout</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="" onPress={() => navigation.navigate('Bug')}>
        <View className="bg-purple-400 w-1/2">
          <Text className="">bug</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="" onPress={() => navigation.navigate('Feedback')}>
        <View className="bg-pink-400 w-1/2">
          <Text className="">feedback</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
