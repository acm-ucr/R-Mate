import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
// import ProfileSVG from '../assets/bellTower.svg';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex flex-col justify-center items-center">
      <Text>LoginScreen</Text>
      <TouchableOpacity
        className="flex flex-col mr-3"
        onPress={() => navigation.navigate('BottomNavigator')}
      >
        <View className="bg-red-400">
          <Text className="">Click to Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex flex-col mr-3"
        onPress={() => navigation.navigate('LoadingScreen')}
      >
        <View className="bg-blue-400">
          <Text className="">Click to Loading Screen</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

{/* <View
className="h-screen flex"
style={{ borderColor: 'rgba(255, 255, 255, 0.5)', borderWidth: 20, borderRadius: 5 }}
>
<View
  style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003DA5',
  }}
>
  <Image
    source={require('../../assets/bellTower.svg')}
    className="w-32 h-1/2"
    resizeMode="contain"
  />
   <Image
    source={require('../../assets/UCLogo.svg')}
    className="w-32 h-1/2"
    resizeMode="contain"
  />
  <Text style={{ position: 'absolute', top: -17, left: 0 }}>Login</Text>
  <TouchableOpacity
    style={{
      position: 'absolute',
      top: 700,
      backgroundColor: '#D3D3D3',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}
    onPress={() => navigation.navigate('BottomNavigator')}
  >
    <View>
      <Text style={{ color: '#00274C', fontWeight: 'bold', fontSize: 18 }}>Sign In</Text>
    </View>
  </TouchableOpacity>
</View>
</View> */}