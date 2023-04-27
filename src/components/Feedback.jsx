import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { React, useState } from 'react';
import FeedbackSVG from '../../assets/feedback.svg';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleTyping = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log('Feedback: ' + feedback);
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-rmate-lightblue min-w-[100%] min-h-[100%]">
      <View className="p-3">
        <TouchableOpacity
          className="flex flex-row items-center"
          onPress={() => navigation.navigate('Profile')}
        >
          <Feather name="arrow-left" size={24} color="black" />
          <FeedbackSVG />
        </TouchableOpacity>
      </View>
      <View className="flex flex-column w-full h-full px-5 mt-4">
        <View className="flex flex-column">
          <Text className="text-black text-3xl font-poppins-700">
            Feel free to leave us some feedback!
          </Text>
          <Text className="text-black text-lg font-poppins-400 mt-4">
            The R&apos;Mate Team is always striving to improve and we appreciate any and all
            feedback!
          </Text>
        </View>
        <View className="flex flex-column w-full h-[60vh] mt-4">
          <TextInput
            onChange={handleTyping}
            multiline
            placeholder="Feedback"
            placeholderTextColor="#6F6D6D"
            className="flex-1 font-poppins-400 h-450 bg-rmate-white rounded-md p-3"
          />
          <Pressable style={{ alignSelf: 'flex-end' }} onPress={handleSubmit} className="mt-4">
            <Text className="bg-rmate-yellow rounded-full px-4 py-2 w-fit font-poppins-700 text-xl uppercase text-black">
              Submit
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Feedback;
