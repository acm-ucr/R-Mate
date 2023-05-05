import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  TextInput,
  Pressable,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import BugSVG from '../../assets/bug.svg';
import { useState } from 'react';

const Bug = () => {
  const [message, setMessage] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-rmate-lightblue w-full h-full">
      <View className="p-3 w-full">
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          className="flex flex-row items-center"
        >
          <Feather name="arrow-left" size={24} color="black" />
          <BugSVG />
        </TouchableOpacity>
      </View>
      <View className="w-full p-3">
        <Text
          className="text-black text-3xl font-bold"
          style={{ fontFamily: 'Poppins_600SemiBold' }}
        >
          Thank you for catching this bug!
        </Text>

        <Text
          className="text-black text-lg font-regular mt-3"
          style={{ fontFamily: 'Poppins_400Regular' }}
        >
          Please describe the bug below and we will try to fix it ASAP!
        </Text>
      </View>
      <View className="w-full h-[60vh] py-6 px-3">
        <TextInput
          multiline
          className="h-full poppins-400 bg-rmate-white rounded-md p-2.5 flex-1"
          placeholder="Description"
          placeholderTextColor="#6F6D6D"
          value={message}
          onChangeText = {(text)=>{
            setMessage(text)
          }}
        />

        <Pressable
          onPress={() => Alert.alert(message)}
          className="self-end w-1/3 bg-rmate-yellow rounded-3xl p-2.5 mt-6 leading-8"
        >
          <Text className="text-xl poppins-600 text-rmate-black font-bold self-center normalcase">
            Submit
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Bug;
