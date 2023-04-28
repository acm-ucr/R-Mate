import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import BugSVG from '../../assets/bug.svg';

const Bug = () => {
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
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#6F6D6D"
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
    height: 450,
    fontFamily: 'Poppins_400Regular',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 10,
    flex: 1,
  },
  appButtonContainer: {
    alignSelf: 'flex-end',
    marginTop: 25,
    width: 136,
    height: 47,
    elevation: 8,
    backgroundColor: '#FFB81C',
    borderRadius: 23.5,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default Bug;
