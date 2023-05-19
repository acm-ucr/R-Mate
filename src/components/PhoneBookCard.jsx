import { View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PhoneSVG from '../../assets/phone.svg'
import MapSVG from '../../assets/map-filled.svg'

const PhoneBookCard = ({departmentName, phoneNum}) => {
  return (
    <View className ="flex flex-row justify-center m-2">
      <View className ="w-full flex flex-row bg-rmate-lightblue rounded-xl p-2">
        <View className ="w-2/3">
          <Text className ="text-rmate-black text-lg justify-self-start font-poppins-400 font-normal">{departmentName}</Text>
          <Text className ="text-rmate-blue text-sm justify-self-start font-poppins-300 font-light">{phoneNum}</Text>
        </View>
        <View className ="w-1/6 flex justify-evenly p-1">
          <TouchableOpacity className =" w-full flex flex-row items-center aspect-square justify-center bg-rmate-white rounded-full">  
            <PhoneSVG></PhoneSVG>
          </TouchableOpacity>
        </View>
        <View className ="w-1/6 flex justify-evenly p-1">
          <TouchableOpacity className =" w-full flex flex-row items-center aspect-square justify-center bg-rmate-white rounded-full">
          <MapSVG></MapSVG>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PhoneBookCard;
