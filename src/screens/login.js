import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import BellTower from '../../assets/bellTower.svg';
import UCLogo from '../../assets/UCLogo.svg';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full h-full">
      <SafeAreaView className="h-full w-full bg-rmate-blue flex flex-col justify-center items-center z-0">
        <View className="absolute top-[10%] left-5 flex flex-row items-center">
          <UCLogo width={50} height={50} />
          <Text className="text-rmate-offwhite text-2xl font-poppins-600 ml-2">RIVERSIDE</Text>
        </View>
        <View className="absolute top-40 left-5 flex flex-col">
          <Text className="text-rmate-offwhite text-3xl font-poppins-400">Welcome to</Text>
          <View className="flex flex-row">
            <Text className="text-rmate-yellow text-4xl font-poppins-400">R</Text>
            <Text className="text-rmate-offwhite text-4xl font-poppins-400">&apos;Mate</Text>
          </View>
          <View className="flex flex-col flex-wrap">
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text className="text-rmate-offwhite text-lg font-poppins-400">The University of</Text>
            <Text className="text-rmate-offwhite text-lg font-poppins-400">
              California, Riverside&apos;s
            </Text>
            <Text className="text-rmate-offwhite text-lg font-poppins-400 mt-1">
              online community!
            </Text>
          </View>
        </View>
        <View className="absolute bottom-0 right-0 justify-end mr-4">
          <BellTower width={146} height={727} />
        </View>
        <View className="absolute bottom-20 left-0 w-full">
          <View className="flex justify-center items-center flex-row w-full">
            <TouchableOpacity
              className="bg-rmate-yellow rounded-full w-9/12 h-16 justify-center items-center "
              onPress={() => navigation.navigate('BottomNavigator')}
            >
              <Text className="text-rmate-blue text-2xl font-poppins-600 ml-2">Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;
