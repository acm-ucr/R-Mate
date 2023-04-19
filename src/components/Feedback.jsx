import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const Feedback = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full flex justify-center items-center">
      <View className="bg-rmate-lightblue w-full h-[80vh] p-3">
        <TouchableOpacity className="" onPress={() => navigation.navigate('Profile')}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View className="w-5/6 flex items-center justify-center h-2/7">
          <Text
            className="text-rmate-black text-3xl font-bold my-4"
            style={{ fontFamily: 'Poppins_400Regular' }}
          >
            Feel free to leave us some feedback!
          </Text>
          <Text
            className="text-rmate-black text-3xl my-4"
            style={{ fontFamily: 'Poppins_400Regular', fontSize: 15, f }}
          >
            The R&apos;Mate Team is always striving to improve and we appreciate any and all
            feedback!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Feedback;
