import { View, Text, SafeAreaView, Image, TextInput, Pressable, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import React from 'react';

const Feedback = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-rmate-lightblue min-w-[100%] min-h-[100%]">
      <View className="flex-row w-full p-3">
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Feather name="arrow-left" size={24} color="rmate-black" />
        </TouchableOpacity>
        <Image source={require('../../assets/feedback.svg')} className="w-7 h-7 p-3" />
      </View>
      <View className="flex flex-column gap-y-[5vh] w-full h-full px-5">
        <View className="flex flex-column gap-y-5">
          <Text className="text-black text-[32px] font-poppins-700">
            Feel free to leave us some feedback!
          </Text>
          <Text className="text-black text-[15px] font-poppins-400">
            The R&apos;Mate Team is always striving to improve and we appreciate any and all
            feedback!
          </Text>
        </View>
        <View className="flex flex-column gap-y-5 w-full h-[65vh]">
          <TextInput
            multiline
            placeholder="Feedback"
            placeholderTextColor="#6F6D6D"
            className="flex-1 font-poppins-400 h-450 bg-rmate-white rounded-md p-3"
          />
          <Pressable style={{ alignSelf: 'flex-end' }} onPress={() => Alert.alert('Submitted!')}>
            <Text className="bg-rmate-yellow rounded-full px-4 py-2 w-fit font-poppins-700 text-xl uppercase text-black">
              Submit
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Feedback;
