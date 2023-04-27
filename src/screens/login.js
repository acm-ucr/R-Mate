import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import BellTower from '../../assets/bellTower.svg';
import UCLogo from '../../assets/UCLogo.svg';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="h-full w-full bg-rmate-blue flex flex-col justify-center items-center">
      <View className="w-full flex flex-row justify-end">
        <BellTower width={146} height={727} />
      </View>
      <View className="absolute top-12 left-10 flex flex-row items-center">
        <UCLogo width={50} height={50} />
        <Text className="text-rmate-offwhite text-2xl font-poppins-600 ml-2">RIVERSIDE</Text>
      </View>
      <View className="absolute top-40 left-5 flex flex-col">
        <Text className="text-rmate-offwhite text-3xl font-poppins-400 ml-2">Welcome to</Text>
        <View className="flex flex-row">
          <Text className="text-rmate-yellow text-5xl font-poppins-400 ml-2">R</Text>
          <Text className="text-rmate-offwhite text-5xl font-poppins-400 ml-2">&apos;Mate</Text>
        </View>
        <View className="flex flex-col flex-wrap">
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text className="text-rmate-offwhite text-lg font-poppins-400 ml-2">
            The University of
          </Text>
          <Text className="text-rmate-offwhite text-lg font-poppins-400 ml-2">
            California, Riverside&apos;s
          </Text>
          <Text className="text-rmate-offwhite text-lg font-poppins-400 mt-1 ml-2">
            online community!
          </Text>
        </View>
      </View>
      <TouchableOpacity className="absolute bottom-20 left-0 w-full">
        <View className="flex justify-center items-center flex-row w-full">
          <TouchableOpacity
            className="bg-rmate-yellow rounded-full w-9/12 h-16 justify-center items-center"
            onPress={() => navigation.navigate('BottomNavigator')}
          >
            <Text className="text-rmate-blue text-2xl font-poppins-600 ml-2">Sign In</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
