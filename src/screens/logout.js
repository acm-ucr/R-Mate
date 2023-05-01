import React from 'react';
import { Pressable, Text, View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import UCRSVG from '../../assets/UCR.svg';
import BellSVG from '../../assets/bell.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LogoutScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-rmate-lightblue w-full h-full">
      <View className="p-3">
        <TouchableOpacity
          className="flex flex-row items-center"
          onPress={() => navigation.navigate('Profile')}
        >
          <Feather name="arrow-left" size={24} color="black" />
          <BellSVG width={30} height={30} padding={3} />
        </TouchableOpacity>
      </View>

      <View className="w-full h-full p-3">
        <Text className="text-black text-lg font-poppins-700 mt-4">
          You sure you want to logout?
        </Text>

        <UCRSVG />
        <Pressable
          onPress={() => navigation.navigate('LoginScreen')}
          className="self-center w-5/6 bg-rmate-yellow rounded-3xl p-2.5 mt-6 leading-8"
        >
          <Text className="text-xl poppins-600 text-black font-bold self-center normalcase">
            Confirm
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LogoutScreen;
