import { View, Text, SafeAreaView, Image, TextInput, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import React from 'react';

const Feedback = () => {
  const navigation = useNavigation();
  return (
      <SafeAreaView className="bg-rmate-lightblue w-full h-full">
        <View className="flex-row w-full p-3">
          <TouchableOpacity className="" onPress={() => navigation.navigate('Profile')}>
            <Feather name="arrow-left" size={24} color="rmate-black" />
          </TouchableOpacity>
          <Image source={require('../../assets/feedback.svg')} classname="w-7 h-7 p-3" />
        </View>
        <View className="w-full p-6">
          <Text
            className="text-black text-[32px] font-bold"
            style={{ fontFamily: 'Poppins_400SemiBold' }}
          >
            Feel free to leave us some feedback!
          </Text>
          <Text
            className="text-black text-[15px] font-regular mt-3"
            style={{ fontFamily: 'Poppins_400Regular'}}
          >
            The R&apos;Mate Team is always striving to improve and we appreciate any and all
            feedback!
          </Text>
        </View>

        <View classname="flex-column w-full h-[65vh] p-6">
          <TextInput multiline placeholder='Feedback'/>
          <Pressable onPress={() => Alert.alert("Submitted!")}>
            <Text className="bg-rmate-yellow rounded-full px-4 py-2 w-fit text-black font-semibold mt-4">Submit</Text>
          </Pressable>
        </View>
      </SafeAreaView>
  );
};

export default Feedback;
