import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import React from 'react';

const Feedback = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-row w-full p-3">
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Feather name="arrow-left" size={24} color="rmate-black" />
        </TouchableOpacity>
        <Image source={require('../../assets/feedback.svg')} classname="w-7 h-7 p-3" />
      </View>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text
            className="text-black text-[32px] font-bold"
            style={{ fontFamily: 'Poppins_400SemiBold' }}
          >
            Feel free to leave us some feedback!
          </Text>
          <Text
            className="text-black text-[15px] font-regular"
            style={{ fontFamily: 'Poppins_400Regular' }}
          >
            The R&apos;Mate Team is always striving to improve and we appreciate any and all
            feedback!
          </Text>
        </View>
        <View style={styles.inputPos}>
          <TextInput
            multiline
            placeholder="Feedback"
            placeholderTextColor="#6F6D6D"
            style={styles.inputText}
          />
          <Pressable style={{ alignSelf: 'flex-end' }} onPress={() => Alert.alert('Submitted!')}>
            <Text style={styles.submitBtn} className="bg-rmate-yellow rounded-full px-4 py-2 w-fit">
              Submit
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DEE7F5',
    minWidth: '100%',
    minHeight: '100%',
  },
  body: {
    width: 'full',
    height: 'full',
    padding: 20,
    flex: 'column',
    rowGap: '5vh',
  },
  header: {
    flex: 'row',
    rowGap: 20,
    p: 6,
  },
  inputPos: {
    flex: 'column',
    rowGap: 20,
    width: 'full',
    height: '65vh',
  },
  inputText: {
    height: 450,
    fontFamily: 'Poppins_400Regular',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 10,
    flex: 1,
  },
  submitBtn: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Feedback;
