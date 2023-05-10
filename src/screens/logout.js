import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
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
          className="flex-row items-center"
          onPress={() => navigation.navigate('Profile')}
        >
          <Feather name="arrow-left" size={24} color="black" />
          <BellSVG width={30} height={30} padding={3} />
        </TouchableOpacity>
      </View>

      <View className="ml-5 mt-3">
        <Text className="text-black text-left text-3xl font-poppins-600 mt-4">
          You sure you want {'\n'}
          to logout?
        </Text>
      </View>
      <View className="w-full h-1/2 pt-3 justify-center items-center">
        <UCRSVG />
      </View>
      <View className="w-full h-1/2 justify-center">
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          className="bg-rmate-yellow rounded-3xl w-5/6 p-2.5 self-center"
        >
          <Text className="text-2xl poppins-600 text-rmate-black font-bold self-center normalcase">
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LogoutScreen;
