import { View, Text, Pressable } from "react-native";
import React from "react";

const SRCProgramCard = (props) => {
  const handleSubmit = (event) => {
    console.log("Details");
  };
  return (
    <View className="flex flex-col p-3 rounded-3xl justify-around bg-white object-fill h-[20vh] w-[95vw]">
      <View className="flex flex-row justify-between items-center">
        <View>
          <Text className="font-poppins-600 text-lg text-rmate-blue">
            {props.title}
          </Text>
        </View>
        <View>
          <Text className="font-poppins-300 text-sm text-rmate-midblue">
            ${props.min}-${props.max}
          </Text>
        </View>
      </View>
      <View className="flex flex-row justify-between">
        <View className="flex flex-column self-end font-poppins-300 text-xs text-black">
          <Text>Date: {props.date}</Text>
          <Text>
            Time: {props.start} - {props.end}
          </Text>
          <Text>Location: {props.location}</Text>
        </View>
        <Pressable onPress={handleSubmit} className="mt-4 self-end">
          <View className="bg-rmate-yellow rounded-full px-6 py-1">
            <Text className="font-poppins-500 text-xs text-white">Details</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default SRCProgramCard;
