import { View, Text, TouchableOpacity, Image, Alert, SafeAreaView, TextInput, StyleSheet, Pressable } from 'react-native';
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
    

    <SafeAreaView className='bg-[#DEE7F5] w-full h-full'>
      <View className='flex-row w-full p-3'>
        <TouchableOpacity onPress = {() => navigation.navigate('Profile')}>
          <Feather name='arrow-left' size={24} color='rmate-black'/>
        </TouchableOpacity>
        <Image 
          source={require('../../assets/bug.svg')}
          className='w-7 h-7'
        />
      </View>

      {/* Texts */}

      <View className='w-full p-6'>
        <Text 
          className='text-black text-[32px] font-bold'
          style={{ fontFamily: 'Poppins_600SemiBold' }}
        > 
          Thank you for catching this bug! 
        </Text>

        <Text
          className='text-black text-[15px] font-regular'
          style={{ fontFamily: 'Poppins_400Regular' }}
        >
          Please describe the bug below and we will try to fix it ASAP!
        </Text>

        
      </View>

      <View className='flex-column w-full h-[35vh] p-6'>
        <TextInput
          multiline
          style = {styles.input}
          placeholder='Description'
          placeholderTextColor='#6F6D6D'
        />

        <Pressable onPress={() => Alert.alert('Submitted!')} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Submit</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 10,
    flex: 1
  },
  appButtonContainer: {
    position: 'absolute',
    width: 136,
    height: 47,
    elevation: 8,
    backgroundColor: '#FFB81C',
    borderRadius: 23.5,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  }
});

export default Bug;
