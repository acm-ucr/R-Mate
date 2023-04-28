import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import BellSVG from '../../assets/bell.svg';

const notifications = [
  {
    title: 'required milestone',
    required: false,
  },
  {
    title: 'required milestone',
    required: true,
  },
  {
    title: 'required milestone',
    required: false,
  },
  {
    title: 'required milestone',
    required: true,
  },
  {
    title: 'required milestone',
    required: false,
  },
];

const Notifications = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-rmate-lightblue flex flex-col justify-start">
      <View className="p-3 h-fit">
        <TouchableOpacity
          className="flex flex-row items-center"
          onPress={() => navigation.navigate('Profile')}
        >
          <Feather name="arrow-left" size={24} color="black" />
          <BellSVG width={30} />
        </TouchableOpacity>
      </View>
      <View className="w-full h-full px-5 mt-4">
        {notifications.map((notification, index) => (
          <View key={index} className="w-full bg-white my-2 p-2 rounded-lg">
            {notification.required === true && (
              <Text className="text-red-500 font-poppins-500">required</Text>
            )}

            <Text className="font-poppins-600">{notification.title}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
