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
        <Image source={require('../../assets/feedback.svg')} className="w-7 h-7 p-3" />
      </View>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text
            className="text-black text-[32px] font-poppins-700"
          >
            Feel free to leave us some feedback!
          </Text>
          <Text
            className="text-black text-[15px] font-poppins-400"
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
            className="font-poppins-400"
          />
          <Pressable style={{ alignSelf: 'flex-end' }} onPress={() => Alert.alert('Submitted!')}>
            <Text style={styles.submitBtn} className="bg-rmate-yellow rounded-full px-4 py-2 w-fit font-poppins-700">
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
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 10,
    flex: 1,
  },
  submitBtn: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Feedback;
