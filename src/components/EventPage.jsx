import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowSVG from '../../assets/arrow.svg';
import EventPNG from '../../assets/resumeWorkShop.png';

const EventPage = () => {
  const navigation = useNavigation();
  return (
    <View className="flex h-full">
      <View className="flex items-center mt-0 h-full w-full">
        <Image source={EventPNG} className="w-screen h-fit" />
        <SafeAreaView className="flex-1 justify-end"></SafeAreaView>

        <View className="bg-rmate-white rounded-t-3xl p-6 absolute bottom-0 w-full">
          <TouchableOpacity className="" onPress={() => navigation.navigate('Calander')}>
            <ArrowSVG />
          </TouchableOpacity>

          <Text className="text-2xl font-bold mt-2">Resume Workshop with UBA</Text>

          <Text className="text-sm text-gray-500">Apr 13th 8-9:30pm</Text>

          <Text className="text-sm font-poppins-300">
            RA program: UBA Resume Workshop. Happy week 5 everyone! We are excited to announce that
            this Thursday in partnership with UCR's Undergraduate Business Association. We will be
            hosting a resume workshop on February 9th from 8:00 PM-9:30 PM in the East Lothian
            Galley! Learn tips and tricks that scored our UBA panelist's jobs at Google, Amazon,
            Intel, PC, Cohnreznick, and many more. Be sure to bring your laptops and resumes! We
            hope to see you all there!!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EventPage;

