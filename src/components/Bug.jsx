import { View, Text, TouchableOpacity, Image, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const Bug = () => {
  const navigation = useNavigation();
  return (
    // <View className = "bg-rmate-white w-full flex justify-center space-x-2">
    //   <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
    //     <Feather name="arrow-left" size ={24} color="black" />
    //     <Image source = {require('../../assets/bug.svg')} />
    //   </TouchableOpacity>
    //   <View>
        
    //   </View>
    //   <Text>Bug</Text>
    // </View>
    

    <SafeAreaView className="bg-blue-200 w-full h-full">
      <View className="flex-row w-full p-3">
        <TouchableOpacity onPress = {() => navigation.navigate('Profile')}>
          <Feather name="arrow-left" size={24} color="rmate-black"/>
        </TouchableOpacity>
        <Image 
          source={require('../../assets/bug.svg')}
        />
      </View>

      {/* Texts */}

      <View className="w-full p-6">
        <Text 
          className="text-black text-[30px] font-semibold"
          style={{ fontFamily: 'Poppins_400Regular' }}
        > 
          Thank you for catching this bug! 
        </Text>

        <Text
          className="text-black text-[14px] font-regular"
          style={{ fontFamily: 'Poppins_400Regular' }}
        >
          Please describe the bug below and we will try to fix it ASAP!
        </Text>

        
      </View>

      <View className="w-full h-[35vh] p-6">
        <TextInput
          multiline
          style = {styles.input}
          placeholder='Description'
        />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    flex: 1
  },
});

export default Bug;
